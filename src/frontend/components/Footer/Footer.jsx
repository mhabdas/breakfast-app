import styled from 'styled-components';
import { colors } from '../../../styles/globals';

const StyledFooter = styled.footer`
  text-align: center;
  color: ${colors.light};
  background-color: ${colors.dark};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5.5rem;

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

export default StyledFooter;
