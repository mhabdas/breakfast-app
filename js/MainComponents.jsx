import React from 'react';
import styled from 'styled-components';

// Header

const StyledHeader = styled.header`
height: 12vh;
background-color: lightgrey;
display: flex;
flex-direction: row;  
justify-content: center;

h1 {
  font-weight: 700;
  color: #EE6C4D;
  padding: 1rem 0 0 .5rem;
} 

img {
  width: 4rem;
  height: 4rem;
  padding: .5rem 0 0 1rem;
}
`;

class Header extends React.Component {
  render() {
      return <StyledHeader><img src="./img/breakfast.svg"/><h1>Breakfast</h1></StyledHeader>
  }
}

export {Header};

// About section

const AboutSection = styled.section`
  color: #3D5A80;

  h2 {
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: center; 
} 
  p {
    text-align: center;
    padding: 1rem;  
}
  a {
    text-decoration: none;
    font-weight: bold;
    color: #3D5A80;
}`;

class About extends React.Component {
  render() {
      return <AboutSection>
        <h2>Challenge yourself with making different breakfast every day!</h2>
        <p>Click on the chosen country and enjoy your new breakfast idea or get a random one <a href="#">here</a>.</p>
        </AboutSection>
  }
}

export {About};

// Footer 

const StyledFooter = styled.footer`
  height: 5vh;
  text-align: center;
  color: #3D5A80;
  background-color: lightgrey;
`;

class Footer extends React.Component {
  render() {
      return <StyledFooter>
        <p>Breakfast</p>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
        </StyledFooter>
  }
}

export {Footer};