import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Header from '../components/Header';
import MapContainer from '../containers/MapContainer';
import Footer from '../components/Footer';
import About from '../components/About';

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
  
`;

// Main app container

function App() {
  return (
    <div>
      <Header />
      <About />
      <MapContainer />
      <Footer />
    </div>
  );
}

document
  .addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />, document.getElementById('app'),
    );
  });
