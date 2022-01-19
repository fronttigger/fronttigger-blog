import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const strongText = style({
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.post.strong,
})
