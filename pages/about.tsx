import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const About = () => (
  <Layout title="About">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        About
      </Heading>
    </Container>
  </Layout>
)

export default About
