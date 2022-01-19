import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const h2 = style({
  margin: `${theme.space.xxxlarge} 0 ${theme.space.xlarge}`,
  color: theme.colors.title,
  fontSize: theme.fontSize.large,
  fontWeight: theme.fontWeight.semiBold,
})
