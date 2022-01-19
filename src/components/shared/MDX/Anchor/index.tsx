import Link from 'next/link'

import { anchorText } from './styles.css'

const Anchor = ({
  href,
  children,
}: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={anchorText}>{children}</a>
      </Link>
    )
  }

  return (
    <a className={anchorText} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default Anchor
