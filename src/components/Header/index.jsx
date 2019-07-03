import React from 'react';
import StyledHeader from './Header';
const Button = React.lazy(() => import("../Button"));
const Logo = React.lazy(() => import("../Logo"));
import logoPic from '../../img/breakfast.svg';

const Header = () => (
  <StyledHeader>
    <Logo>
      <img src={logoPic} alt="Icon depicting breakfast plate" />
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
