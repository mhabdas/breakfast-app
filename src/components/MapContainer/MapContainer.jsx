import React, { Suspense, useState, useEffect, useCallback } from "react";
import axios from "axios";

const Button = React.lazy(() => import("../../utils/Button"));
const Map = React.lazy(() => import("../Map"));
const Modal = React.lazy(() => import("../../utils/Modal"));
const MainSection = React.lazy(() => import("../MainSection"));
import { ButtonList } from "../../utils/Button/Button";
import Spinner from "../../utils/Spinner";

const initialState = {
  breakfastName: "",
  description: "",
  img: "",
  attr: "",
  alt: "",
  info:
    "Sorry. This content is not yet available. Try a different or random country."
};

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";
const apiUrl =
  "https://codekingdom.pl/projects/coderslab-workshops/international-breakfast/";

const initialZoom = {
  center: [0, 20],
  zoom: 1
};

const MapContainer = () => {
  const [data, setData] = useState({ data: [] });
  const [continents, setContinents] = useState([
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
    let ignore = false;

    async function fetchData() {
      const result = await axios(apiUrl);
      if (!ignore) setData(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  const getBreakfastData = () => {
    data.breakfast.forEach(element => {
      if (element.name === country) {
        setBreakfastByCountry(...element);
      }
    });
  };

  useEffect(() => {
    data.breakfast && country !== "" &&
      data.breakfast.forEach(element => {
        if (element.name === country) {
          setBreakfastByCountry({ ...element });
        }
      });
  }, [country, data]);

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
    const random =
      data.breakfast &&
      data.breakfast[Math.floor(Math.random() * data.breakfast.length)];
    const countryName = random.name;
    setCountry(countryName);
    getBreakfastData(countryName);
    handleToggle();
  };

  const {
    breakfastName,
    description,
    img,
    attr,
    info,
    alt,
    center
  } = breakfastByCountry;
  return (
    <MainSection>
      <Suspense fallback={<div />}>
        <Modal
          visible={visible}
          title={country}
          closeModal={() => handleClose()}
          body={
            <div>
              <h3>
                {breakfastName}
                {info}
              </h3>
              <p>{description}</p>
              <img src={img} alt={alt} />
              <p>{attr}</p>
            </div>
          }
          footer={
            <div>
              <Button
                action={() =>
                  window.open(
                    `https://www.google.pl/search?q=${breakfastName}+recipe`
                  )
                }
                title="Take a challenge"
              />
            </div>
          }
        />
      </Suspense>
      <Map
        data={data.breakfast}
        center={zoom.center}
        geoUrl={geoUrl}
        zoom={zoom.zoom}
        handleClick={handleClick}
      />
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
    </MainSection>
  );
};

export default MapContainer;
