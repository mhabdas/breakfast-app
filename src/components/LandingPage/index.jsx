import React, { Suspense } from "react";

import Spinner from "../../utils/Spinner";
import { GlobalStyle } from "../../styles/globals";
const AboutSection = React.lazy(() => import("../AboutSection"));
const Footer = React.lazy(() => import("../Footer"));
const Header = React.lazy(() => import("../Header"));
const MapContainer = React.lazy(() => import("../MapContainer/MapContainer"));

const LandingPage = () => (
  <div
    style={{
      minHeight: "100vh",
      position: "relative"
    }}
  >
    <GlobalStyle />
    <Suspense fallback={<Spinner />}>
      <Header />
      <AboutSection />
      <MapContainer />
      <Footer />
    </Suspense>
  </div>
);

export default LandingPage;
