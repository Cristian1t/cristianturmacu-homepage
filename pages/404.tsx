import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" size="2xl" mb={4}>
        Not Found
      </Heading>
      <Text>The page you are looking for does not exist.</Text>
      <Divider my={8} />

      {/* @ts-ignore */}
      <Box my={8} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Go to homepage</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
