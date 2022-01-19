import React, { FC } from 'react'
import './Switch.css'

const Switch: FC<SwitchProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <hr />
    </div>
  )
}

interface SwitchProps {
  text?: string
}

export default Switch
