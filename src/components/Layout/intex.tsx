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
  direction?: 'row' | 'column';
  gap?: number;
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

export const Grid = ({ children, gap, direction = 'row' }: GridProps) => {
  const style = {
    '--gap': `${gap ? gap : 24}px`
  } as React.CSSProperties

  return (
    <GridLayout direction={direction} style={style}>
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