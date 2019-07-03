import React, { Suspense } from "react";

import MapContainer from '../../containers/MapContainer/MapContainer';
import Spinner from "../Spinner";
const AboutSection = React.lazy(() => import("../AboutSection"));
const Footer = React.lazy(() => import("../Footer"));
const Header = React.lazy(() => import("../Header"));



const LandingPage = () => (
  <div style={{
    minHeight: '100vh',
    position: 'relative',
  }}
  >
    <Suspense fallback={<Spinner />}>

    <Header />
    <AboutSection />
    <MapContainer />
    <Footer />
    </Suspense>
  </div>
);

export default LandingPage;
