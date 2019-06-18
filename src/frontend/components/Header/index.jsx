import React from 'react';
import StyledHeader from './Header';
import Button from '../Button';
import { Logo } from '../../../styles/globals';

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src="src/frontend/img/breakfast.svg" alt="Icon depicting breakfast plate" />
      <h1>
        Breakfast
      </h1>
    </Logo>
    <div>
      <Button large title="Sign in" />
      <Button large title="Sign up" />
    </div>
  </StyledHeader>
);

export default Header;
