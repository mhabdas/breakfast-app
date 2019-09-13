/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import StyledModal from "./Modal";
const CloseIcon = React.lazy(() => import("./CloseIcon"));

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

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node,
  footer: PropTypes.node,
  closeModal: PropTypes.func
};

export default Modal;
