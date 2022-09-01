import {
  Box,
  Container,
  Heading,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <Box
        border={'2px'}
        padding={5}
        marginBottom={'6'}
        borderColor={useColorModeValue('whitesmoke.500', 'orange.300')}
      >
        <Heading as="h4" fontSize={20} mb={4}>
          Worked at professional level with:
        </Heading>
        <Section delay={0.2}>
          <UnorderedList>
            <li>JavaScript / Typescript</li>
            <li>Angular</li>
            <li>React: NextJs / GatsbyJs</li>
            <li>Node.js: Express / NestJs / KOA</li>
            <li>PostgreSQL / MongoDB / MSSQL / MySQL</li>
            <li>Git / Github / Gitlab</li>
            <li>HTML / CSS / SASS / LESS</li>
            <li>
              TailwindCSS / Styled-components / Chakra UI / Bootstrap / Material
              UI
            </li>
          </UnorderedList>
        </Section>
      </Box>

      <Box
        border={'2px'}
        padding={5}
        marginBottom={'6'}
        borderColor={useColorModeValue('whitesmoke.500', 'orange.300')}
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
