import React, { ReactNode } from 'react'
import StyledMainSection from './MainSection'

type Props = {
  children: ReactNode
}

const MainSection = (props: Props) => {
  const { children } = props

  return <StyledMainSection>{children}</StyledMainSection>
}

export default MainSection
