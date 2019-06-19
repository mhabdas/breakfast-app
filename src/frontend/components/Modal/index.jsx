/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import StyledModal from './Modal';

const Modal = (props) => {
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
  return (
    <StyledModal visible={show}>
      <h2>{country}</h2>
      <h3>
        {breakfastName}
        {info}
      </h3>
      <p>{description}</p>
      <img src={img} alt={alt} />
      <p>{attr}</p>
      <div className="modal-footer">
        <Button
          action={() => window.open(
            `https://www.google.pl/search?q=${breakfastName}+recipe`,
          )
                }
          title="Take a challenge"
        />
        <Button action={close} title="Close" />
      </div>
    </StyledModal>
  );
};

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
