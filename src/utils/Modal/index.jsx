/* eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";

import StyledModal from "./Modal";

const Modal = props => {
  const { visible, title, body, footer } = props;
  return (
    <StyledModal visible={visible}>
      <h2>{title}</h2>
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
};

export default Modal;
