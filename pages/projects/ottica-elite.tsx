import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, ProjectImage, Title } from '../../components/project'

const Project = () => {
  return (
    <Layout title="Ottica Elite">
      <Container>
        <Title>
          Ottica Elite <Badge>2022</Badge>
        </Title>
        <P>
          Ottica Elite is a project that i built for a local glasses shop.
          It&apos;s a simple website with a modern design and it&apos;s mobile
          friendly. It is built with Next.js, Tailwind CSS and TypeScript. I
          used Gsap and React Transition Group for the animations.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              NextJs, Tailwind CSS, TypeScript, Gsap, React Transition Group
            </span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="">
              Coming soon<ExternalLinkIcon mx="2px"></ExternalLinkIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/Cristian1t" target="_blank">
              Coming soon{' '}
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/wip.png"
          alt="Ottica Elite"
        ></ProjectImage>
      </Container>
    </Layout>
  )
}

export default Project
