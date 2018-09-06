import React from 'react';
import styled from 'styled-components';

// About section

const AboutSection = styled.section`
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

function About() {
  return (
    <AboutSection>
      <h2>
        Challenge yourself with making different breakfast every day!
      </h2>
      <p>
        Click on the chosen country and enjoy your new breakfast idea or get a random
        one.
      </p>
    </AboutSection>
  );
}

export default About;
