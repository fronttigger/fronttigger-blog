import React from 'react'

import { paragraphText } from './styles.css'

const Paragraph = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
  <p className={paragraphText}>{children}</p>
)

export default Paragraph
