import React from 'react'

import { container } from './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className={container}>{children}</main>
}
