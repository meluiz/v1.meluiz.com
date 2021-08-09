import React from 'react'
import cookie from 'js-cookie'

/* ------| Contextos |------ */
import { ThemeProvider } from 'styled-components'
import { SwitchThemeContext } from '../src/contexts/SwitchTheme'

/* ------| Temas |------ */
import { DarkTheme } from '../src/styles/themes/dark'
import { LightTheme } from '../src/styles/themes/light'

/* ------| Estilos |------ */
import { GlobalStyle } from '../src/styles/themes/globals'

function MyApp({ Component, pageProps }) {
  const [ theme, setTheme ] = React.useState(DarkTheme)
  
  React.useEffect(() => {
    const themeStorage = cookie.get('theme')
    if (!themeStorage) cookie.set('theme', 'dark')
    
    setTheme(() => (themeStorage === 'light') ? LightTheme : DarkTheme)

  }, [])

  React.useEffect(() => {
    cookie.set('theme', theme.title)
  }, [ theme ])

  const SwitchTheme = () => {
    setTheme(theme => theme.title === 'dark' ? LightTheme : DarkTheme)
  }

  return (
    <SwitchThemeContext.Provider value={{ SwitchTheme }}>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  )
}

export default MyApp
