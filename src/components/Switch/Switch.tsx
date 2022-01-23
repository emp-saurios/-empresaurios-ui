import React, {FC, HTMLProps} from 'react'
import styles from './Switch.scss'

const Switch: FC<SwitchProps> = ({active, type = 'checkbox', className = '', ...rest}) => {

  return <input className={`${styles.input} ${styles[type]} ${className}`} type="checkbox" defaultChecked={active} {...rest} />
}

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  active?: boolean
  type?: 'toggle' | 'checkbox'
}

export default Switch
