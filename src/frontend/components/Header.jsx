import React from 'react';
import styled from 'styled-components';

// Header

const StyledHeader = styled.header`
height: 5rem;
background-color: lightgrey;
display: flex;
flex-direction: row;  
justify-content: center;
align-items: center;

h1 {
  font-weight: 700;
  color: #EE6C4D;
  font-size: 2.5rem;
} 

img {
  width: 4rem;
  height: 4rem;
  padding-right: .5rem;
}
`;

function Header() {
  return (
    <StyledHeader>
      <img src="src/frontend/img/breakfast.svg" alt="Icon depicting breakfast plate" />
      <h1>
        Breakfast
      </h1>
    </StyledHeader>
  );
}

export default Header;
