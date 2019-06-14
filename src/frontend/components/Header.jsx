import React from 'react';
import { StyledHeader, Button } from '../../styles/style';

export default function Header() {
  return (
    <StyledHeader>
      <img src="src/frontend/img/breakfast.svg" alt="Icon depicting breakfast plate" />
      <h1>
        Breakfast
      </h1>
      {/* <Button>Sign in</Button> */}
    </StyledHeader>
  );
}
