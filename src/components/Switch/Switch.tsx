import React, { FC, HTMLProps } from 'react'
import styles from './Switch.scss'

const Switch: FC<SwitchProps> = ({ type = 'checkbox', className = '', ...rest }) => {
  return (
    <input
      className={`${styles.input} ${styles[type]} ${className}`}
      type={type === 'radio' ? 'radio' : 'checkbox'}
      {...rest}
    />
  )
}

export interface SwitchProps extends HTMLProps<HTMLInputElement> {
  active?: boolean
  type?: 'toggle' | 'checkbox' | 'radio'
}

export default Switch
