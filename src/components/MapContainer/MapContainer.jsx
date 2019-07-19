import React, { Component, Suspense } from "react";

const Button = React.lazy(() => import("../../utils/Button"));
const Map = React.lazy(() => import("../Map"));
const Modal = React.lazy(() => import("../../utils/Modal"));
const MainSection = React.lazy(() => import("../MainSection"));
import { ButtonList } from "../../utils/Button/Button";
import Spinner from "../../utils/Spinner";

const initialState = {
  country: "",
  visible: false,
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

class MapContainer extends Component {
  state = {
    data: null,
    ...initialZoom,
    ...initialState,
    continents: [
      { name: "Asia", coordinates: [103.8198, 15.3521] },
      { name: "Africa", coordinates: [3.3792, 6.5244] },
      { name: "Australia", coordinates: [151.2093, -33.8688] },
      { name: "Europe", coordinates: [8.5417, 52.3769] },
      { name: "North America", coordinates: [-122.4194, 37.7749] },
      { name: "South America", coordinates: [-58.3816, -18.6037] }
    ]
  };

  componentDidMount() {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data.breakfast }))
      .catch(err => err);
  }

  getBreakfastData(resp) {
    const { country } = this.state;
    resp.forEach(element => {
      if (element.name === country) {
        this.setState({
          breakfastName: element.breakfastName,
          description: element.description,
          img: element.img,
          attr: element.attr,
          info: ""
        });
      }
    });
  }

  handleToggle = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible
    });
  };

  handleZoom = e => {
    const { continents } = this.state;
    const contId = e.target.getAttribute("data-attr");
    const cont = continents[contId];
    if (cont.name === "Europe") {
      this.setState({
        center: cont.coordinates,
        zoom: 3.5
      });
    } else {
      this.setState({
        center: cont.coordinates,
        zoom: 2
      });
    }
  };

  handleReset = () => {
    this.setState({
      ...initialZoom
    });
  };

  handleClick = geography => {
    const { data } = this.state;
    const countryName = geography.properties.NAME;
    this.setState(
      {
        country: countryName
      },
      () => {
        this.getBreakfastData(data);
        this.handleToggle();
      }
    );
  };

  handleClose = () => {
    this.handleToggle();
    this.setState({
      ...initialState
    });
  };

  handleRandom = () => {
    const { data } = this.state;
    const random = data[Math.floor(Math.random() * data.length)];
    const countryName = random.name;
    this.setState(
      {
        country: countryName
      },
      () => {
        this.getBreakfastData(data);
        this.handleToggle();
      }
    );
  };

  render() {
    const {
      country,
      breakfastName,
      description,
      img,
      attr,
      info,
      alt,
      center,
      zoom,
      continents,
      visible,
      data
    } = this.state;
    return (
      <MainSection>
        <Suspense fallback={<Spinner />}>
          <Modal
            visible={visible}
            title={country}
            closeModal={() => this.handleClose()}
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
          data={data}
          center={center}
          geoUrl={geoUrl}
          zoom={zoom}
          handleClick={this.handleClick}
        />
        <ButtonList>
          {continents.map((cont, i) => (
            <Button
              key={cont.name}
              action={this.handleZoom}
              dataAttr={i}
              title={cont.name}
            />
          ))}
          <Button action={this.handleReset} title="Reset" />
          <Button action={this.handleRandom} title="Random" />
        </ButtonList>
      </MainSection>
    );
  }
}

export default MapContainer;
