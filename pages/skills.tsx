import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import {
  SiAngular,
  SiCss3,
  SiGatsby,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs
} from 'react-icons/si'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Box
        boxShadow={useColorModeValue('lg', 'dark-lg')}
        rounded="lg"
        border={'2px'}
        padding={5}
        marginBottom={'6'}
        borderColor={useColorModeValue('orange.500', 'orange.500')}
      >
        <Heading as="h4" fontSize={20} mb={4}>
          Worked at professional level with:
        </Heading>
        <Section delay={0.2}>
          <List>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiJavascript} color="yellow.400" />
              <ListIcon as={SiTypescript} color="blue.500" /> JavaScript /
              Typescript
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiAngular} color="red.500" />
              <ListIcon as={SiVuedotjs} color="green.500" /> Angular / Vue
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiReact} color="blue.500" />
              <ListIcon as={SiNextdotjs} />
              <ListIcon as={SiGatsby} color="purple.300" />
              React: NextJs / GatsbyJs
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiNodedotjs} color="green.300" />
              Node.js: Express / NestJs / KOA
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiPostgresql} color="blue.300" />
              <ListIcon as={SiMongodb} color="green.400" />
              PostgreSQL / MongoDB / MSSQL / MySQL
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiGit} color="orange.500" />
              Git / Github / Gitlab
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiHtml5} color="red.500" />
              <ListIcon as={SiCss3} color="blue.500" />
              HTML / CSS / SASS / LESS
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={SiTailwindcss} color="blue.300" />
              TailwindCSS / Styled-components / Chakra UI / Bootstrap
            </ListItem>
          </List>
        </Section>
      </Box>

      <Box
        boxShadow={useColorModeValue('lg', 'dark-lg')}
        rounded="lg"
        border={'2px'}
        padding={5}
        marginBottom={'6'}
        borderColor={useColorModeValue('orange.500', 'orange.500')}
      >
        <Heading as="h4" fontSize={20} mb={4}>
          Familiar with:
        </Heading>
        <Section delay={0.4}>
          <UnorderedList>
            <li>Flutter</li>
            <li>GraphQL</li>
            <li>Tauri</li>
            <li>Figma / Adobe Illustrator / Adobe Photoshop</li>
          </UnorderedList>
        </Section>
      </Box>
    </Container>
  </Layout>
)

export default Skills
