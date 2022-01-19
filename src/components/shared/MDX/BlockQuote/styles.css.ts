import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const blockquote = style({
  position: 'relative',
  marginBottom: theme.space.xlarge,
  padding: `0 ${theme.space.large}`,
  color: theme.colors.post.blockquote.color,
  fontWeight: theme.fontWeight.medium,
  fontStyle: 'italic',
})

globalStyle(`${blockquote} > :before`, {
  content: '',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  borderLeft: `${theme.space.small} solid ${theme.colors.post.blockquote.color}`,
})
