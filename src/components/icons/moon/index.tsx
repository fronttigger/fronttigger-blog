import React from 'react'

export default function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: 'rotate(40deg)' }}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <circle cx="12" cy="4" r="10.5" fill="black" />
      </mask>
      <circle fill="#fff" cx="12" cy="12" r="9" mask="url(#mask)" />
    </svg>
  )
}
