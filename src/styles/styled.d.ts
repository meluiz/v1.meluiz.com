import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    screens: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
      huge: string
    },
    colors: {
      transparent: string,
      error: {
        lighter: string,
        light: string,
        default: string,
        dark: string,
        darker: string
      },
      info: {
        lighter: string,
        light: string,
        default: string,
        dark: string,
        darker: string
      },
      warn: {
        lighter: string,
        light: string,
        default: string,
        dark: string,
        darker: string
      },
      text: {
        title: string,
        subtitle: string,
        link: string,
        paragraph: string;
        tone: {
          one: string,
          two: string,
          three: string,
          four: string,
          five: string
        },
      },
      background: {
        main: string
      }
    },
    font: {
      size: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string,
      },
      family: {
        sans: string,
        mono: string
      }
    }
  }
}