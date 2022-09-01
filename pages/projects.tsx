import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import thumbMostaSaloon from '../public/images/projects/mosta-saloon.png'
import thumbMyOldWebsite from '../public/images/projects/old-website.png'
import thumbOtticaElite from '../public/images/projects/wip.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Latest projects... (WIP - will be updated soon)
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0}>
            <ProjectGridItem
              id="mosta-saloon"
              title="Mosta Saloon"
              thumbnail={thumbMostaSaloon}
            >
              A website for a local hair salon in Verona, Italy
            </ProjectGridItem>
          </Section>
          <Section delay={0}>
            <ProjectGridItem
              id="ottica-elite"
              title="Ottica Elite"
              thumbnail={thumbOtticaElite}
            >
              A website for a local glasses shop in Verona, Italy
            </ProjectGridItem>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          Old projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0}>
            <ProjectGridItem
              id="old-website"
              title="My previous portfolio"
              thumbnail={thumbMyOldWebsite}
            >
              My previous portfolio website
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
