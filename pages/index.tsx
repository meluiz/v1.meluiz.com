import React from "react"
import Head from "next/head"
import Link from "next/link"

/* ------| Contextos |------ */
import { ThemeContext } from "styled-components"

/* ------| Componentes |------ */
import { ThemeSelector } from "../src/components/ThemeSelector"
import { Column, Container, Grid, Wrapper } from "../src/components/Layout/intex"
import { Title } from "../src/components/Text"
import { LinkBio } from "../src/styles/pages/Home"

/* ------| Estilos |------ */
import { Link2, Moon, Sun } from "react-feather"
import { Paragraph } from "../src/components/Text/styles"

export default function Home() {
  const { title } = React.useContext(ThemeContext)

  return (
    <Wrapper>
      <Head>
        <title>Luiz Felipe</title>
      </Head>
      <Container fluid size="lg">
        <ThemeSelector icon={title === 'dark' ? <Sun /> : <Moon />} />
        <Grid>
          <Column>
            <Grid column gap={0}>
              <Title>
                Olá, eu sou Luiz Felipe
              </Title>
              <div>
                <Paragraph>
                  Conhecido também como <strong>meluiz</strong>, tenho 20 anos de idade e sou formado em <strong>Técnico em Administração</strong> pelo <strong>Instituto Federal</strong>. 
                </Paragraph>
                <Paragraph>
                  Estou familiarizado com o <strong>desenvolvimento front-end</strong> desde meus 16 anos de idade e aos 19 anos de idade comecei meus estudos no <strong>desenvolvimento back-end</strong>.
                  Atualmente trabalho de forma remota, atendendo a encomendas no meu <a href="https://discord.gg/fTacV8shZ6" target="_blank" rel="noreferrer">Servidor do Discord</a>.
                </Paragraph>
              </div>
            </Grid>
            <Grid justify="right">
              <Link href="/" passHref>
                <LinkBio>
                  <Link2 size={18} strokeWidth={2.3} />
                  Ver biografia
                </LinkBio>
              </Link>
            </Grid>
          </Column>
          <Column>
            Olá
          </Column>
        </Grid>
      </Container>
    </Wrapper>
  )
}
