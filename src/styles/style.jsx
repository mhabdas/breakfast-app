/* eslint-disable no-unused-expressions */
import styled, { injectGlobal } from 'styled-components';
import '../../node_modules/spinkit/css/spinners/2-double-bounce.css';


// Colors
const colors = {
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
const Button = styled.button`
    border: 2px solid ${colors.dark};
    background-color: ${colors.light};
    padding: .5rem;  
    margin: .25rem;
    color: ${colors.dark};
    font-weight: 700;
    cursor: pointer;
    border-radius: 2px; 
    transition: background-color 1s;

    a {
        color: ${colors.accent};
        text-decoration: none;
        width: 100%;
        height: 100%;
        &:hover {
            color: white;
        }
    }

    &:hover {
        background-color: ${colors.accent};
        color: white;
        a {
            color: white;   
        }
        
    }
`;

const Link = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: ${colors.dark};

    &:hover {
        color: ${colors.accent};
    }
`;

// MapContainer

const Map = styled.div`
    border: 2px solid ${colors.dark};
    border-radius: 2px;
    width: 60vw;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: .5rem;
    `;

// About section

const AboutSection = styled.section`

  h2 {
    font-size: 1.5rem;
    padding-top: 2rem;;
    text-align: center; 
      color: ${colors.accent};

} 
  p {
    text-align: center;
    padding: 1rem 0 1rem 0;  
    color: ${colors.dark}
}`;

// Footer

const StyledFooter = styled.footer`
  text-align: center;
  color: ${colors.dark};
  background-color: ${colors.light};

  p {
    font-size: .75rem;
    :first-child {
    padding-top: 1rem;
    }
    :last-child {
      padding-bottom: 1rem;
    }
  }
`;

// Header

const StyledHeader = styled.header`
height: 5rem;
background-color: ${colors.dark};
display: flex;
flex-direction: row;  
justify-content: center;
align-items: center;

h1 {
  font-weight: 700;
  color: ${colors.light};
  font-size: 2.5rem;
} 

img {
  width: 4rem;
  height: 4rem;
  padding-right: .5rem;
}
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
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
        color: #EE6C4D;
        text-align: center;
        padding-bottom: .5rem;
    }

    h3 {
      color: #3D5A80;
      padding-bottom: .5rem;
    }

    p {
        color: #3D5A80;
        padding-bottom: .5rem;

        &:last-of-type {
          font-size: .75rem;
        }
    }

    img {
      width: 80%;
      border-radius: 5%; 
      opacity: .80;
      padding-bottom: .5rem;
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
  Button,
  Link,
  Map,
  ButtonList,
  AboutSection,
  StyledFooter,
  StyledHeader,
  primaryMap,
  secondaryMap,
  pressedMap,
  ModalBackground,
  ModalWindow,
};
