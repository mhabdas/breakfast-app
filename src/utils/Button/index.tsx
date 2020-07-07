import React from 'react'
import StyledButton from './Button'

type Props = {
  action: 'button' | 'reset' | 'submit' | (((e: React.MouseEvent<HTMLButtonElement>) => void) & (() => void))
  title: string
  large: boolean
  dataAttr: string | number
}

const Button = (props: Props) => {
  const { action, title, large, dataAttr } = props
  return (
    <StyledButton {...(typeof action === 'string' ? { type: action } : { onClick: action })} isLarge={large} data-attr={dataAttr}>
      {title}
    </StyledButton>
  )
}

Button.defaultProps = {
  large: false,
  dataAttr: undefined,
}

export default Button
