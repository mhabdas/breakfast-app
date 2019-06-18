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

body {
    background-color: ${colors.light};
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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 50px;
`;

const ModalWindow = styled.div`
  background-color: whitesmoke;
  border-radius: 5px;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    color: #ee6c4d;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #3d5a80;
    padding-bottom: 0.5rem;
  }

  p {
    color: #3d5a80;
    padding-bottom: 0.5rem;

    &:last-of-type {
      font-size: 0.75rem;
    }
  }

  img {
    width: 80%;
    border-radius: 5%;
    opacity: 0.8;
    padding-bottom: 0.5rem;
  }
`;

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
  Link,
  ButtonList,
  primaryMap,
  secondaryMap,
  pressedMap,
  ModalBackground,
  ModalWindow,
  Logo,
};
