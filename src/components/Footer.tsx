import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

export function Footer() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      px="30vw"
      bgColor="dim"
      pt={20}
    >
      <Flex direction="column" gap={3} alignItems="center">
        <Image src="/assets/logo_light.svg" alt="logo" h="9rem" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign="center">
          Venha nos visitar e descubra o lugar onde a sua beleza se transforma
          em uma obra de arte deslumbrante e única.
        </Text>
      </Flex>
      <Flex mt={10} alignItems="center" justifyContent="center" gap={6}>
        <Box
          borderRadius="full"
          border="1px solid"
          borderColor="silver"
          p={3}
          cursor="pointer"
        >
          <WhatsappLogo weight="duotone" color="#B1B1AE" size={32} />
        </Box>
        <Box
          borderRadius="full"
          border="1px solid"
          borderColor="silver"
          p={3}
          cursor="pointer"
        >
          <InstagramLogo weight="duotone" color="#B1B1AE" size={32} />
        </Box>
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
