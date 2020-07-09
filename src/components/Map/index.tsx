// @ts-nocheck

import { ComposableMap, Geographies, Geography, ZoomableGroup, Point } from 'react-simple-maps'
import { colors } from '@styles/globals'
import React from 'react'
import StyledMap from './Map'
import Spinner from '@utils/Spinner'
import { BreakfastDataInterface } from '@interfaces/BreakfastInterface'

type Props = {
  data: BreakfastDataInterface
  center: Point
  zoom: number
  geoUrl: Record<string, any>
  handleClick: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void
}

const primaryMap = {
  fill: colors.secondary,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
}

const secondaryMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  transition: 'fill .5s',
}

const pressedMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
}

const Map = (props: Props) => {
  const { data, center, zoom, geoUrl, handleClick } = props

  return (
    <StyledMap>
      <ComposableMap
        projectionConfig={{
          scale: 220,
        }}
        width={980}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        {data ? (
          <ZoomableGroup center={center} zoom={zoom}>
            <Geographies geography={geoUrl}>
              {(geographies, projection) =>
                geographies?.map(geography => {
                  console.log(geography)
                  return (
                    <Geography
                      key={geography.properties.NAME}
                      geography={geography}
                      projection={projection}
                      style={
                        data[geography.properties.NAME || geography.properties.NAME_LONG]
                          ? {
                              default: { ...primaryMap },
                              hover: { ...pressedMap },
                              pressed: { ...pressedMap },
                            }
                          : {
                              default: { ...secondaryMap },
                              hover: { ...secondaryMap },
                              pressed: { ...secondaryMap },
                            }
                      }
                      onClick={data[geography.properties.NAME || geography.properties.NAME_LONG] && handleClick}
                    />
                  )
                })
              }
            </Geographies>
          </ZoomableGroup>
        ) : (
          <Spinner />
        )}
      </ComposableMap>
    </StyledMap>
  )
}

Map.defaultProps = {
  data: null,
}

export default Map
