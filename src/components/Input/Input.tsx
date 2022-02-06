import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.scss'

const Input: FC<InputProps> = ({
  name,
  title,
  variant = '',
  message,
  icon,
  className,
  ...rest
}) => {
  const { icon_, input, label, fill, message_ } = styles

  return (
    <div className={`form-input ${variant} ${styles[variant]} ${className}`}>
      {title && (
        <label className={`label ${label}`} htmlFor={name}>
          {title}
        </label>
      )}
      <div className={`input ${input}`}>
        <input className={`fill ${fill}`} name={name} {...rest} />
        {icon && <div className={`icon ${icon_}`}>{icon}</div>}
      </div>
      {message && <p className={`message ${message_}`}>{message}</p>}
    </div>
  )
}

type Variants = 'success' | 'error' | 'warning' | 'disabled'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  variant?: Variants
  icon?: ReactNode
  message?: string
}

export default Input
