import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button';

const Button = ({
  action, title, large, dataAttr,
}) => (
  <StyledButton onClick={action} isLarge={large} data-attr={dataAttr}>
    {title}
  </StyledButton>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  large: PropTypes.bool,
  dataAttr: PropTypes.number,
};

Button.defaultProps = {
  large: false,
  dataAttr: undefined,
};

export default Button;
