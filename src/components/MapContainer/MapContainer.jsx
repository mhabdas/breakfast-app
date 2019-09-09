import React, { useState, useEffect, Suspense } from "react";
const Button = React.lazy(() => import("../../utils/Button"));
const Map = React.lazy(() => import("../Map"));
const MainSection = React.lazy(() => import("../MainSection"));
const BreakfastModal = React.lazy(() => import("../BreakfastModal/BreakfastModal"));
import { withFirebase } from "../Firebase/context";
import ButtonList from "../../utils/Button/ButtonList";
import geoUrl from "../../utils/world-50m-simplified.json"


const initialState = {
  breakfastName: "",
  description: "",
  img: "",
  attr: "",
  alt: "",
  info:
    "Sorry. This content is not yet available. Try a different or random country."
};

const initialZoom = {
  center: [0, 20],
  zoom: 1
};

const MapContainerBase = props => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [continents] = useState([
    { name: "Asia", coordinates: [103.8198, 15.3521] },
    { name: "Africa", coordinates: [3.3792, 6.5244] },
    { name: "Australia", coordinates: [151.2093, -33.8688] },
    { name: "Europe", coordinates: [8.5417, 52.3769] },
    { name: "North America", coordinates: [-122.4194, 37.7749] },
    { name: "South America", coordinates: [-58.3816, -18.6037] }
  ]);
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("");
  const [breakfastByCountry, setBreakfastByCountry] = useState({
    ...initialState
  });
  const [zoom, setZoom] = useState({ ...initialZoom });

  useEffect(() => {
    props.firebase.breakfast().on("value", snapshot => {
      setLoading(true);
      setData(snapshot.val());
      setLoading(false);
    });
  }, [props.firebase]);

  const getBreakfastData = (country) => {
    setBreakfastByCountry(data[country]);
  };

  const handleToggle = () => {
    setVisible(!visible);
  };

  const handleZoom = e => {
    const contId = e.target.getAttribute("data-attr");
    const cont = continents[contId];
    if (cont.name === "Europe") {
      setZoom({
        center: cont.coordinates,
        zoom: 3.5
      });
    } else {
      setZoom({
        center: cont.coordinates,
        zoom: 2
      });
    }
  };

  const handleReset = () => {
    setZoom({ ...initialZoom });
  };

  const handleClick = geography => {
    const countryName = geography.properties.NAME;
    setCountry(countryName);
    getBreakfastData(countryName);
    handleToggle();
  };

  const handleClose = () => {
    handleToggle();
    setBreakfastByCountry({ ...initialState });
    setCountry("");
  };

  const handleRandom = () => {
    const keys = data && Object.keys(data);
    const countryName =  keys &&
      keys[Math.floor(Math.random() * keys.length)];
    setCountry(countryName);
    getBreakfastData(countryName);
    handleToggle();
  };

  return (
    <MainSection>
      <Suspense fallback={<div />}>
      <BreakfastModal
        breakfastByCountry={breakfastByCountry}
        visible={visible}
        handleClose={handleClose}
        country={country}
      />
      </Suspense>
        <Map
        data={data}
        center={zoom.center}
        geoUrl={geoUrl}
        zoom={zoom.zoom}
        handleClick={handleClick}
        loading={loading}
      />
      <Suspense fallback={<div />}>
      <ButtonList>
        {continents.map((cont, i) => (
          <Button
            key={cont.name}
            action={handleZoom}
            dataAttr={i}
            title={cont.name}
          />
        ))}
        <Button action={handleReset} title="Reset" />
        <Button action={handleRandom} title="Random" />
      </ButtonList>
      </Suspense>
    </MainSection>
  );
};

const MapContainer = withFirebase(MapContainerBase);

export default MapContainer;
