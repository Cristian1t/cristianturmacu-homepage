import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      {/* @ts-ignore */}
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a developer based in Verona, Italy.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page/title">
            Cristian Turmacu
          </Heading>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
