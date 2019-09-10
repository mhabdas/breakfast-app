import styled from 'styled-components';
import {colors} from '../../styles/globals';

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 5rem;

  h1 {
    font-weight: 700;
    color: ${colors.light};
    font-size: 2.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    padding-right: 0.5rem;
  }
`;

export default StyledLogo;
