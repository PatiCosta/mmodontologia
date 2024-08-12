import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export function Footer() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      px={["4vw", "4vw", "4vw", "12vw", "30vw"]}
      bgColor="dim"
      pt={[0, 0, 0, 0, 20]}
    >
      <Flex direction="column" gap={3} alignItems="center">
        <Image src="/assets/logo_light.svg" alt="logo" h="9rem" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign="center">
          Venha nos visitar e descubra o lugar onde a sua beleza se transforma
          em uma obra de arte deslumbrante e única.
        </Text>
      </Flex>
      <Flex mt={10} alignItems="center" justifyContent="center" gap={6}>

        <Link
          href='https://wa.me/5548999600383?text=Olá, acessei o site da MMOdontologia e gostaria de mais informações'
          color={'#B1B1AE'}
          cursor={'pointer'}
          target='_blank'
        >
          <Box
            borderRadius="full"
            border="1px solid"
            borderColor="silver"
            p={3}
            cursor="pointer"
            _hover={{ textDecoration: 'none', color: 'green.500', transition: '300ms', borderColor: 'green.500' }}
          >
            <WhatsappLogo weight="duotone" size={32} />
          </Box>
        </Link>

        <Link
          href='https://www.instagram.com/dramarinamaragno?igsh=MXkxbnI0NG52N2lo'
          color={'#B1B1AE'}
          cursor={'pointer'}
          target='_blank'
        >
          <Box
            borderRadius="full"
            border="1px solid"
            borderColor="silver"
            p={3}
            cursor="pointer"
            _hover={{ textDecoration: 'none', color: 'pink.500', transition: '300ms', borderColor: 'pink.500' }}
          >
            <InstagramLogo weight="duotone" size={32} />
          </Box>
        </Link>
      </Flex>
      <Flex mt={20} mb={6} alignItems="center" gap="px">
        <Text fontSize="md" lineHeight="md" color="light">
          feito com ♡ por
        </Text>
        <Text fontSize="md" lineHeight="md" color="#F55F5E" cursor="pointer">
          awer.co
        </Text>
      </Flex>
    </Flex>
  )
}
