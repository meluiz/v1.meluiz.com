import React from 'react'

/* ------| Estilos |------ */
import { Base, Area, GridLayout, ColumnLayout } from './styles'

/* ------| Interface |------ */
interface WrapperProps {
  children?: React.ReactNode
}

interface ContainerProps {
  children?: React.ReactNode;
  fluid?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

interface GridProps {
  children?: React.ReactNode;
  column?: boolean;
  responsive?: boolean;
  gap?: number;
  align?: 'left' | 'center' | 'right';
  justify?: 'left' | 'center' | 'right' | 'between';
}


interface ColumnProps {
  children?: React.ReactNode;
  flex?: number;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Base>
      { children }
    </Base>
  )
}

export const Container = ({ children, fluid = false, size }: ContainerProps) => {
  return (
    <Area fluid={fluid} size={size}>
      { children }
    </Area>
  )
}

export const Grid = ({ children, gap, column, responsive, align, justify }: GridProps) => {
  const style = {
    '--gap': `${gap !== undefined ? gap : 24}px`
  } as React.CSSProperties

  return (
    <GridLayout column={column} responsive={responsive} align={align} justify={justify} style={style}>
      { children }
    </GridLayout>
  )
}

export const Column = ({ children, flex }: ColumnProps) => {
  const style = {
    '--flex': flex ? flex : 1
  } as React.CSSProperties

  return (
    <ColumnLayout style={style}>
      { children }
    </ColumnLayout>
  )
}