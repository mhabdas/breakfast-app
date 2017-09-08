import React from 'react';
import styled from 'styled-components';
import {Link} from './style.jsx'

// Header

const StyledHeader = styled.header `
height: 5rem;
background-color: lightgrey;
display: flex;
flex-direction: row;  
justify-content: center;
align-items: center;

h1 {
  font-weight: 700;
  color: #EE6C4D;
  font-size: 2.5rem;
} 

img {
  width: 4rem;
  height: 4rem;
  padding-right: .5rem;
}
`;

class Header extends React.Component {
  render() {
    return <StyledHeader><img src="./img/breakfast.svg"/>
      <h1>Breakfast</h1>
    </StyledHeader>
  }
}

export {Header};

// About section

const AboutSection = styled.section `
  color: #3D5A80;

  h2 {
    font-size: 1.5rem;
    padding-top: 2rem;;
    text-align: center; 
} 
  p {
    text-align: center;
    padding: 2rem 0 2rem 0;  
}`;

class About extends React.Component {
  render() {
    return <AboutSection>
      <h2>Challenge yourself with making different breakfast every day!</h2>
      <p>Click on the chosen country and enjoy your new breakfast idea or get a random
        one.</p>
    </AboutSection>
  }
}

export {About};

// Footer

const StyledFooter = styled.footer `
  text-align: center;
  color: #3D5A80;
  background-color: lightgrey;

  p {
    font-size: .75rem;
    :first-child {
    padding-top: 1rem;
    }
    :last-child {
      padding-bottom: 1rem;
    }
  }
`;

class Footer extends React.Component {
  render() {
    return <StyledFooter>
      <p>
        &copy; 2017 Breakfast App made by<Link href="https://github.com/mhabdas">
          Marta Habdas</Link>
      </p>
      <p>Icons made by
        <Link href="http://www.freepik.com" title="Freepik">
          Freepik
        </Link>
        from
        <Link href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </Link>
        is licensed by
        <Link
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank">CC 3.0 BY</Link>
      </p>
      <p>All photos via
        <Link href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons
        </Link>
        are licensed by
        <Link
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank">
          CC 3.0 BY</Link>
      </p>
    </StyledFooter>
  }
}

export {Footer};