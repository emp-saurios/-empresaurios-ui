import React, { FC, HTMLProps } from 'react'
import './Switch.css'

const Switch: FC<SwitchProps> = ({ active, ...rest }) => {
  return <input type="checkbox" checked={active} {...rest} />
}

interface SwitchProps extends HTMLProps<HTMLInputElement> {
  active?: boolean
}

export default Switch
