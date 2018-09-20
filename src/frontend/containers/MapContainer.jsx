import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';


import Modal from './Modal';
import { Button, ButtonList, Map } from '../../styles/style';

const Loader = require('halogen/RotateLoader');

const initialState = {
  country: '',
  visible: false,
  breakfastName: '',
  description: '',
  img: '',
  attr: '',
  alt: '',
  info: 'Sorry. This content is not yet available. Try a different or random country.',
};

const initialZoom = {
  center: [0, 20],
  zoom: 1,
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      ...initialZoom,
      ...initialState,
      continents: [
        { name: 'Asia', coordinates: [103.8198, 15.3521] },
        { name: 'Africa', coordinates: [3.3792, 6.5244] },
        { name: 'Australia', coordinates: [151.2093, -33.8688] },
        { name: 'Europe', coordinates: [8.5417, 52.3769] },
        { name: 'North America', coordinates: [-122.4194, 37.7749] },
        { name: 'South America', coordinates: [-58.3816, -18.6037] },
      ],
    };
    this.handleZoom = this.handleZoom.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  componentDidMount() {
    fetch('https://codekingdom.pl/projects/coderslab-workshops/international-breakfast/')
      .then(resp => resp.json())
      .then(data => this.setState({ data: data.breakfast }))
      .catch(err => err);
  }

  getBreakfastData(resp) {
    const {
      country,
    } = this.state;
    resp.forEach((element) => {
      if (element.name === country) {
        this.setState({
          breakfastName: element.breakfastName,
          description: element.description,
          img: element.img,
          attr: element.attr,
          info: '',
        });
      }
    });
  }

  handleToggle() {
    const {
      visible,
    } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  handleZoom(e) {
    const {
      continents,
    } = this.state;
    const contId = e.target.getAttribute('data-cont');
    const cont = continents[contId];
    if (cont.name === 'Europe') {
      this.setState({
        center: cont.coordinates,
        zoom: 3.5,
      });
    } else {
      this.setState({
        center: cont.coordinates,
        zoom: 2,
      });
    }
  }

  handleReset() {
    this.setState({
      ...initialZoom,
    });
  }

  handleClick(geography) {
    const {
      data,
    } = this.state;
    const countryName = geography.properties.NAME;
    this.setState({
      country: countryName,
    }, () => {
      this.getBreakfastData(data);
      this.handleToggle();
    });
  }

  handleClose() {
    this.handleToggle();
    this.setState({
      ...initialState,
    });
  }

  handleRandom() {
    const {
      data,
    } = this.state;
    const random = data[Math.floor(Math.random() * data.length)];
    const countryName = random.name;
    this.setState({
      country: countryName,
    }, () => {
      this.getBreakfastData(data);
      this.handleToggle();
    });
  }

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
      data,
    } = this.state;
    return (
      <div>
        <Map>
          <Modal
            show={visible}
            close={() => this.handleClose()}
            country={country}
            breakfastName={breakfastName}
            description={description}
            img={img}
            attr={attr}
            info={info}
            alt={alt}
          />
            {data ? <ComposableMap
            projectionConfig={{
              scale: 220,
            }}
            width={980}
            height={551}
            style={{
              width: '100%',
              height: 'auto',
            }}
          >
            <ZoomableGroup
              center={center}
              zoom={zoom}
            >
                <Geographies geographyUrl="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json">
                  {(geographies, projection) => geographies.map(geography => (
                    <Geography
                      key={geography.properties.NAME}
                      geography={geography}
                      data-country={geography.properties.NAME}
                      projection={projection}
                      style={data.map(el => el.name).includes(geography.properties.NAME) ? {
                        default: {
                          fill: '#EE6C4D',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          transition: 'fill .5s',
                        },
                        hover: {
                          fill: 'lightgrey',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          cursor: 'pointer',
                          transition: 'fill .5s',
                        },
                        pressed: {
                          fill: 'lightgrey',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          transition: 'fill .5s',
                        },
                      } : {
                        default: {
                          fill: 'lightgrey',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          transition: 'fill .5s',
                        },
                        hover: {
                          fill: 'lightgrey',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          transition: 'fill .5s',
                        },
                        pressed: {
                          fill: 'lightgrey',
                          stroke: '#3D5A80',
                          strokeWidth: 0.75,
                          outline: 'none',
                          transition: 'fill .5s',
                        },
                      }}
                      onClick={data.map(el => el.name).includes(geography.properties.NAME)
                        && this.handleClick}
                    />
                  ))}
                </Geographies>
            </ZoomableGroup>
          </ComposableMap> : <div className="sk-double-bounce">
                <div className="sk-child sk-double-bounce1" />
                <div className="sk-child sk-double-bounce2" />
            </div>}
        </Map>
        <ButtonList>
          {continents.map((cont, i) => (
            <Button key={cont.name} onClick={this.handleZoom} data-cont={i}>
              {cont.name}
            </Button>))}
          <Button onClick={this.handleReset}>
            Reset
          </Button>
          <Button onClick={this.handleRandom}>
            Random
          </Button>
        </ButtonList>
      </div>
    );
  }
}

export default MapContainer;