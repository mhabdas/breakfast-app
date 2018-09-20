import styled, {injectGlobal} from 'styled-components';
import '../../node_modules/spinkit/css/spinners/2-double-bounce.css';


// Colors
const colors = {
  background: 'whitesmoke',
  accent: '#EE6C4D',
  text: '#3D5A80',
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
    background-color: whitesmoke;
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
    border: 2px solid ${colors.accent};
    background-color: ${colors.background};
    padding: .5rem;  
    margin: .25rem;
    color: ${colors.accent};
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
    color: ${colors.text};

    &:hover {
        color: ${colors.accent};
    }
`;

// MapContainer

const Map = styled.div`
    border: 2px solid #EE6C4D;
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
    padding-bottom: 2rem;
    `;

export {
  Button, Link, Map, ButtonList,
};

