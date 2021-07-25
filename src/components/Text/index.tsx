import React from 'react'

/* ------| Estilos |------ */
import { Heading1, Paragraph } from './styles'

/* ------| Interface |------ */
interface TitleProps {
  children?: React.ReactNode;
}

interface ParagraphProps {
  children?: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <Heading1>{ children }</Heading1>
  )
}

export const Text = ({ children }: ParagraphProps) => {
  return (
    <Paragraph>{ children }</Paragraph>
  )
}