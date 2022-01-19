import { globalStyle, style } from '@vanilla-extract/css'

import { theme } from '#components/shared/theme.css'
import { sprinkles } from '#components/shared/sprinkles.css'

export const container = style([
  sprinkles({
    marginY: {
      desktop: 'xgreat',
      tablet: 'xgreat',
      mobile: 'xxxlarge',
    },
  }),
])

export const articleContainer = style({
  marginBottom: theme.space.xgreat,
})

export const title = style([
  sprinkles({
    fontSize: {
      desktop: 'xxlarge',
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
    marginBottom: {
      desktop: 'xxxlarge',
      tablet: 'xxxlarge',
      mobile: 'xxlarge',
    },
  }),
  {
    color: theme.colors.about.title,
    fontWeight: theme.fontWeight.bold,
    lineHeight: '1.2',
    whiteSpace: 'pre-line',
  },
])

export const description = style([
  sprinkles({
    fontSize: {
      desktop: 'large',
      tablet: 'large',
      mobile: 'medium',
    },
  }),
  {
    marginBottom: theme.space.large,
    lineHeight: '1.3',
    whiteSpace: 'pre-line',
  },
])

export const subtitle = style([
  sprinkles({
    fontSize: {
      desktop: 'xlarge',
      tablet: 'xlarge',
      mobile: 'large',
    },
    marginBottom: {
      desktop: 'xxlarge',
      tablet: 'xxlarge',
      mobile: 'xlarge',
    },
  }),
  {
    color: theme.colors.about.subtitle,
    fontWeight: theme.fontWeight.bold,
  },
])

export const experienceContainer = style([
  sprinkles({
    flexDirection: {
      desktop: 'row',
      tablet: 'column',
      mobile: 'column',
    },
    justifyContent: {
      desktop: 'space-between',
      tablet: 'flex-start',
      mobile: 'flex-start',
    },
    marginBottom: {
      desktop: 'great',
      tablet: 'great',
      mobile: 'great',
    },
  }),
  {
    display: 'flex',
  },
])

export const companyContainer = style([
  sprinkles({
    marginBottom: {
      desktop: 'none',
      tablet: 'xlarge',
      mobile: 'xlarge',
    },
  }),
  {
    flex: '3',
  },
])

export const companyTitle = style({
  fontSize: theme.fontSize.large,
  fontWeight: theme.fontWeight.semiBold,
})

export const companySubtitle = style({
  display: 'block',
  marginBottom: '12px',
  fontSize: theme.fontSize.medium,
})

export const companyDescriptionContainer = style({
  '@media': {
    'screen and (max-width: 768px)': {
      selectors: {
        '&:last-of-type': {
          paddingLeft: theme.space.large,
          borderLeft: `${theme.space.small} solid ${theme.colors.about.company.borderLeftColor}`,
        },
      },
    },
  },
  flex: '7',
})

export const companyDescription = style({
  marginBottom: theme.space.xlarge,
  selectors: {
    '&:last-child': {
      marginBottom: theme.space.none,
    },
  },
})

export const projectTitle = style([
  sprinkles({
    marginTop: {
      desktop: 'none',
      tablet: 'medium',
      mobile: 'medium',
    },
  }),
  {
    fontSize: theme.fontSize.large,
    fontWeight: theme.fontWeight.semiBold,
  },
])

export const projectSubtitle = style({
  display: 'block',
  marginBottom: theme.space.large,
  fontSize: theme.fontSize.medium,
})

export const projectDescription = style({
  display: 'block',
  marginBottom: theme.space.xlarge,
  fontSize: theme.fontSize.medium,
})

export const projectItems = style({
  marginBottom: '20px',
})

export const projectStacks = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const projectStack = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: `0 ${theme.space.medium} ${theme.space.medium} 0`,
  padding: theme.space.medium,
  color: theme.colors.about.project.stack.color,
  fontSize: theme.fontSize.small,
  backgroundColor: theme.colors.about.project.stack.backgroundColor,
  borderRadius: theme.borderRadius.medium,
})

globalStyle(`${container} > *`, {
  color: theme.colors.about.color,
  lineHeight: '1.3',
})

globalStyle(`${projectItems} > li`, {
  margin: `${theme.space.medium} 0`,
  position: 'relative',
  paddingInlineStart: theme.space.large,
  color: theme.colors.about.project.item.color,
  fontSize: theme.fontSize.medium,
})

globalStyle(`${projectItems} > li:before`, {
  content: '',
  position: 'absolute',
  top: '9px',
  left: 0,
  width: '5px',
  height: '5px',
  backgroundColor: theme.colors.about.project.item.backgroundColor,
  borderRadius: theme.borderRadius.circle,
})
