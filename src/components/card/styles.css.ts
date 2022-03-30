import { globalStyle, style } from '@vanilla-extract/css'

import { colorTheme, theme } from '#shared/theme.css'
import { oneLineEllipsis, twoLineEllipsis } from '#shared/mixin.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style({
  display: 'flex',
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

export const textContainer = style([
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
])

export const title = style([
  sprinkles({
    fontSize: {
      desktop: 'xlarge',
      tablet: 'large',
      mobile: 'large',
    },
    paddingTop: {
      tablet: 'medium',
      desktop: 'none',
      mobile: 'none',
    },
    marginBottom: {
      desktop: 'large',
      tablet: 'large',
      mobile: 'none',
    },
  }),
  {
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.domain.card.title,
    lineHeight: '1.15',
  },
  twoLineEllipsis,
])

export const description = style([
  sprinkles({
    marginTop: {
      desktop: 'none',
      tablet: 'none',
      mobile: 'medium',
    },
  }),
  { lineHeight: 'normal', color: theme.colors.domain.card.description },
  oneLineEllipsis,
])

export const date = style([
  sprinkles({
    marginBottom: {
      desktop: 'none',
      tablet: 'medium',
      mobile: 'none',
    },
    marginTop: {
      desktop: 'large',
      tablet: 'large',
      mobile: 'large',
    },
  }),
  {
    display: 'block',
    color: theme.colors.domain.card.date,
  },
])

globalStyle(`${container}:hover ${title}`, {
  color: colorTheme.brightblue,
  transition: '0.15s ease-in-out',
})
