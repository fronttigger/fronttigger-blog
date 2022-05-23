import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { sprinkles, mediaQuery } from '#components/shared/sprinkles.css'

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  height: 'auto',
  '@media': {
    [mediaQuery.mobile]: {
      height: '119px',
    },
  },
})

export const imageContainer = style([
  sprinkles({
    display: {
      mobile: 'none',
    },
  }),
  {
    minWidth: '192px',
    height: '144px',
    marginRight: theme.space.xlarge,
    borderRadius: theme.borderRadius.medium,
    overflow: 'hidden',
  },
])

export const titleContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const description = style({
  marginBottom: '10px',
})
