import React from 'react'
import { colors } from '../../styles/globals'
import Close from '@material-ui/icons/Close'

type Props = {
  closeModal: () => void
}

const CloseIcon = (props: Props) => {
  const { closeModal } = props
  return (
    <div className="close-button">
      <button onClick={closeModal}>
        <Close className="close-icon" />
      </button>
    </div>
  )
}

export default CloseIcon
