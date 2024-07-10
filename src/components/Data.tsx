import { Box, Flex, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import { CrownSimple, FlowerLotus, Heart, StarFour } from 'phosphor-react'
import { Heading } from './Heading'

export function Data() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <SimpleGrid
      bgColor="eerie"
      px={[4, 32, 32, 8, 32]}
      pt={[16, 16, 16, 48, 48]}
      pb={[16, 16, 16, 28, 28]}
      gap={[8, 8, 2, 2, 2]}
      columns={[2, 2, 2, 4, 4]}
      position="relative"
      mt={[12, 12, 12, -28, -28]}
    >

      {isMobile ?
        ''
        :
        <>
          <Box
            position="absolute"
            top="36%"
            transform="translateY(20%)"
            left="calc(8rem + ((100vw - 16rem)/4))"
            w="0.5px"
            bgColor="dim"
            h="14rem"
          />
          <Box
            position="absolute"
            top="36%"
            transform="translateY(20%)"
            left="calc(8rem + ((100vw - 16rem)/2))"
            w="0.5px"
            bgColor="dim"
            h="14rem"
          />
          <Box
            position="absolute"
            top="36%"
            transform="translateY(20%)"
            right="calc(8rem + ((100vw - 16rem)/4))"
            w="0.5px"
            bgColor="dim"
            h="14rem"
          />
        </>

      }

      {/* BLOCOS INICIAIS NUMÉRICOS */}
      {/* <Flex px={[0, 0, 0, 2, 10]} pb={[0, 0, 0, 10, 10]} textAlign={['center', 'center', 'center', 'end', 'end']} alignItems="center" direction="column">
        <Text
          fontSize={["2.875rem", "2.875rem", "2.875rem", "4rem", "4rem"]}
          lineHeight={["4rem", "4rem", "4rem", "5rem", "5rem"]}
          color="light"
          fontWeight="semibold"
        >
          + 150
        </Text>
        <Box>
          <Flex alignItems="center" flexDir={['column', 'column', 'column', 'row', 'row']} gap={2}>
            <Box h="px" w={[28, 28, 28, 20, 20]} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              pessoas
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            atendidas por mês
          </Text>
        </Box>
      </Flex>
      <Flex px={[0, 0, 0, 2, 10]} pb={[0, 0, 0, 10, 10]} textAlign={['center', 'center', 'center', 'end', 'end']} alignItems="center" direction="column">
        <Text
          fontSize={["2.875rem", "2.875rem", "2.875rem", "4rem", "4rem"]}
          lineHeight={["4rem", "4rem", "4rem", "5rem", "5rem"]}
          color="light"
          fontWeight="semibold"
        >
          + 900
        </Text>
        <Box>
          <Flex alignItems="center" flexDir={['column', 'column', 'column', 'row', 'row']} gap={2}>
            <Box h="px" w={[28, 28, 28, 20, 20]} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              sorrisos
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            transformados por nós
          </Text>
        </Box>
      </Flex>
      <Flex px={[0, 0, 0, 2, 10]} pb={[0, 0, 0, 10, 10]} textAlign={['center', 'center', 'center', 'end', 'end']} alignItems="center" direction="column">
        <Text
          fontSize={["2.875rem", "2.875rem", "2.875rem", "4rem", "4rem"]}
          lineHeight={["4rem", "4rem", "4rem", "5rem", "5rem"]}
          color="light"
          fontWeight="semibold"
        >
          + 800
        </Text>
        <Box>
          <Flex alignItems="center" flexDir={['column', 'column', 'column', 'row', 'row']} gap={2}>
            <Box h="px" w={[28, 28, 28, 20, 20]} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              belezas
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            naturais realçadas
          </Text>
        </Box>
      </Flex>
      <Flex px={[0, 0, 0, 2, 10]} pb={[0, 0, 0, 10, 10]} textAlign={['center', 'center', 'center', 'end', 'end']} alignItems="center" direction="column">
        <Text
          fontSize={["2.875rem", "2.875rem", "2.875rem", "4rem", "4rem"]}
          lineHeight={["4rem", "4rem", "4rem", "5rem", "5rem"]}
          color="light"
          fontWeight="semibold"
        >
          100%
        </Text>
        <Box>
          <Flex alignItems="center" flexDir={['column', 'column', 'column', 'row', 'row']} gap={2}>
            <Box h="px" w={[28, 28, 28, 20, 20]} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              aprovação
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            dos pacientes
          </Text>
        </Box>
      </Flex>
      
      {isMobile ?
        ''
        :
        <Box
          mx={24}
          h="0.5px"
          bgColor="dim"
          gridColumnStart={1}
          gridColumnEnd={5}
        />
      } */}

      {/* BLOCOS FINAIS COM TEXTOS REPRESENTATIVOS */}

      <Flex px={[2, 2, 2, 12, 12]} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems={["center", "center", "center", "end", "end"]} gap={3} w="100%" flexDir={['column', 'column', 'column', 'row', 'row']}>
          <CrownSimple
            color="#fefefe"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={3} />
        </Flex>
        <Heading color="light" size={isMobile ? 'xs' : 'sm'} mx={['auto','auto','auto','','']} text="Tecnologia" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign={['center','center','center', 'start', 'start']}>
          Equipamentos e técnicas de última geração para garantir o melhor
          tratamento.
        </Text>
      </Flex>

      <Flex px={[2, 2, 2, 12, 12]} pt={[12, 12, 12, 10, 10]} alignItems="start" gap={2} direction="column">
        <Flex alignItems={["center", "center", "center", "end", "end"]} gap={3} w="100%" flexDir={['column', 'column', 'column', 'row', 'row']}>
          <StarFour
            color="#fefefe"
            size={48}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={1} />
        </Flex>
        <Heading color="light" size={isMobile ? 'xs' : 'sm'} mx={['auto','auto','auto','','']} text="Equipe" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign={['center','center','center', 'start', 'start']}>
          Profissionais especializados em odontologia e estética facial.
        </Text>
      </Flex>

      <Flex px={[2, 2, 2, 12, 12]} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems={["center", "center", "center", "end", "end"]} gap={3} w="100%" flexDir={['column', 'column', 'column', 'row', 'row']}>
          <FlowerLotus
            color="#fefefe"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={3} />
        </Flex>
        <Heading color="light" size={isMobile ? 'xs' : 'sm'} mx={['auto','auto','auto','','']} text="Naturalidade" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign={['center','center','center', 'start', 'start']}>
          Resultados estéticos harmoniosos e naturais, valorizando a
          individualidade.
        </Text>
      </Flex>

      <Flex px={[2, 2, 2, 10, 10]} pt={[12, 12, 12, 10, 10]} alignItems="start" gap={2} direction="column">
        <Flex alignItems={["center", "center", "center", "end", "end"]} gap={3} w="100%" flexDir={['column', 'column', 'column', 'row', 'row']}>
          <Heart
            color="#fefefe"
            size={48}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={1} />
        </Flex>
        <Heading color="light" size={isMobile ? 'xs' : 'sm'} mx={['auto','auto','auto','','']} text="Experiência" />
        <Text fontSize="lg" lineHeight="lg" color="light" textAlign={['center','center','center', 'start', 'start']}>
          Atendimento acolhedor e personalizado para garantir conforto e
          satisfação.
        </Text>
      </Flex>

    </SimpleGrid>
  )
}
