import styled from 'styled-components';
import colors from '../../../styles/globals';

const AboutSection = styled.section`
  h2 {
    font-size: 1.5rem;
    padding-top: 1.5rem;
    text-align: center;
    color: ${colors.accent};
  }
  p {
    text-align: center;
    padding: 1rem 0 1rem 0;
    color: ${colors.dark};
  }
`;

export default AboutSection;
