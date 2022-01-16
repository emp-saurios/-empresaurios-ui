import React, { FC, ButtonHTMLAttributes } from 'react'
import Icon from '../Icon'
import styles from './Button.scss'
import { HeroIconsType, IconType } from '../Icon/Icon'

const Button: FC<ButtonProps> = ({
  children,
  icon,
  iconSide = 'right',
  typeButton = 'default',
  className = '',
  size = 'normal',
  iconType = 'outline',
  ...rest
}) => {
  const actionBtnWithText = typeButton === 'action' && children ? styles.withText : ''
  const btnClassName = `${styles.button} ${styles[typeButton]} ${styles[size]} ${className} ${actionBtnWithText}`

  return (
    <button className={btnClassName} {...rest}>
      {iconSide === 'left' && icon && <Icon icon={icon} iconType={iconType} />}

      {children}

      {iconSide === 'right' && icon && <Icon icon={icon} iconType={iconType} />}
    </button>
  )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  icon?: HeroIconsType
  iconSide?: 'left' | 'right'
  typeButton?: 'default' | 'light' | 'white' | 'ghost' | 'link' | 'action'
  size?: 'normal' | 'small' | 'smaller'
  iconType?: IconType
}

export default Button
