/* eslint-disable no-unused-expressions */
import styled, { injectGlobal } from 'styled-components';
import '../../node_modules/spinkit/css/spinners/2-double-bounce.css';

// Colors
export const colors = {
  light: '#e8edf3',
  accent: '#e05323',
  dark: '#22264b',
  secondary: '#e05323',
};

// CSS Styles (with styled-components)
injectGlobal`
* {
  box-sizing: border-box;
  font-family: Work Sans;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
   margin:0;
   padding:0;
}

body {
   background-color: ${colors.light};
   height: 100%;
   margin:0;
   padding:0;
}

.fade-enter {
    opacity: 0.01;
  }
  
.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
.fade-leave {
    opacity: 1;
  }
  
.fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
.fade-appear {
    opacity: 0.01;
  }
  
.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }
  
.sk-double-bounce .sk-child {
 background-color: ${colors.accent};
}
`;

// Buttons & Links

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.light};

  &:hover {
    color: ${colors.accent};
  }
`;

// MapContainer

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;

// About section

// Footer

// Header

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5rem;

  h1 {
    font-weight: 700;
    color: ${colors.light};
    font-size: 2.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    padding-right: 0.5rem;
  }
`;

const primaryMap = {
  fill: colors.secondary,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
};

const secondaryMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  transition: 'fill .5s',
};

const pressedMap = {
  fill: colors.light,
  stroke: colors.dark,
  strokeWidth: 0.65,
  outline: 'none',
  cursor: 'pointer',
  transition: 'fill .5s',
};

export {
  Link, ButtonList, primaryMap, secondaryMap, pressedMap, Logo,
};
