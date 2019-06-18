import React from 'react';

import MapContainer from '../../containers/MapContainer/MapContainer';
import About from '../AboutSection';
import Footer from '../Footer';
import Header from '../Header';

const LandingPage = () => (
  <div>
    <Header />
    <About />
    <MapContainer />
    <Footer />
  </div>
);

export default LandingPage;
