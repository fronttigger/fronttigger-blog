import { style } from '@vanilla-extract/css'

import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    paddingX: {
      mobile: 'xlarge',
      tablet: 'xlarge',
      desktop: 'none',
    },
  }),
  {
    maxWidth: '700px',
    margin: 'auto',
  },
])
