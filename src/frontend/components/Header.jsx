import React from 'react';
import { StyledHeader, Button, Logo } from '../../styles/style';

export default function Header() {
  return (
    <StyledHeader>
      <Logo>
        <img src="src/frontend/img/breakfast.svg" alt="Icon depicting breakfast plate" />
        <h1>
        Breakfast
        </h1>
      </Logo>
      <div>
        <Button large>Sign in</Button>
        <Button large>Sign up</Button>
      </div>
    </StyledHeader>
  );
}
