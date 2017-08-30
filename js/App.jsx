import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

import {Header, About, Footer} from './MainComponents.jsx';
import {MapContainer} from './MapContainer.jsx'

injectGlobal`
* {
  box-sizing: border-box;
  font-family: Work Sans;
  margin: 0;
  padding: 0;
}
`;

class App extends React.Component {
    
    render() {
        
        return <div className="container">
                <Header>
                </Header>
                <About>
                </About>
                <MapContainer>
                </MapContainer>
                <Footer>
                </Footer>
                </div>
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
