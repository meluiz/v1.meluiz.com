import React from 'react'

/* ------| Estilos |------ */
import { Heading1, Heading2, Paragraph } from './styles'

/* ------| Interface |------ */
interface TitleProps {
  children?: React.ReactNode;
}

interface SubtitleProps {
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

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <Heading2>{ children }</Heading2>
  )
}

export const Text = ({ children }: ParagraphProps) => {
  return (
    <Paragraph>{ children }</Paragraph>
  )
}