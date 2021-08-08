import React from 'react'
import Image from 'next/image'

import {
  CardBase,
  CardHeader,
  CardLangTag,
  CardLangImage,
  CardMain,
  CardTitle,
  CardDescription,
  CardFooter,
  CardStarIcon
} from './styles'

/* ------| Estilos |------ */
import { Star } from 'react-feather'

/* ------| Interface |------ */
interface CardProps {
  title: string;
  desc: string;
  lang: string;
  url: string;
  stars: number;
}

export const Card = ({ title, desc, lang, url, stars } : CardProps) => {
  return (
    <CardBase href={ url }>
      {lang && (
        <CardHeader>
          <CardLangTag>{ lang }</CardLangTag>
        </CardHeader>
      )}
      <CardMain>
        <CardTitle>{ title }</CardTitle>
        <CardDescription>{ desc }</CardDescription>
      </CardMain>
      <CardFooter>
        <CardStarIcon>
          <Star size={16} strokeWidth={3} />
        </CardStarIcon>
        { stars }
      </CardFooter>
    </CardBase>
  )
}