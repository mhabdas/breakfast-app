/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from "styled-components";

// Colors
const colors = {
  light: "#e8edf3",
  accent: "#e05323",
  dark: "#22264b",
  secondary: "#e05323"
};

// CSS Styles (with styled-utils)
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  min-height: 100vh;
  margin:0;
  padding:0;
}

body {
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700&display=swap');
   font-family: 'Work Sans', sans-serif;
   background-color: ${colors.light};
   min-height: 100vh;
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
  
.close-icon {
  color: ${colors.accent};
  width: 35px;
  height: 35px;
  font-weight: 600;
}
  
.close-button {
  display: flex; 
  justify-content: flex-end; 
  width: 100%;
  
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
  }
}
`;

export { colors, GlobalStyle };
