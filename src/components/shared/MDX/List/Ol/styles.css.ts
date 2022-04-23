import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const ol = style({
  marginBottom: '20px',
  counterReset: 'list-number',
})

globalStyle(`${ol} > li`, {
  margin: `${theme.space.medium} 0`,
  position: 'relative',
  paddingInlineStart: theme.space.xlarge,
  color: theme.colors.post.ol,
  fontSize: theme.fontSize.xsmall,
  lineHeight: 1.2,
})

globalStyle(`${ol} > li:before`, {
  counterIncrement: 'list-number',
  content: 'counter(list-number) "."',
  position: 'absolute',
  left: 0,
  fontSize: theme.fontSize.xsmall,
  fontWeight: theme.fontWeight.semiBold,
})
