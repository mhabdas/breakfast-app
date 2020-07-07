import React from 'react'
import StyledLink from './Link'

type Props = {
  href: string
  title: string
  target: string
  description: string
  rel: string
}

const Link = (props: Props) => {
  const { href, title, target, description, rel } = props
  return (
    <StyledLink href={href} title={title} target={target} rel={rel}>
      {description}
    </StyledLink>
  )
}

export default Link
