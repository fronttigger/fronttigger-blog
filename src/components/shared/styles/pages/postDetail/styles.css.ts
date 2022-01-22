import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    marginY: {
      desktop: 'xgreat',
      tablet: 'xxxlarge',
      mobile: 'xlarge',
    },
  }),
])

export const title = style([
  sprinkles({
    fontSize: {
      desktop: 'xxlarge',
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
    marginBottom: {
      desktop: 'xlarge',
      tablet: 'xlarge',
      mobile: 'large',
    },
  }),
  {
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.domain.detail.title,
    textAlign: 'center',
  },
])

export const date = style([
  sprinkles({
    paddingBottom: {
      desktop: 'xxxlarge',
      tablet: 'xxlarge',
      mobile: 'xlarge',
    },
  }),
  {
    display: 'block',
    color: theme.colors.domain.detail.date,
    fontSize: theme.fontSize.medium,
    textAlign: 'center',
  },
])
