import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

import { theme } from './theme.css'

export const mediaQuery = {
  mobile: 'screen and (max-width: 576px)',
  tablet: 'screen and (min-width: 577px)',
  desktop: 'screen and (min-width: 769px)',
}

const breakPoint = {
  mobile: { '@media': mediaQuery.mobile },
  tablet: { '@media': mediaQuery.tablet },
  desktop: { '@media': mediaQuery.desktop },
}

const responsiveProperties = defineProperties({
  conditions: {
    ...breakPoint,
  },
  defaultCondition: 'desktop',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    marginTop: theme.space,
    marginBottom: theme.space,
    marginLeft: theme.space,
    marginRight: theme.space,
    paddingTop: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
    fontSize: theme.fontSize,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

export const sprinkles = createSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
