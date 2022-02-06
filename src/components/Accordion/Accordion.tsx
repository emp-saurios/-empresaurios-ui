import React, { FC, useState } from 'react'
import styles from './Accordion.scss'
import Button from '../Button'

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const icon = isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'
  const customClass = `${styles.container} ${styles[isOpen ? 'open' : 'close']}`

  return (
    <article onClick={toggle} className={customClass}>
      <header className={styles.header}>
        <p className={`h4 ${styles.title}`}>{title}</p>
        <Button id="action" typeButton="action" icon={icon} />
      </header>
      {isOpen && <div>{children}</div>}
    </article>
  )
}

export interface AccordionProps {
  title: string
}

export default Accordion
