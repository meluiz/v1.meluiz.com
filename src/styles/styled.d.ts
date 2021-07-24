import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors: {
      title: string,
      background: string,
      error: string,
      info: string,
      warn: string
    },
    font: {
      size: string;
    }
  }
}