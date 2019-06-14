/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Button, ModalBackground, ModalWindow } from '../../styles/style';

export default function Modal(props) {
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
  return show && (
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
