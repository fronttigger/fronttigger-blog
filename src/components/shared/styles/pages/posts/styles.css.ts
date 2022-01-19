import { style } from '@vanilla-extract/css'

import { mediaQuery } from '#components/shared/sprinkles.css'
import { theme } from '#components/shared/theme.css'

export const bodyContainer = style([
  {
    backgroundColor: theme.colors.backgroundColor,
  },
])

export const title = style([
  {
    margin: `${theme.space.xxxlarge} 0 ${theme.space.xlarge}`,
    fontSize: theme.space.xxlarge,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.title,
  },
])

export const container = style({
  marginBottom: '80px',
})

export const cardContainer = style({
  marginTop: '60px',
  ':first-child': {
    marginTop: 0,
  },
  '@media': {
    [mediaQuery.mobile]: {
      marginTop: '50px',
    },
  },
})
