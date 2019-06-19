import React from 'react';
import PropTypes from 'prop-types';
import StyledMainSection from './MainSection';

const MainSection = (props) => {
  const { children } = props;

  return <StyledMainSection>{children}</StyledMainSection>;
};

export default MainSection;

MainSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
