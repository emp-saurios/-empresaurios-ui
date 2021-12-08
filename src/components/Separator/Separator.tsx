import React, { FC } from 'react'
import './Separator.css'

const Separator: FC<SeparatorProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <hr />
    </div>
  )
}

interface SeparatorProps {
  text?: string
}

export default Separator
