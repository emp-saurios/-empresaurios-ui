import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.scss'

const Input: FC<InputProps> = ({
  name,
  title,
  variant,
  message,
  icon,
  ...rest
}) => {
  const { icon_, input, label_, fill, message_ } = styles
  return (
    <div>
      {title && <label className={label_} htmlFor={name}>{title}</label>}
      <div className={input}>
        <input className={fill} name={name} {...rest} />
        {icon && <div className={icon_}>{icon}</div>}
      </div>
      {message && <p className={message_}>{message}</p>}
    </div>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  variant?: 'success' | 'error' | 'warning'
  icon?: ReactNode
  message?: string
}

export default Input
