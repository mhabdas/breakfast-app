import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button } from '../../styles/style';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    padding: 50px;
  
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
        color: #EE6C4D;
        text-align: center;
        padding-bottom: .5rem;
    }

    h3 {
      color: #3D5A80;
      padding-bottom: .5rem;
    }

    p {
        color: #3D5A80;
        padding-bottom: .5rem;

        &:last-of-type {
          font-size: .75rem;
        }
    }

    img {
      width: 80%;
      border-radius: 5%; 
      opacity: .80;
      padding-bottom: .5rem;
    }

    
`;

function Modal(props) {
  const {
    show,
    close,
    country,
    breakfastName,
    info,
    description,
    img,
    attr,
    alt,
  } = props;
  if (!show) {
    return null;
  } return (
    <ModalBackground>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave
        transitionLeaveTimeout={500}
      >
        <ModalWindow>
          <h2>
            {country}
          </h2>
          <h3>
            {breakfastName}
            {info}
          </h3>
          <p>
            {description}
          </p>
          <img
            src={img}
            alt={alt}
          />
          <p>
            {attr}
          </p>
          <div className="modal-footer">
            <Button>
              <a
                href={`https://www.google.pl/search?q=${breakfastName}+recipe`}
                rel="noopener noreferrer"
                target="_blank"
              >
                    Take a challenge
              </a>
            </Button>
            <Button onClick={close}>
                Close
            </Button>
          </div>
        </ModalWindow>
      </ReactCSSTransitionGroup>
    </ModalBackground>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  breakfastName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
