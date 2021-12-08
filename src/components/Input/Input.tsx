import React, { FC, InputHTMLAttributes } from 'react'
import './Input.css'

const Input: FC<InputProps> = ({ name, labelText, ...rest }) => {
  return (
    <div>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input name={name} {...rest} />
    </div>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export default Input
