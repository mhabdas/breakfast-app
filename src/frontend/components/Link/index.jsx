import PropTypes from 'prop-types';
import React from 'react';
import StyledLink from './Link';

const Link = (props) => {
  const {
    href, title, target, description,
  } = props;
  return (
    <StyledLink href={href} title={title} target={target}>
      {description}
    </StyledLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default Link;
