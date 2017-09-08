import React from 'react';
import styled, {injectGlobal} from 'styled-components';

import {Button} from './style.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ModalBackground = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    padding: 50px;
  
`;

const ModalWindow = styled.div `
    background-color: whitesmoke;
    border-radius: 5px;
    max-width: 500px;
    min-height: 300px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
        color: #EE6C4D;
        text-align: center;
        padding-bottom: .5rem;
    }

    h3 {
      color: #3D5A80;
      padding-bottom: .5rem;
    }

    p {
        color: #3D5A80;
        padding-bottom: .5rem;
    }

    img {
      width: 80%;
      border-radius: 5%; 
      opacity: .80;
      padding-bottom: .5rem;
    }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({visible: false})
    }, 1000)
  }

  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <ModalBackground>
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <ModalWindow>
            <h2>{this.props.country}</h2>
            <h3>{this.props.breakfastName}{this.props.info}</h3>
            <p>{this.props.description}</p>
            <img src={this.props.img}/>
            <div className="modal-footer">
              <Button>
                <a
                  href={`https://www.google.pl/search?q=${this.props.breakfastName}+recipe`}
                  target="_blank">Take a challenge</a>
              </Button>
              <Button onClick={this.props.close}>
                Close
              </Button>
            </div>
          </ModalWindow>
          </ReactCSSTransitionGroup>
        </ModalBackground>
    }
  }
}

export {Modal};