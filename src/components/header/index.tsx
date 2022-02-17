import Image from 'next/image'
import Link from 'next/link'
import config from 'config'

import * as styles from './styles.css'

import { CustomThemeType } from '#pages/_app'
import SunIcon from '#components/icons/sun'
import MoonIcon from '#components/icons/moon'
import ProgressBar from '#components/progressbar'
import { LIGHT_MODE } from '#constants'

interface HeaderProps {
  theme: CustomThemeType
  onChangeTheme: () => void
}

export default function Header({ theme, onChangeTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <div className={styles.imageContainer}>
                <Image src="/logo.png" alt="tigger blog logo" width="48px" height="44px" />
              </div>
              <strong className={styles.title}>{config.author.name}</strong>
            </div>
          </Link>
          <ul className={styles.menuContainer}>
            {config.menus.map(({ id, menu, link }) => (
              <li key={id} className={styles.menuTitle}>
                <Link href={link}>
                  <span className={styles.menuName}>{menu}</span>
                </Link>
              </li>
            ))}
            <li onClick={onChangeTheme} aria-hidden="true">
              {theme === LIGHT_MODE ? <SunIcon /> : <MoonIcon />}
            </li>
          </ul>
        </div>
      </nav>
      <ProgressBar />
    </header>
  )
}
