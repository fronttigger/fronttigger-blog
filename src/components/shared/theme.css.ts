import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

export const colorTheme = {
  white: '#fff',
  black: '#000',
  lightgray: '#f3f4f6',
  darkgray: '#636e72',
  bluegray: '#4e5968',
  gray: '#8b95a1',
  pink: '#c586c0',
  lightblue: '#54a0ff',
  brightblue: '#73a9ef',
  darkblue: '#434c58',
  skyblue: '#0077B7',
  mageticdark: '#1e1f22',
  graywhite: '#728197',
  lightwhite: '#dfdfdf',
  darkwhite: '#909499',
  whiteblue: '#f0f4f6',
  bluegreen: '#598197',
  brightgray: '#919eb1',
  graydark: '#363636',
  deepdark: '#0a1114',
}

export const themes = createGlobalTheme(':root', {
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '24px',
    xxlarge: '32px',
    xxxlarge: '48px',
    great: '64px',
    xgreat: '80px',
    xxgreat: '96px',
  },
  fontSize: {
    tiny: '12px',
    small: '14px',
    xsmall: '16px',
    medium: '18px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '48px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  letterSpacing: {
    large: '2px',
    medium: '1.5px',
    small: '1px',
  },
  borderRadius: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%',
  },
  font: {
    header: 'Bebas Neue, cursive',
    footer: 'Barlow Condensed, sans-serif',
    cardTitle: 'Do Hyeon, sans-serif',
  },
  borderColor: {
    grayOpacity: 'rgba(0,27,55,0.1)',
  },
})

const colors = createThemeContract({
  backgroundColor: null,
  title: null,
  domain: {
    header: {
      color: null,
      backgroundColor: null,
    },
    footer: {
      backgroundColor: null,
      contactColor: null,
      color: null,
    },
    card: {
      title: null,
      description: null,
      date: null,
    },
    detail: {
      title: null,
      date: null,
    },
    icon: {
      color: null,
      backgroundColor: null,
    },
  },
  post: {
    a: null,
    blockquote: {
      color: null,
      borderLeft: null,
    },
    code: {
      color: null,
      backgoundColor: null,
    },
    ol: null,
    ul: {
      color: null,
      backgroundColor: null,
    },
    p: null,
    strong: null,
  },
  about: {
    color: null,
    title: null,
    subtitle: null,
    company: {
      borderLeftColor: null,
    },
    project: {
      stack: {
        color: null,
        backgroundColor: null,
      },
      item: {
        color: null,
        backgroundColor: null,
      },
    },
  },
})

export const lightTheme = createTheme(colors, {
  backgroundColor: colorTheme.white,
  title: colorTheme.darkblue,
  domain: {
    header: {
      color: colorTheme.black,
      backgroundColor: colorTheme.white,
    },
    footer: {
      backgroundColor: colorTheme.whiteblue,
      contactColor: colorTheme.graywhite,
      color: colorTheme.bluegreen,
    },
    card: {
      title: colorTheme.black,
      description: colorTheme.darkblue,
      date: colorTheme.gray,
    },
    detail: {
      title: colorTheme.black,
      date: colorTheme.gray,
    },
    icon: {
      color: colorTheme.skyblue,
      backgroundColor: colorTheme.black,
    },
  },
  post: {
    a: colorTheme.lightblue,
    blockquote: {
      color: colorTheme.bluegray,
      borderLeft: colorTheme.lightgray,
    },
    code: {
      color: colorTheme.pink,
      backgoundColor: colorTheme.lightgray,
    },
    ol: colorTheme.bluegray,
    ul: {
      color: colorTheme.bluegray,
      backgroundColor: colorTheme.bluegray,
    },
    p: colorTheme.bluegray,
    strong: colorTheme.darkblue,
  },
  about: {
    color: colorTheme.bluegray,
    title: colorTheme.darkblue,
    subtitle: colorTheme.darkblue,
    company: {
      borderLeftColor: colorTheme.brightblue,
    },
    project: {
      stack: {
        color: colorTheme.bluegray,
        backgroundColor: colorTheme.whiteblue,
      },
      item: {
        color: colorTheme.bluegray,
        backgroundColor: colorTheme.brightblue,
      },
    },
  },
})

export const darkTheme = createTheme(colors, {
  backgroundColor: colorTheme.mageticdark,
  title: colorTheme.white,
  domain: {
    header: {
      color: colorTheme.white,
      backgroundColor: colorTheme.mageticdark,
    },
    footer: {
      backgroundColor: colorTheme.mageticdark,
      contactColor: colorTheme.bluegray,
      color: colorTheme.lightwhite,
    },
    card: {
      title: colorTheme.lightwhite,
      description: colorTheme.darkwhite,
      date: colorTheme.gray,
    },
    detail: {
      title: colorTheme.white,
      date: colorTheme.gray,
    },
    icon: {
      color: colorTheme.skyblue,
      backgroundColor: colorTheme.graywhite,
    },
  },
  post: {
    a: colorTheme.lightblue,
    blockquote: {
      color: colorTheme.bluegray,
      borderLeft: colorTheme.lightgray,
    },
    code: {
      color: colorTheme.pink,
      backgoundColor: colorTheme.darkgray,
    },
    ol: colorTheme.brightgray,
    ul: {
      color: colorTheme.brightgray,
      backgroundColor: colorTheme.brightgray,
    },
    p: colorTheme.brightgray,
    strong: colorTheme.darkblue,
  },
  about: {
    color: colorTheme.brightgray,
    title: colorTheme.brightgray,
    subtitle: colorTheme.darkblue,
    company: {
      borderLeftColor: colorTheme.brightblue,
    },
    project: {
      stack: {
        color: colorTheme.gray,
        backgroundColor: colorTheme.deepdark,
      },
      item: {
        color: colorTheme.brightgray,
        backgroundColor: colorTheme.brightblue,
      },
    },
  },
})

export const theme = { ...themes, colors }
