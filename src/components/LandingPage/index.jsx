import React, { Suspense } from "react";

import MapContainer from '../../containers/MapContainer/MapContainer';
const AboutSection = React.lazy(() => import("../AboutSection"));
const Footer = React.lazy(() => import("../Footer"));
const Header = React.lazy(() => import("../Header"));



const LandingPage = () => (
  <div style={{
    minHeight: '100vh',
    position: 'relative',
  }}
  >
    <Suspense fallback={<div>Loading...</div>}>

    <Header />
    <AboutSection />
    <MapContainer />
    <Footer />
    </Suspense>
  </div>
);

export default LandingPage;
