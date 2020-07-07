/* eslint-disable no-unused-expressions */
import React, { ReactNode } from 'react'
import StyledModal from './Modal'
const CloseIcon = React.lazy(() => import('./CloseIcon'))

type Props = {
  visible: boolean
  title: string
  body: ReactNode
  footer?: ReactNode
  closeModal: () => void
}

const Modal = (props: Props) => {
  const { visible, title, body, footer, closeModal } = props
  return (
    <StyledModal visible={visible}>
      <CloseIcon closeModal={closeModal} />
      <h2 style={{ display: 'flex', alignItems: 'center' }}>{title}</h2>
      {body}
      <div className="modal-footer">{footer}</div>
    </StyledModal>
  )
}

export default Modal
