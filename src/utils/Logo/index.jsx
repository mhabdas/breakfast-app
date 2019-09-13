import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './Logo';

const Logo = ({ children }) => <StyledLogo>{children}</StyledLogo>;

Logo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Logo;
