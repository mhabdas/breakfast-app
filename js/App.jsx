import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

import {Header, About, Footer} from './MainComponents.jsx';
import {MapContainer} from './MapContainer.jsx'

// CSS Styles (with styled-components)

injectGlobal `
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
  
`;

// Main app container

class App extends React.Component {

    render() {

        return <div>
            <Header></Header>
            <About></About>
            <MapContainer></MapContainer>
            <Footer></Footer>
        </div>
    }
}

document
    .addEventListener('DOMContentLoaded', function () {
        ReactDOM.render(
            <App/>, document.getElementById('app'))
    });
