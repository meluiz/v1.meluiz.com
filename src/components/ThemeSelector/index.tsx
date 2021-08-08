import React from 'react'

/* ------| Context |------ */
import { SwitchThemeContext } from '../../contexts/SwitchTheme'

/* ------| Estilos |------ */
import { Codepen, GitHub } from 'react-feather'
import { Base, Button, Link } from './styles'

/* ------| Interface |------ */
interface BarProps {
  icon?: React.ReactNode
}

export const ThemeSelector = ({ icon }: BarProps) => {
  const { SwitchTheme } = React.useContext(SwitchThemeContext)

  return (
    <Base>
      <div>
        <Link href="https://codepen.io/meluiz" target="_blank">
          <Codepen />
        </Link>
        <Link href="https://github.com/meluiz" target="_blank">
          <GitHub />
        </Link>
      </div>
      <Button onClick={SwitchTheme} type="button">
        { icon }
      </Button>
    </Base>
  )
}