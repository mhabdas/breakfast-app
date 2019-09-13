import styled from 'styled-components';
import { colors } from '../../styles/globals';

const StyledHeader = styled.header`
  background-color: ${colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  flex-wrap: wrap;
  min-height: 5rem;
  @media (min-width: 433px) {
    justify-content: space-between;
  }
`;

export default StyledHeader;
