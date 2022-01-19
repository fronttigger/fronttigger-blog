import { style } from '@vanilla-extract/css'

import { theme } from '#shared/theme.css'
import { mediaQuery } from '#components/shared/sprinkles.css'

export const footer = style([
  {
    padding: '20px',
    textAlign: 'center',
    lineHeight: '18px',
    letterSpacing: '1.6px',
    fontSize: '13px',
    fontFamily: theme.font.footer,
    '@media': {
      [mediaQuery.mobile]: {
        fontSize: theme.fontSize.tiny,
      },
    },
    color: theme.colors.domain.footer.color,
    backgroundColor: theme.colors.domain.footer.backgroundColor,
  },
])

export const contact = style({
  display: 'block',
})

export const mail = style({
  color: theme.colors.domain.footer.contactColor,
  selectors: {
    '&:active, &:link, &:visited': {
      color: theme.colors.domain.footer.contactColor,
    },
  },
})

export const copyright = style({
  display: 'block',
})
