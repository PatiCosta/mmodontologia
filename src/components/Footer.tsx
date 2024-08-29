import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import { FaWhatsapp } from 'react-icons/fa'

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
          color={'white'}
          cursor={'pointer'}
          target='_blank'
        >
          <Flex flexDir={'column'} gap={2} alignItems={'center'} justify={'center'}>
            <Flex
              borderRadius="full"
              border="1px solid"
              bgColor={'whatsapp'}
              p={3}
              cursor="pointer"

              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}

              _hover={{ textDecoration: 'none', color: 'whatsapp', bgColor: 'white', transition: '500ms', borderColor: 'green.500' }}
            >
              <FaWhatsapp size={32} />
            </Flex>
            <Text color='white'> WhatsApp </Text>
          </Flex>
        </Link>

        <Link
          href='https://www.instagram.com/dramarinamaragno?igsh=MXkxbnI0NG52N2lo '
          color={'white'}
          cursor={'pointer'}
          target='_blank'
        >
          <Flex flexDir={'column'} gap={2} alignItems={'center'} justify={'center'}>
            <Flex
              borderRadius="full"
              border="1px solid"
              borderColor="white"
              bgColor={'instagram'}
              p={3}
              cursor="pointer"

              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}

              _hover={{ textDecoration: 'none', color: 'instagram', bgColor: "white", transition: '300ms', borderColor: 'instagram' }}
            >
              <InstagramLogo weight="duotone" size={32} />
            </Flex>
            <Text color='white'> Dra. Marina Maragno</Text>
          </Flex>
        </Link>
        <Link
          href='https://www.instagram.com/mmodontologiaeharmonizacao/'
          color={'white'}
          cursor={'pointer'}
          target='_blank'
        >
          <Flex flexDir={'column'} gap={2} alignItems={'center'} justify={'center'}>
            <Flex
              borderRadius="full"
              border="1px solid"
              borderColor="white"
              bgColor={'instagram'}
              p={3}
              cursor="pointer"

              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}

              _hover={{ textDecoration: 'none', color: 'instagram', bgColor: "white", transition: '300ms', borderColor: 'instagram' }}
            >
              <InstagramLogo weight="duotone" size={32} />
            </Flex>
            <Text color='white'> Clínica</Text>
          </Flex>
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
