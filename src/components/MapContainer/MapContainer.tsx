import React, { useState, useEffect, Suspense } from 'react'
const Button = React.lazy(() => import('@utils/Button'))
const Map = React.lazy(() => import('../Map'))
const MainSection = React.lazy(() => import('../MainSection'))
const BreakfastModal = React.lazy(() => import('../BreakfastModal/BreakfastModal'))
import { withFirebase } from '../Firebase/FirebaseContext'
import Firebase from '../Firebase'
import ButtonList from '@utils/Button/ButtonList'
import geoUrl from '@utils/world-50m-simplified.json'
import BreakfastInterface, { BreakfastDataInterface } from '@interfaces/BreakfastInterface'
import GeographyInterface from '@interfaces/GeographyInterface'
import { Point } from 'react-simple-maps'

type Props = {
  firebase: Firebase
}

type ContinentType = {
  name: string
  coordinates: Point
}

type ZoomType = {
  center: Point
  zoom: number
}

const initialState = {
  breakfastName: '',
  description: '',
  img: '',
  attr: '',
  alt: '',
  info: 'Sorry. This content is not yet available. Try a different or random country.',
}

const initialZoom = {
  center: [0, 20] as Point,
  zoom: 1,
}

const MapContainerBase = (props: Props) => {
  const [data, setData] = useState<BreakfastDataInterface | null>(null)
  const [continents] = useState<ContinentType[]>([
    { name: 'Asia', coordinates: [103.8198, 15.3521] },
    { name: 'Africa', coordinates: [3.3792, 6.5244] },
    { name: 'Australia', coordinates: [151.2093, -33.8688] },
    { name: 'Europe', coordinates: [8.5417, 52.3769] },
    { name: 'North America', coordinates: [-122.4194, 37.7749] },
    { name: 'South America', coordinates: [-58.3816, -18.6037] },
  ])
  const [visible, setVisible] = useState<boolean>(false)
  const [country, setCountry] = useState<string>('')
  const [breakfastByCountry, setBreakfastByCountry] = useState<BreakfastInterface>({
    ...initialState,
  })
  const [zoom, setZoom] = useState<ZoomType>(initialZoom)

  useEffect(() => {
    props.firebase.breakfast().on('value', snapshot => {
      setData(snapshot.val())
    })
  }, [props.firebase])

  const getBreakfastData = (country: string) => {
    if (data != null) {
      setBreakfastByCountry(data[country])
    }
  }

  const handleToggle = () => {
    setVisible(!visible)
  }

  const handleZoom = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const contId = (e?.target as HTMLButtonElement).getAttribute('data-attr')
    const cont = continents[contId!]
    if (cont.name === 'Europe') {
      setZoom({
        center: cont.coordinates,
        zoom: 3.5,
      })
    } else {
      setZoom({
        center: cont.coordinates,
        zoom: 2,
      })
    }
  }

  const handleReset = () => {
    setZoom({ ...initialZoom })
  }

  const handleClick = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const countryName = ((e as unknown) as GeographyInterface).properties.NAME
    setCountry(countryName)
    getBreakfastData(countryName)
    handleToggle()
  }

  const handleClose = () => {
    handleToggle()
    setBreakfastByCountry({ ...initialState })
    setCountry('')
  }

  const handleRandom = () => {
    const keys = data && Object.keys(data)
    const countryName = keys && keys[Math.floor(Math.random() * keys.length)]
    if (countryName != null) {
      setCountry(countryName)
      getBreakfastData(countryName)
    }
    handleToggle()
  }

  return (
    <MainSection>
      <Suspense fallback={<div />}>
        <BreakfastModal breakfastByCountry={breakfastByCountry} visible={visible} handleClose={handleClose} country={country} />
      </Suspense>
      {data != null && <Map data={data} center={zoom.center} geoUrl={geoUrl} zoom={zoom.zoom} handleClick={handleClick} />}
      <Suspense fallback={<div />}>
        <ButtonList>
          {continents.map((cont, i) => (
            <Button key={cont.name} action={handleZoom} dataAttr={i} title={cont.name} />
          ))}
          <Button action={handleReset} title="Reset" />
          <Button action={handleRandom} title="Random" />
        </ButtonList>
      </Suspense>
    </MainSection>
  )
}

const MapContainer = withFirebase(MapContainerBase)

export default MapContainer
