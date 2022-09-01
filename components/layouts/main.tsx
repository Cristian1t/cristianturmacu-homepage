import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'
import { ReactNode } from 'react'
import Computer from '../computer'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'

const Main = ({
  children,
  router
}: {
  children: ReactNode
  router: Router
}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cristian Turmacu - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Computer />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
