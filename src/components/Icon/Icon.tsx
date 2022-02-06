import React, { FC } from 'react'
import * as HeroIcons from '@heroicons/react/outline'
import * as HeroIconsSolid from '@heroicons/react/solid'

import styles from './Icon.scss'

const Icon: FC<IconProps> = ({ icon, iconType }) => {
  return (
    <span className={`hero-icon ${styles.iconContainer}`}>
      {/* @ts-ignore */}
      {iconType === 'outline' ? HeroIcons[icon]() : HeroIconsSolid[icon]()}
    </span>
  )
}

export type HeroIconsType = keyof typeof HeroIcons
export type IconType = 'outline' | 'solid'

type IconProps = {
  iconType: IconType
  icon: HeroIconsType
}

export default Icon
