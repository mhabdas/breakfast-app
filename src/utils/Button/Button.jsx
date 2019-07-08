import styled, { css } from 'styled-components';
import colors from '../../styles/globals';

const StyledButton = styled.button`
  border: 2px solid ${colors.dark};
  background-color: ${colors.light};
  padding: 0.5rem;
  margin: 0.25rem;
  color: ${colors.dark};
  font-weight: 700;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 1s;

  a {
    color: ${colors.accent};
    text-decoration: none;
    width: 100%;
    height: 100%;
    &:hover {
      color: white;
    }
  }

  &:hover {
    background-color: ${colors.accent};
    color: white;
    a {
      color: white;
    }
  }

  ${props => props.isLarge
    && css`
      background-color: transparent;
      border-color: ${colors.light};
      color: ${colors.light};
      font-size: 1rem;
      height: 3rem;
    `}
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`;

export { StyledButton, ButtonList };
