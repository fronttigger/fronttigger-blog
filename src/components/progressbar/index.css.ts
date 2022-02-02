import { style } from '@vanilla-extract/css'

import { colorTheme } from '#components/shared/theme.css'

export const container = style({
  width: '0%',
  height: '3px',
  backgroundColor: colorTheme.brightblue,
  transition: 'width 0.1s',
})
