import React from 'react';
import styled from 'styled-components';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
  } from "react-simple-maps";

import {Modal} from './Modal.jsx';
import {Button} from './Style.jsx';

const Map = styled.div`
    border: 2px solid #EE6C4D;;  
    width: 60vw;
    margin: 0 auto;
    overflow: hidden;
`;

const ButtonList = styled.div`
    display: flex;
    justify-content: center
    `;

class MapContainer extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        center: [0, 20],
        zoom: 1,
        clickedOn: false,
        country: "",
        continents: [
            {name: "Asia", coordinates: [103.8198,1.3521]},
            {name: "Africa", coordinates: [3.3792,6.5244]},
            {name: "Australia", coordinates: [151.2093,-33.8688]},
            {name: "Europe", coordinates: [8.5417,47.3769]},
            {name: "North America", coordinates: [-122.4194,37.7749]},
            {name: "South America", coordinates: [-58.3816,-34.6037]}
        ]
      }
      this.handleZoom = this.handleZoom.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
    handleZoom(e) {
        const contId = e.target.getAttribute("data-cont");
        const cont = this.state.continents[contId];
        this.setState({
            center: cont.coordinates,
            zoom: 2,
          })
    }

    handleReset() {
        this.setState({
            center: [0,20],
            zoom: 1,
          })
    }

    handleClick(e) {
      let countryName = e.target.getAttribute("data-country");
      if (this.state.clickedOn === false) {
      this.setState({
        clickedOn: true,
        country: countryName
      }) } else {
        this.setState({
          clickedOn: false
        })
      }
    }
  
    render() {
      return(
          <div>
        <Map>
          <Modal show={this.state.clickedOn} close={this.handleClick} country={this.state.country}>
            </Modal>
          <ComposableMap projectionConfig={{
              scale: 220,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",
            }}>
            <ZoomableGroup center={this.state.center} zoom={ this.state.zoom }>
            <Geographies geographyUrl={ "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json" }>
              {(geographies, projection) => geographies.map((geography, i) => (
                <Geography
                  key={ `geography-${i}` }
                  geography={ geography }
                  data-country={ geography.properties.name }
                  projection={ projection }
                  style={{
                    default: {fill: 'lightgrey',
                      stroke: "#3D5A80",
                      strokeWidth: .75,
                      outline: "none"},
                    hover: {fill: '#EE6C4D',
                      stroke: "#3D5A80",
                      strokeWidth: .75,
                      outline: "none",
                      cursor: "pointer"},
                    pressed: {fill: '#EE6C4D',
                      stroke: "#3D5A80",
                      strokeWidth: .75,
                      outline: "none"}
                  }}
                  onClick={ this.handleClick }
                  />
              ))}
            </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </Map>
        <ButtonList>
        {this.state.continents.map( (cont, i) => 
            <Button key={i} onClick={this.handleZoom} data-cont={i}>{cont.name}</Button>
        )}
        <Button onClick={this.handleReset}>Reset</Button>
        </ButtonList>
        </div>
      )
    }
  }

  export {MapContainer}