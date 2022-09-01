import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, ProjectImage, Title } from '../../components/project'

const Project = () => {
  return (
    <Layout title="Mosta Saloon">
      <Container>
        <Title>
          Mosta Saloon <Badge>2022</Badge>
        </Title>
        <P>
          Mosta Saloon is a project that i built for a friend of mine. It&apos;s
          a website for his barber shop. It has a simple design and it&apos;s
          mobile friendly.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Gatsby.js, Tailwind CSS, TypeScript, Framer Motion</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://mosta-saloon.it">
              mosta-saloon.it<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href=""> Coming soon </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/mosta-saloon.png"
          alt="Mosta Saloon"
        ></ProjectImage>
      </Container>
    </Layout>
  )
}

export default Project
