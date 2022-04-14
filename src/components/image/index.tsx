import React from 'react'

interface ImageProps {
  src: string
  alt: string
  maxWidth: string
  width: string
}

function Image({ src, alt, maxWidth, width }: ImageProps) {
  return <img src={src} alt={alt} style={{ display: 'block', margin: '0 auto', maxWidth, width }} />
}

export default Image
