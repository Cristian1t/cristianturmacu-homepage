import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          /* @ts-ignore */
          align="center"
        >
          Hello, I&apos;m a developer based in Verona, Italy.
        </Box>

        <Box display={{ md: 'flex' }} my={'12'}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page/title">
              Cristian Turmacu
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            /* @ts-ignore */
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/cristian.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a passionate developer, always looking for new challenges
            and trying to improve my skills and learn new technologies.
          </Paragraph>
          {/* @ts-ignore */}
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Paragraph>
            Currently i&apos;m working at{' '}
            <NextLink href="/projects/trueblue">
              <Link>TrueBlue</Link>
            </NextLink>
            , an italian company for digital solutions in the Customer
            Engagement, BI and Artificial Intelligence fields.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Born in Drăgășani, Romania
          </BioSection>
          <BioSection>
            <BioYear>2007</BioYear>
            Moved to Italy and started studying Economics and Informatics at the
            High School &apos;Marie Curie&apos; in Garda
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Started studying Computer Science at the University of Verona
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Worked different jobs, from waiter, to warehouseman, to industrial
            machine operator
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started following my passion for programming and web development,
            learning different technologies and frameworks and working on
            different projects for clients and personal use
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked as a front-end developer at RainTonic Srl, a company
            specialized in web, mobile and desktop applications in Padua, Italy
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Now working as a full-stack developer at TrueBlue, a company
            specialized in digital solutions in the Customer Engagement, BI and
            Artificial Intelligence fields in Verona, Italy
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Other stuff i like
          </Heading>
          <Paragraph>Writing code... 😅</Paragraph>
          <Paragraph>
            Going to the gym, reading books, playing video games, watching
            movies and series, listening to music.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Cristian1t" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  GitHub
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
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
