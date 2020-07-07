import React, { Suspense } from 'react'
import Button from '../../utils/Button'
import Modal from '../../utils/Modal'
import BreakfastInterface from '../../interfaces/BreakfastInterface'

type Props = {
  breakfastByCountry: BreakfastInterface
  visible: boolean
  country: string
  handleClose: () => void
}

const BreakfastModal = (props: Props) => {
  const { breakfastByCountry, visible, country, handleClose } = props
  const { breakfastName, description, img, attr, info, alt } = breakfastByCountry
  return (
    <Suspense fallback={<div />}>
      <Modal
        visible={visible}
        title={country}
        closeModal={() => handleClose()}
        body={
          <div>
            <h3>
              {breakfastName}
              {info}
            </h3>
            <p>{description}</p>
            <img src={img} alt={alt} />
            <p>{attr}</p>
          </div>
        }
        footer={
          <div>
            <Button action={() => window.open(`https://www.google.pl/search?q=${breakfastName}+recipe`)} title="Take a challenge" />
          </div>
        }
      />
    </Suspense>
  )
}

export default BreakfastModal
