import React from 'react'
import { CSSProperties } from 'styled-components'

/* ------| Estilos |------ */
import { Base, Area, GridLayout, ColumnLayout, DribbbleLink } from './styles'
import { Dribbble } from 'react-feather'

/* ------| Interface |------ */
interface WrapperProps {
  children?: React.ReactNode
}

interface ContainerProps {
  children?: React.ReactNode
  fluid?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

interface GridProps {
  children?: React.ReactNode
  column?: boolean
  responsive?: boolean
  gap?: number
  align?: 'left' | 'center' | 'right'
  justify?: 'left' | 'center' | 'right' | 'between'
}

interface ColumnProps {
  sticky?: boolean
  children?: React.ReactNode
  flex?: number
  styles?: CSSProperties
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Base>{children}</Base>
}

export const Container = ({ children, fluid = false, size }: ContainerProps) => {
  return (
    <Area fluid={fluid} size={size}>
      {children}
    </Area>
  )
}

export const Grid = ({ children, gap, column, responsive, align, justify }: GridProps) => {
  const style = {
    '--gap': `${gap !== undefined ? gap : 24}px`,
  } as React.CSSProperties

  return (
    <GridLayout
      column={column}
      responsive={responsive}
      align={align}
      justify={justify}
      style={style}
    >
      {children}
    </GridLayout>
  )
}

export const Column = ({ children, flex, styles, sticky }: ColumnProps) => {
  const style = {
    '--flex': flex ? flex : 1,
    ...styles,
  } as React.CSSProperties

  return (
    <ColumnLayout style={style} sticky={sticky}>
      {children}
    </ColumnLayout>
  )
}

export const DribbbleProject = () => {
  return (
    <DribbbleLink
      href="https://dribbble.com/shots/9809111-Developer-Dark-Grid-Portfolio"
      target="_blank"
    >
      <Dribbble size={32} />
    </DribbbleLink>
  )
}
