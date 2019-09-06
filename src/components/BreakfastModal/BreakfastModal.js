import React, { Suspense } from "react";
import Button from "../../utils/Button";
import Modal from "../../utils/Modal";
import PropTypes from "prop-types";

const BreakfastModal = ({
  breakfastByCountry,
  visible,
  country,
  handleClose
}) => {
  const {
    breakfastName,
    description,
    img,
    attr,
    info,
    alt
  } = breakfastByCountry;
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
            <Button
              action={() =>
                window.open(
                  `https://www.google.pl/search?q=${breakfastName}+recipe`
                )
              }
              title="Take a challenge"
            />
          </div>
        }
      />
    </Suspense>
  );
};

BreakfastModal.propTypes = {
  breakfastByCountry: PropTypes.objectOf(PropTypes.string).isRequired,
  visible: PropTypes.bool.isRequired,
  country: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default BreakfastModal;
