import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image, { StaticImageData } from 'next/image'
import NextLink from 'next/link'
import { ReactNode } from 'react'

export const GridItem = ({
  children,
  href,
  title,
  thumbnail
}: {
  children: ReactNode
  href: string
  title: string
  thumbnail: string
}) => (
  /* @ts-ignore */
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      \<Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({
  children,
  id,
  title,
  thumbnail
}: {
  children: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
}) => (
  /* @ts-ignore */
  <Box w="100%" align="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          width={231}
          height={148}
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail {
      border-radius: 12px;
      }
  `}
  />
)
