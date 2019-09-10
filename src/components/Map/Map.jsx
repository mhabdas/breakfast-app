import styled from 'styled-components';
import {colors} from '../../styles/globals';

const StyledMap = styled.div`
  border: 2px solid ${colors.dark};
  border-radius: 2px;
  width: 98vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (min-width: 433px) {
    width: 60vw;
  }
`;

export default StyledMap;
