import { githubConnect } from "../src/services/github"
import { GetStaticProps } from "next"
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
import { Card } from "../src/components/RepoCard"

/* ------| Estilos |------ */
import { Dribbble, Link2, Moon, Sun } from "react-feather"
import { Paragraph } from "../src/components/Text/styles"


export default function Home({ repos }) {
  const { title } = React.useContext(ThemeContext)

  return (
    <Wrapper>
      <Head>
        <title>Luiz Felipe</title>
      </Head>
      <a href="https://dribbble.com/shots/9809111-Developer-Dark-Grid-Portfolio" target="_blank" title="Credits" style={{
        width: '40px',
        height: '40px',
        borderRadius: 999,
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: 24, right: 32,
        justifyContent: 'center',
        color: 'white',
        background: 'rgb(234,76,137)',
        boxShadow: '0 3px 4px rgba(0,0,0,.3)'
      }} rel="noreferrer">
        <Dribbble size={32} />
      </a>
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
                { repos && repos.map((repo) => {
                  if (!repo.private && repo.name !== 'meluiz') {
                    return (
                      <Card
                        title={repo.name}
                        desc={repo.description}
                        lang={repo.language}
                        url={repo.url}
                        stars={repo.stargazers_count}
                        key={repo.id}
                      />
                    )
                  } 
                })}
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