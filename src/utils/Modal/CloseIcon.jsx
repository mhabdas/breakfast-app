import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";
import React from "react";
import PropTypes from "prop-types";

const CloseIcon = ({ closeModal }) => (
  <IconContext.Provider value={{ className: "close-icon" }}>
    <div className="close-button">
      <button onClick={closeModal}>
        <IoIosClose />
      </button>
    </div>
  </IconContext.Provider>
);

CloseIcon.propTypes = {
  closeModal: PropTypes.func
};

export default CloseIcon;
