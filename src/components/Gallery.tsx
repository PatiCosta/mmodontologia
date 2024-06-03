import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { MoveLeft, MoveRight } from 'lucide-react'

export function Gallery() {
  return (
    <Box bgColor="eerie" pt={28} pb={28} mt={-28}>
      <Box h="0.5px" w="calc(100% - 16rem)" mx={32} mt={20} bgColor="dim" />
      <Flex alignItems="center" justifyContent="space-between" mx={32} mt={16}>
        <Flex
          direction="column"
          alignItems="start"
          pr={32}
          maxW="40rem"
          color="light"
        >
          <Text fontSize="md" lineHeight="md" mb={1}>
            ESPECIALIZAÇÕES
          </Text>
          <Heading
            color="light"
            size="lg"
            text="O que oferecemos para você e sua saúde"
            isHighlighted
            highlightedText={['oferecemos', 'você', 'saúde']}
          />
        </Flex>
        <Image src="/assets/marca.svg" alt="marca" h="7rem" />
      </Flex>
      <Flex alignItems="center" gap={6} mt={20} position="relative">
        <Box
          bgImage="/assets/clinic_example.png"
          h="28rem"
          w="9.5rem"
          bgPos="right"
          bgSize="cover"
          filter="grayscale(100%)"
        />
        <Image
          src="/assets/clinic_example.png"
          alt="gallery_1"
          h="35rem"
          w="calc(100vw-22rem)"
        />
        <Box
          bgImage="/assets/clinic_example.png"
          h="28rem"
          w="9.5rem"
          bgPos="left"
          bgSize="cover"
          filter="grayscale(100%)"
        />
        <Flex
          alignItems="center"
          position="absolute"
          left="4rem"
          borderRadius="full"
          bgColor="rgba(254, 254, 254, 0.40)"
          _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
          transition="all 0.2s ease"
          backdropFilter="auto"
          backdropBlur="5px"
          p={9}
          cursor="pointer"
        >
          <Icon as={MoveLeft} boxSize={8} color="eerie" />
        </Flex>
        <Flex
          alignItems="center"
          position="absolute"
          right="4rem"
          borderRadius="full"
          bgColor="rgba(254, 254, 254, 0.40)"
          _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
          transition="all 0.2s ease"
          backdropFilter="auto"
          backdropBlur="5px"
          p={9}
          cursor="pointer"
        >
          <Icon as={MoveRight} boxSize={8} color="eerie" />
        </Flex>
      </Flex>
      <Box
        bgColor="rgba(254, 254, 254, 0.40)"
        borderRadius="full"
        w="38rem"
        mt={10}
        h={2}
        mx="auto"
      >
        <Box bgColor="light" h={2} borderRadius="full" w="10%" />
      </Box>
    </Box>
  )
}
