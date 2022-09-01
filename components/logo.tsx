import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  & img {
    transform: rotate(-20deg);
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const pawsImg = `/images/paws${useColorModeValue('-dark', '')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={pawsImg} alt="logo" width="30" height="30" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
            fontSize={22}
          >
            Cristian Turmacu
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
