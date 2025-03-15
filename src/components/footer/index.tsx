import config from 'config'

import * as styles from './styles.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.contact}>
        # Contact :{' '}
        <a className={styles.mail} href={`mailto:${config.author.contacts.email}`}>
          {config.author.contacts.email}
        </a>
      </span>
      <span className={styles.copyright}>Designed by Fronttigger © 2025 All rights reserved.</span>
    </footer>
  )
}
