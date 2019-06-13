import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';
import MapContainer from '../containers/MapContainer';
import Footer from '../components/Footer';
import About from '../components/About';


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
