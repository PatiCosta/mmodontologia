import { Box, Flex, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { MoveLeft, MoveRight } from 'lucide-react'
import { use, useState } from 'react'
import { carouselPics } from './helpers/carousel'

export function Gallery() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  const [carouselIndex, setCarouselIndex] = useState(0)


  const carouselLength = carouselPics.length
  const [carouselBarSize, setCarouselBarSize] = useState(100 / carouselLength)

  return (
    <Box id="#galeria" bgColor="dim" pt={[4, 4, 4, 28, 28]} pb={28} mt={-28} >
      <Box h="0.5px" w="calc(100% - 16rem)" mx={[0, 0, 0, 32, 32]} mt={20} bgColor="dim" />

      <Flex alignItems="center" flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']} justifyContent="space-between" mx={[4, 4, 4, 32, 32]} mt={16} gap={[12, 12, 12, 0, 0]}>
        <Flex
          direction="column"
          alignItems="start"
          pr={[2, 2, 2, 32, 12]}
          maxW="40rem"
          color="light"
        >
          <Text fontSize="md" lineHeight="md" mb={1}>
            GALERIA
          </Text>
          <Heading
            color="light"
            size={isMobile ? 'md' : 'lg'}
            text="Um pouco do nosso espaço e o que fazemos"
            isHighlighted
            highlightedText={['nosso espaço', 'o que fazemos']}
          />
        </Flex>
        <Image src="/assets/marca.svg" alt="marca" h="7rem" />
      </Flex>

      <Flex alignItems="center" gap={[2, 2, 0, 6, 6]} mt={20} position="relative">
        <Box
          bgImage={carouselIndex <= 0 ? carouselPics[carouselLength - 1] : carouselPics[carouselIndex - 1]}
          h={['40vh', '40vh', '40vh', '28rem', '28rem']}
          w="9.5rem"
          bgPos="center"
          bgSize="cover"
          filter="grayscale(100%)"
        />
        <Image
          src={carouselPics[carouselIndex]}
          alt="gallery_1"
          objectFit={'cover'}
          h={['50vh', '50vh', '50vh', '35rem', '35rem']}
          w={['80vw', '80vw', '80vw', 'calc(100vw-22rem)', 'calc(100vw-22rem)']}
        />
        <Box
          bgImage={carouselIndex == carouselLength - 1 ? carouselPics[0] : carouselPics[carouselIndex + 1]}
          h={['40vh', '40vh', '40vh', '28rem', '28rem']}
          w="9.5rem"
          bgPos="center"
          bgSize="cover"
          filter="grayscale(100%)"
        />

        <Flex
          onClick={() => { carouselIndex <= 0 ? setCarouselIndex(carouselLength - 1) : setCarouselIndex(carouselIndex - 1) }}
          alignItems="center"
          position="absolute"
          left={["1rem", "1rem", "2rem", "4rem", "4rem"]}
          borderRadius="full"
          bgColor="rgba(254, 254, 254, 0.40)"
          _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
          transition="all 0.2s ease"
          backdropFilter="auto"
          backdropBlur="5px"
          p={[2, 2, 2, 9, 9]}
          cursor="pointer"
        >
          <Icon as={MoveLeft} boxSize={8} color="eerie" />
        </Flex>

        <Flex
          onClick={() => { carouselIndex >= carouselLength - 1 ? setCarouselIndex(0) : setCarouselIndex(carouselIndex + 1) }}
          alignItems="center"
          position="absolute"
          right={["1rem", "1rem", "2rem", "4rem", "4rem"]}
          borderRadius="full"
          bgColor="rgba(254, 254, 254, 0.40)"
          _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
          transition="all 0.2s ease"
          backdropFilter="auto"
          backdropBlur="5px"
          p={[2, 2, 2, 9, 9]}
          cursor="pointer"
        >
          <Icon as={MoveRight} boxSize={8} color="eerie" />
        </Flex>
      </Flex>

      <Box
        bgColor="rgba(254, 254, 254, 0.40)"
        borderRadius="full"
        w={['80%', '80%', '80%', '38rem', '38rem']}
        mt={10}
        h={2}
        mx="auto"
      >
        <Box bgColor="light" h={2} borderRadius="full" ml={`${carouselBarSize * carouselIndex}%`} w={`${carouselBarSize}%`} />
      </Box>

    </Box>
  )
}
