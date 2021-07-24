import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      title: string,
      background: string,
      red: {
        default: string,
        lighter: string,
        light: string,
        dark: string,
      },
      blue: {
        default: string,
        lighter: string,
        light: string,
        dark: string,
      },
      yellow: {
        default: string,
        lighter: string,
        light: string,
        dark: string,
      }
    },
    font: {
      size: string;
    }
  }
}