import React, { FC, useState } from 'react'
import Icon from '../Icon'

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const icon = isOpen ? 'ArrowUpIcon' : 'ArrowDownIcon'

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <div onClick={toggle}>
        <h3>{title}</h3>
        <Icon icon={icon} iconType="outline" />
      </div>
      <div>{isOpen && children}</div>
    </div>
  )
}

interface AccordionProps {
  title: string
}

export default Accordion
