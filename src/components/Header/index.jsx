import React, { Suspense } from "react";
import StyledHeader from "./Header";
const Logo = React.lazy(() => import("../../utils/Logo"));
import logoPic from "../../img/breakfast.svg";
const AuthModals = React.lazy(() => import("../AuthModals/AuthModals"));

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={logoPic} alt="Icon depicting breakfast plate" />
        <h1>Breakfast</h1>
      </Logo>
      <Suspense fallback={<div />}>
        <AuthModals />
      </Suspense>
    </StyledHeader>
  );
};

export default Header;
