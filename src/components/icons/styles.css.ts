import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const container = style({
  marginRight: '12px',
  selectors: {
    '&:last-child': {
      marginRight: '0',
    },
  },
})

export const svg = style({
  fill: 'currentcolor',
  color: theme.colors.domain.icon.backgroundColor,
  selectors: {
    '&:hover': {
      color: theme.colors.domain.icon.color,
    },
  },
})
