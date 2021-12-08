import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.css'

const Input: FC<InputProps> = ({
  name,
  labelText,
  variant = 'default',
  smallText,
  icon,
  ...rest
}) => {
  const { container, iconClass, inputContainer } = styles
  return (
    <div className={container}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <div className={inputContainer}>
        <input className={styles[variant]} name={name} {...rest} />
        {icon && <i className={iconClass}>{icon}</i>}
      </div>
      {smallText && <small>{smallText}</small>}
    </div>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  variant?: 'success' | 'error' | 'warning' | 'default'
  icon?: ReactNode
  smallText?: string
}

export default Input
