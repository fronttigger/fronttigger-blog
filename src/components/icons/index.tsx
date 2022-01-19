import React, { FC } from 'react'

import * as styles from './styles.css'

import GithubIcon from '#components/icons/github'
import LinkedInIcon from '#components/icons/linkedin'

type IconType = 'github' | 'linkedin'

const IconComponents: Record<IconType, FC<{ className: string; size: string }>> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
}

interface SocialIconProps {
  kind: IconType
  href: string
  size?: string
}

function SocialIcon({ kind, href, size = '30' }: SocialIconProps) {
  if (!href) {
    return null
  }

  const SocialSvg = IconComponents[kind]

  return (
    <a className={styles.container} href={href} rel="noreferrer" target="_blank">
      <SocialSvg className={styles.svg} size={size} />
    </a>
  )
}

export default SocialIcon
