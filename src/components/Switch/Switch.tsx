import React, { FC, HTMLProps } from 'react'
import styles from './Switch.css'

const Switch: FC<SwitchProps> = ({ type = 'toggle', className = '', ...rest }) => {
  const customClass = styles[type] + className

  return <input className={customClass} type={type === 'radio' ? 'radio' : 'checkbox'} {...rest} />
}

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  active?: boolean
  type?: 'toggle' | 'checkbox' | 'radio'
}

export default Switch
