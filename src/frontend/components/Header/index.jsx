import React from 'react';
import StyledHeader from './Header';
import Button from '../Button';
import Logo from '../Logo';

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src="src/frontend/img/breakfast.svg" alt="Icon depicting breakfast plate" />
      <h1>
        Breakfast
      </h1>
    </Logo>
    <div>
      <Button large action={() => console.log('signin')} title="Sign in" />
      <Button large action={() => console.log('signup')} title="Sign up" />
    </div>
  </StyledHeader>
);

export default Header;
