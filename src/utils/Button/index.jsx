import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button";

const Button = ({ action, title, large, dataAttr }) => (
  <StyledButton
    {...(typeof action === "string" ? { type: action } : { onClick: action })}
    isLarge={large}
    data-attr={dataAttr}
  >
    {title}
  </StyledButton>
);

Button.propTypes = {
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  large: PropTypes.bool,
  dataAttr: PropTypes.number
};

Button.defaultProps = {
  large: false,
  dataAttr: undefined
};

export default Button;
