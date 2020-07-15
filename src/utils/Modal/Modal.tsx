import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import React, { ReactNode } from 'react'

const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: calc(50px + 5.5rem) 50px 50px 50px;
  z-index: 1;
`

const ModalWindow = styled.div`
  background-color: whitesmoke;
  border-radius: 5px;
  max-width: 500px;
  margin: 0 auto;
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    color: #ee6c4d;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #3d5a80;
    padding-bottom: 0.5rem;
  }

  p {
    color: #3d5a80;
    padding-bottom: 0.5rem;
    max-width: 80%;
    margin: 0 auto;

    &:last-of-type {
      font-size: 0.75rem;
    }
  }

  img {
    width: 80%;
    border-radius: 5%;
    opacity: 0.8;
    max-height: 275px;
    object-fit: cover;
  }
`

type Props = {
  children: ReactNode
  visible: boolean
}

const StyledModal = (props: Props) => {
  const { children, visible } = props
  return visible ? (
    <ModalBackground>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave
        transitionLeaveTimeout={500}
      >
        <ModalWindow>{children}</ModalWindow>
      </ReactCSSTransitionGroup>
    </ModalBackground>
  ) : null
}

export default StyledModal
