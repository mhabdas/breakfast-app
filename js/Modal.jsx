import React from 'react';
import styled from 'styled-components';

import { Button } from './Style.jsx'

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    padding: 50px;
`;

const ModalWindow = styled.div`
    background-color: whitesmoke;
    border-radius: 5px;
    max-width: 500px;
    min-height: 300px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        color: #EE6C4D;
        text-align: center;
    }

    p {
        color: #3D5A80;
    }
`;

class Modal extends React.Component {
    constructor(props) {
      super(props);
    //   this.findCountry = () => {
    //     for (let i = 0; i < breakfast.length; i++ ) {
    //     if (this.props.country == breakfast[i].name) {
    //       return <div><p>{breakfast[i].breakfastName}</p>
    //       <p>{breakfast[i].description}</p></div>
    //     }
    //     }
    //   }
    }
  
    render() {
      if (!this.props.show) {
        return null;
      } else {
        return <ModalBackground>
          <ModalWindow>
            <h2>{this.props.country}</h2>
            <p>Breakfast:</p>
            
            <div className="modal-footer">
              <Button>
                Take a challenge
                </Button>
                <Button>
                  Save for later
                  </Button>
              <Button onClick={this.props.close}>
                Close
              </Button>
            </div>
          </ModalWindow>
        </ModalBackground>
      }
    }
  }

  export { Modal };