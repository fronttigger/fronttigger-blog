import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const h1 = style({
  fontSize: theme.fontSize.xxlarge,
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.title,
})
