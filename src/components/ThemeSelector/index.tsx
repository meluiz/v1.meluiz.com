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
        <Link href="">
          <Codepen />
        </Link>
        <Link href="">
          <GitHub />
        </Link>
      </div>
      <Button onClick={SwitchTheme} type="button">
        { icon }
      </Button>
    </Base>
  )
}