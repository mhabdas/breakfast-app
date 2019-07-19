/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { IoIosClose } from "react-icons/io";
import StyledModal from "./Modal";

const CloseIcon = ({ closeModal }) => (
  <IconContext.Provider value={{ className: "close-icon" }}>
    <div className="close-button">
      <button onClick={closeModal}>
        <IoIosClose />
      </button>
    </div>
  </IconContext.Provider>
);

const Modal = props => {
  const { visible, title, body, footer, closeModal } = props;
  return (
    <StyledModal visible={visible}>
      <CloseIcon closeModal={closeModal} />
      <h2 style={{ display: "flex", alignItems: "center" }}>{title}</h2>
      {body}
      <div className="modal-footer">{footer}</div>
    </StyledModal>
  );
};

CloseIcon.propTypes = {
  closeModal: PropTypes.func
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  footer: PropTypes.node,
  closeModal: PropTypes.func
};

export default Modal;
