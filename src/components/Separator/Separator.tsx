import React, { FC } from 'react'
import './Separator.css'

const Separator: FC<SeparatorProps> = ({ text, className = '', textClassName = '' }) => {
  return (
    <div className={`${className}`}>
      <p className={`${textClassName}`}>{text}</p>
      <hr />
    </div>
  )
}

interface SeparatorProps {
  text?: string
  className?: string
  textClassName?: string
}

export default Separator
