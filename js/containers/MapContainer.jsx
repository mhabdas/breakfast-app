import React, { Component } from 'react';
import styled from 'styled-components';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';

import Modal from './Modal';
import { Button } from '../styles/style';

const Map = styled.div`
    border: 2px solid #EE6C4D;
    border-radius: 2px;
    width: 60vw;
    margin: 0 auto;
    overflow: hidden;
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    `;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      center: [0, 20],
      zoom: 1,
      clickedOn: false,
      country: '',
      breakfastName: '',
      description: '',
      img: '',
      attr: '',
      info: 'Sorry. This content is not yet available. Try a different or random country.',
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
      .then(resp => this.setState({ data: resp }))
      .catch(err => err);
  }

  getBreakfastData(resp) {
    const {
      country,
    } = this.state;
    resp.breakfast.forEach((element) => {
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
      center: [0, 20],
      zoom: 1,
    });
  }

  handleClick(geography) {
    const {
      clickedOn,
      data,
    } = this.state;
    if (!clickedOn) {
      const countryName = geography.properties.NAME;
      this.setState({
        clickedOn: true,
        country: countryName,
      });
      this.getBreakfastData(data);
    } else {
      this.setState({
        clickedOn: false,
        breakfastName: '',
        description: '',
        img: '',
        attr: '',
        info: 'Sorry. This content is not yet available. Try a different or random country.',
      });
    }
  }

  handleRandom() {
    const {
      data,
    } = this.state;
    const random = data.breakfast[Math.floor(Math.random() * data.breakfast.length)];
    const countryName = random.name;
    this.setState({
      clickedOn: true,
      country: countryName,
    });
    this.getBreakfastData(data);
  }

  render() {
    const {
      clickedOn,
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
    } = this.state;
    return (
      <div>
        <Map>
          <Modal
            show={clickedOn}
            close={this.handleClick}
            country={country}
            breakfastName={breakfastName}
            description={description}
            img={img}
            attr={attr}
            info={info}
            alt={alt}
          />
          <ComposableMap
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
                    key={`geography-${geography}`}
                    geography={geography}
                    data-country={geography.properties.name}
                    projection={projection}
                    style={{
                      default: {
                        fill: 'lightgrey',
                        stroke: '#3D5A80',
                        strokeWidth: 0.75,
                        outline: 'none',
                        transition: 'fill .5s',
                      },
                      hover: {
                        fill: '#EE6C4D',
                        stroke: '#3D5A80',
                        strokeWidth: 0.75,
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'fill .5s',
                      },
                      pressed: {
                        fill: '#EE6C4D',
                        stroke: '#3D5A80',
                        strokeWidth: 0.75,
                        outline: 'none',
                        transition: 'fill .5s',
                      },
                    }}
                    onClick={this.handleClick}
                  />
                ))}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
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

export default { MapContainer };
