import styled from "styled-components";
import colors from '../../styles/globals';

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 2px solid ${colors.dark};
  background-color: #fff;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  color: ${colors.dark};
  font-size: 1rem;
  
  &:focus {
      border: 2px solid ${colors.accent};
      outline: none;
  }
`;

const Error = styled.div`
  font-size: 0.75rem;
  color: ${colors.accent};
  margin-bottom: 0.5rem;
`;

export { Form, Input, Error };
