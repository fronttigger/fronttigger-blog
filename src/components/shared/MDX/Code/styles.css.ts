import { style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'

export const codeText = style({
  padding: theme.space.small,
  color: theme.colors.post.code.color,
  fontSize: theme.fontSize.small,
  fontWeight: theme.fontWeight.semiBold,
  borderRadius: theme.borderRadius.small,
  backgroundColor: theme.colors.post.code.backgoundColor,
})

export const syntaxHighlighter = {
  borderRadius: theme.borderRadius.small,
}
