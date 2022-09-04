import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, ProjectImage, Title } from '../../components/project'

const Project = () => {
  return (
    <Layout title="Old Website">
      <Container>
        <Title>
          Old Website <Badge>2022</Badge>
        </Title>
        <P>
          This is my previous website. It&apos;s made with Gatsby.js. It uses
          GraphQL to fetch data from a a Contentful space and rendering it into
          a React-table. Also using react-typist, react-icons and parallax.js.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Gatsby.js, Styled Components, GraphQl, Contentful</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://cristianturmacu-website.netlify.app/"
              target="_blank"
            >
              Old Website<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link
              href="https://github.com/Cristian1t/mywebsitev2"
              target="_blank"
            >
              GitHub{' '}
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/old-website.png"
          alt="Old Website"
        ></ProjectImage>
      </Container>
    </Layout>
  )
}

export default Project
