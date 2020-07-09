import styled from 'styled-components'
import { colors } from '@styles/globals'

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.light};

  &:hover {
    color: ${colors.accent};
  }
`

export default StyledLink
