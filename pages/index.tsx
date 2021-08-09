import { githubConnect } from "../src/services/github"
import { GetStaticProps } from "next"
import React from "react"
import Head from "next/head"

/* ------| Contextos |------ */
import { ThemeContext } from "styled-components"

/* ------| Componentes |------ */
import { ThemeSelector } from "../src/components/ThemeSelector"
import { Column, Container, DribbbleProject, Grid, Wrapper } from "../src/components/Layout"
import { Title } from "../src/components/Text"
import { LinkBio } from "../src/styles/pages/Home"
import { Card } from "../src/components/RepoCard"

/* ------| Estilos |------ */
import { Moon, Sun } from "react-feather"
import { Paragraph } from "../src/components/Text/styles"
import { CardOpacityEffect } from "../src/components/RepoCard/styles"


export default function Home({ repos }) {
  const { title } = React.useContext(ThemeContext)

  return (
    <Wrapper>
      <Head>
        <meta name="author" content="meluiz#2667" />
        <meta name="description" content="Portfólio pessoal com o objetivo de mostrar meus projetos durante minha carreira." />
        <meta name="keywords" content="luiz felipe, luiz, felipe, meluiz, portfolio" />

        <meta property="og:title" content="Luiz Felipe" />
        <meta property="og:site_name" content="Luiz Felipe" />
        <meta property="og:description" content="Portfólio pessoal com o objetivo de mostrar meus projetos durante minha carreira." />
        <meta property="og:image" content="/img/graph/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <title>Luiz Felipe</title>
      </Head>
      <DribbbleProject />
      <Container size="lg">
        <ThemeSelector icon={title === 'dark' ? <Sun /> : <Moon />} />
        <Grid responsive>
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
              {/* <Link href="/bio" passHref>
                <LinkBio>
                  <Link2 size={18} strokeWidth={2.3} />
                  Ver biografia
                </LinkBio>
              </Link> */}
            </Grid>
          </Column>
          <Column>
            <Grid gap={0}>
              <Column>
                <CardOpacityEffect>
                  { repos && repos.map((repo) => {
                    if (!repo.private && repo.name !== 'meluiz') {
                      return (
                        <Card
                          title={repo.name}
                          desc={repo.description}
                          lang={repo.language}
                          url={repo.html_url}
                          stars={repo.stargazers_count}
                          key={repo.id}
                        />
                      )
                    } 
                  })}
                </CardOpacityEffect>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Container>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await githubConnect.get('/users/meluiz/repos')

  return {
    props : {
      repos: response.data
    }
  }
}