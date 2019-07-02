import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react';
import PropTypes from 'prop-types';

const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: calc(50px + 5.5rem) 50px 50px 50px;
  z-index: 1;
`;

const ModalWindow = styled.div`
  background-color: whitesmoke;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
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

    &:last-of-type {
      font-size: 0.75rem;
    }
  }

  img {
    width: 80%;
    border-radius: 5%;
    opacity: 0.8;
    padding-bottom: 0.5rem;
  }
`;

const StyledModal = (props) => {
  const {
    children,
    visible,
  } = props;
  return visible && (
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
  );
};

StyledModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StyledModal;
