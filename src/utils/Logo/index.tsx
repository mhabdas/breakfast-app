import React, { ReactNode } from 'react'
import StyledLogo from './Logo'

type Props = {
  children: ReactNode
}

const Logo = (props: Props) => <StyledLogo>{props.children}</StyledLogo>

export default Logo
