import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const paragraphText = style({
  margin: `20px 0`,
  fontSize: theme.fontSize.xsmall,
  lineHeight: '1.5',
  color: theme.colors.post.p,
})
