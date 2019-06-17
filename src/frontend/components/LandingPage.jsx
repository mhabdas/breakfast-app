import React from 'react';


import MapContainer from '../containers/MapContainer';
import Footer from './Footer';
import Header from './Header';
import About from './About';

const LandingPage = () => (
  <div>
    <Header />
    <About />
    <MapContainer />
    <Footer />
  </div>
);

export default LandingPage;
