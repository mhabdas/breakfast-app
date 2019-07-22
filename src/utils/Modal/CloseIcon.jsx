import React from "react";
import PropTypes from "prop-types";
import IosClose from "react-ionicons/lib/IosClose";
import { colors } from "../../styles/globals";

const CloseIcon = ({ closeModal }) => (
  <div className="close-button">
    <button onClick={closeModal}>
      <IosClose className="close-icon" color={colors.accent} />
    </button>
  </div>
);

CloseIcon.propTypes = {
  closeModal: PropTypes.func
};

export default CloseIcon;
