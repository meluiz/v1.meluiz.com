import React from "react";

/* ------| Temas |------ */
import { DarkTheme } from '../../styles/themes/dark'
import { LightTheme } from '../../styles/themes/light'

/* ------| Interface |------ */
interface SwitchThemeContextProps {
  SwitchTheme?: () => void
}

interface SwitchThemeProviderProps {
  children: React.ReactNode
}

export const SwitchThemeContext = React.createContext({
  SwitchTheme: () => {}
} as SwitchThemeContextProps)