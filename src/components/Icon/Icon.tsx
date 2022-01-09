import React, { FC } from 'react'
import * as HeroIcons from '@heroicons/react/outline'
import * as HeroIconsSolid from '@heroicons/react/solid'

import styles from './Icon.scss'

const Icon: FC<IconProps> = ({ icon, iconType }) => {
  return (
    <span className={styles.iconContainer}>
      {/* @ts-ignore */}
      {iconType === 'outline' ? HeroIcons[icon]() : HeroIconsSolid[icon]()}
    </span>
  )
}

export type HeroIconsType = keyof typeof HeroIcons

type IconProps = {
  iconType: 'outline' | 'solid'
  icon: HeroIconsType
}

export default Icon
