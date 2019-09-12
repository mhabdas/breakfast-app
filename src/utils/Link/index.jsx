import PropTypes from 'prop-types';
import React from 'react';
import StyledLink from './Link';

const Link = (props) => {
  const {
    href, title, target, description, rel,
  } = props;
  return (
    <StyledLink href={href} title={title} target={target} rel={rel}>
      {description}
    </StyledLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
};

export default Link;
