export const LightTheme = {
  title: 'light',
  screens: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px',
    huge: '1536px',
  },
  colors: {
    transparent: 'transparent',
    shadow: 'inset 0 -18px 12px #e8e7e7',
    error: {
      lighter: '#dd5a56',
      light: '#d94642',
      default: '#d5322d',
      dark: '#bf2d28',
      darker: '#aa2824'
    },
    info: {
      lighter: '#5e8fa3',
      light: '#4b8197',
      default: '#37748c',
      dark: '#31687e',
      darker: '#2c5c70'
    },
    warn: {
      lighter: '#ffdd8d',
      light: '#ffd97f',
      default: '#ffd571',
      dark: '#e5bf65',
      darker: '#ccaa5a'
    },
    text: {
      title: '#2d2925',
      subtitle: '#373430',
      link: '#37748c',
      paragraph: '#4c4a47',
      tone: {
        one: '#423f3c',
        two: '#4c4a47',
        three: '#565452',
        four: '#615f5e',
        five: '#6b6a69'
      },
    },
    background: {
      main: '#e8e7e7',
      card: '#ffffff'
    }
  },
  font: {
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },
    family: {
      sans: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
      mono: '"JetBrains Mono", "Courier New", Courier, monospace'
    }
  }
}