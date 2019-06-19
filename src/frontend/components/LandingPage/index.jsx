import React from 'react';

import MapContainer from '../../containers/MapContainer/MapContainer';
import About from '../AboutSection';
import Footer from '../Footer';
import Header from '../Header';

const LandingPage = () => (
  <div style={{
    minHeight: '100%',
    position: 'relative',
  }}
  >
    <Header />
    <About />
    <MapContainer />
    <Footer />
  </div>
);

export default LandingPage;
