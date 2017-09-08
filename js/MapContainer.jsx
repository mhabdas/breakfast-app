import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
  } from "react-simple-maps";

import {Modal} from './Modal.jsx';
import {Button} from './style.jsx';

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

class MapContainer extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        center: [0, 20],
        zoom: 1,
        clickedOn: false,
        country: "",
        breakfastName: "",
        description: "",
        img: "",
        info: "Sorry. This content is not yet available...",
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
      this.handleRandom = this.handleRandom.bind(this);
    }

    getBreakfastData(resp) {
      let breakLength = resp.breakfast.length;
      for (let i = 0; i < breakLength; i++ ) {
        if (resp.breakfast[i].name == this.state.country) {
          this.setState({
            breakfastName: resp.breakfast[i].breakfastName,
            description: resp.breakfast[i].description,
            img: resp.breakfast[i].img,
            info: ""
          })};
        }
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
        country: countryName,
      });
      fetch(`https://codekingdom.pl/projects/coderslab-workshops/international-breakfast/`)
      .then(resp => {
        return resp.json();
      }).then(resp => {
        this.getBreakfastData(resp);
        }
  ).catch( err => {
        console.log("Error", err)}) } else {
        this.setState({
          clickedOn: false,
          breakfastName: "",
          description: "",
          img: "",
          info: "Sorry. This content is not yet available..."
        })
      }
    }

    handleRandom() {
      fetch(`https://codekingdom.pl/projects/coderslab-workshops/international-breakfast/`)
      .then(resp => {
        return resp.json();
      }).then(resp => {  
        let random = resp.breakfast[Math.floor(Math.random()*resp.breakfast.length)];
          console.log(random.name)
        let countryName = random.name;
        this.setState({
          clickedOn: true,
          country: countryName
        });
        this.getBreakfastData(resp)}
  ).catch( err => {
        console.log("Error", err)})
    }
  
    render() {
      return(
          <div>
             
        <Map>
          <Modal show={this.state.clickedOn} close={this.handleClick} country={this.state.country} breakfastName={this.state.breakfastName} description={this.state.description} img={this.state.img} info={this.state.info}>
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
                      outline: "none",
                      transition: "fill .5s"},
                    hover: {fill: '#EE6C4D',
                      stroke: "#3D5A80",
                      strokeWidth: .75,
                      outline: "none",
                      cursor: "pointer",
                      transition: "fill .5s"},
                    pressed: {fill: '#EE6C4D',
                      stroke: "#3D5A80",
                      strokeWidth: .75,
                      outline: "none",
                      transition: "fill .5s"}
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
        <Button onClick={this.handleRandom}>Random</Button>
        </ButtonList>
        </div>
      )
    }
  }

  export {MapContainer}