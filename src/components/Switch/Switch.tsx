import React, { FC, HTMLProps } from 'react'
import styles from './Switch.css'

const Switch: FC<SwitchProps> = ({ active, type = 'toggle', className = '', ...rest }) => {
  const customClass = styles[type] + className

  return <input className={customClass} type="checkbox" defaultChecked={active} {...rest} />
}

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  active?: boolean
  type?: 'toggle' | 'checkbox'
}

export default Switch
