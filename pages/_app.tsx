/* ------| Contextos |------ */
import { ThemeProvider } from 'styled-components'

/* ------| Estilos |------ */
import { DarkTheme } from '../src/styles/themes/dark'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ DarkTheme }>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
