import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.scss'

const Input: FC<InputProps> = ({ name, title, variant, message, icon, ...rest }) => {
  const { icon_, input, label_, fill, message_, successMsg, errorMsg, warningMsg } = styles

  const messageStyle: MessageStyle = {
    success: successMsg,
    error: errorMsg,
    warning: warningMsg
  }

  return (
    <div>
      {title && (
        <label className={label_} htmlFor={name}>
          {title}
        </label>
      )}
      <div className={input}>
        <input className={fill} name={name} {...rest} />
        {icon && <div className={icon_}>{icon}</div>}
      </div>
      {message && <p className={`${message_} ${messageStyle[(variant = 'success')]}`}>{message}</p>}
    </div>
  )
}

type Variants = 'success' | 'error' | 'warning'

type MessageStyle = Record<Variants, string>
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  variant?: Variants
  icon?: ReactNode
  message?: string
}

export default Input
