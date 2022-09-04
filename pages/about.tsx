import {
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Layout from '../components/layouts/article'

const About = () => (
  <Layout title="About">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        About
      </Heading>
      <Text>
        This website is used to showcase some of my work. It is built with
        Next.js, Chakra UI, and TypeScript. I&apos;m still working on it and
        adding more projects, so it&apos;s not finished yet. Stay tuned!
      </Text>
      <Text mt={4}>
        It&apos;s also a place where I will write about my experiences and share
        my knowledge.
      </Text>
      <Text mt={4}>
        It was inspired by{' '}
        <Link
          href="https://www.youtube.com/c/devaslife"
          isExternal
          textDecoration="underline"
        >
          Takuya Matsuyama
        </Link>
        .
      </Text>
      <Text mt={4}>
        Credits to{' '}
        <Link
          href="https://sketchfab.com/dr.badass2142"
          isExternal
          textDecoration="underline"
        >
          Brandon Westlake
        </Link>
        , who created the 3D model of the computer I&apos;m using.
      </Text>
      <Text mt={4}>
        You can find the source code on{' '}
        <Link
          href="https://github.com/Cristian1t/cristianturmacu-homepage"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </Text>
      <Text mt={4}>
        If you have any questions, feel free to{' '}
        <Link
          type="email"
          href="mailto:cristianturmacu@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact me
        </Link>
        .
      </Text>
      <Text mt={4}>
        If you want to learn more about me, you can find me on:
        <List display="flex" mt={3}>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/cristianturmacu"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/cristianturmacu"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/CristianTurmacu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
        </List>
      </Text>
    </Container>
  </Layout>
)

export default About
