import React, { FC, ButtonHTMLAttributes } from 'react'
import './Button.css'

const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
}

export default Button
