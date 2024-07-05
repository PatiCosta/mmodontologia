import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { CrownSimple, FlowerLotus, Heart, StarFour } from 'phosphor-react'
import { Heading } from './Heading'

export function Data() {
  return (
    <SimpleGrid
      bgColor="dim"
      px={32}
      pt={48}
      pb={28}
      columns={4}
      position="relative"
      mt={-28}
    >
      <Box
        position="absolute"
        top="20%"
        transform="translateY(20%)"
        left="calc(8rem + ((100vw - 16rem)/4))"
        w="0.5px"
        bgColor="dim"
        h="14rem"
      />
      <Box
        position="absolute"
        top="20%"
        transform="translateY(20%)"
        left="calc(8rem + ((100vw - 16rem)/2))"
        w="0.5px"
        bgColor="dim"
        h="14rem"
      />
      <Box
        position="absolute"
        top="20%"
        transform="translateY(20%)"
        right="calc(8rem + ((100vw - 16rem)/4))"
        w="0.5px"
        bgColor="dim"
        h="14rem"
      />
      <Flex px={10} pb={10} alignItems="center" direction="column">
        <Text
          fontSize="4rem"
          lineHeight="5rem"
          color="light"
          fontWeight="semibold"
        >
          + 150
        </Text>
        <Box>
          <Flex alignItems="center" gap={2}>
            <Box h="px" w={20} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              pessoas
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            atendidas por mês
          </Text>
        </Box>
      </Flex>
      <Flex px={10} pb={10} alignItems="center" direction="column">
        <Text
          fontSize="4rem"
          lineHeight="5rem"
          color="light"
          fontWeight="semibold"
        >
          + 900
        </Text>
        <Box>
          <Flex alignItems="center" gap={2}>
            <Box h="px" w={20} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              sorrisos
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            transformados por nós
          </Text>
        </Box>
      </Flex>
      <Flex px={10} pb={10} alignItems="center" direction="column">
        <Text
          fontSize="4rem"
          lineHeight="5rem"
          color="light"
          fontWeight="semibold"
        >
          + 800
        </Text>
        <Box>
          <Flex alignItems="center" gap={2}>
            <Box h="px" w={20} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              belezas
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            naturais realçadas
          </Text>
        </Box>
      </Flex>
      <Flex px={10} pb={10} alignItems="center" direction="column">
        <Text
          fontSize="4rem"
          lineHeight="5rem"
          color="light"
          fontWeight="semibold"
        >
          100%
        </Text>
        <Box>
          <Flex alignItems="center" gap={2}>
            <Box h="px" w={20} bgColor="light" />
            <Text fontSize="lg" lineHeight="lg" color="light">
              aprovação
            </Text>
          </Flex>
          <Text fontSize="lg" lineHeight="lg" color="light">
            dos pacientes
          </Text>
        </Box>
      </Flex>
      <Box
        mx={24}
        h="0.5px"
        bgColor="dim"
        gridColumnStart={1}
        gridColumnEnd={5}
      />
      <Flex px={12} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems="end" gap={3} w="100%">
          <CrownSimple
            color="#fefefe"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={3} />
        </Flex>
        <Heading color="light" size="sm" text="Tecnologia" />
        <Text fontSize="lg" lineHeight="lg" color="light">
          Equipamentos e técnicas de última geração para garantir o melhor
          tratamento.
        </Text>
      </Flex>
      <Flex px={12} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems="end" gap={3} w="100%">
          <StarFour
            color="#fefefe"
            size={48}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={1} />
        </Flex>
        <Heading color="light" size="sm" text="Equipe" />
        <Text fontSize="lg" lineHeight="lg" color="light">
          Profissionais especializados em odontologia e estética facial.
        </Text>
      </Flex>
      <Flex px={12} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems="end" gap={3} w="100%">
          <FlowerLotus
            color="#fefefe"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={3} />
        </Flex>
        <Heading color="light" size="sm" text="Naturalidade" />
        <Text fontSize="lg" lineHeight="lg" color="light">
          Resultados estéticos harmoniosos e naturais, valorizando a
          individualidade.
        </Text>
      </Flex>
      <Flex px={10} pt={10} alignItems="start" gap={2} direction="column">
        <Flex alignItems="end" gap={3} w="100%">
          <Heart
            color="#fefefe"
            size={48}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="light" mb={1} />
        </Flex>
        <Heading color="light" size="sm" text="Experiência" />
        <Text fontSize="lg" lineHeight="lg" color="light">
          Atendimento acolhedor e personalizado para garantir conforto e
          satisfação.
        </Text>
      </Flex>
    </SimpleGrid>
  )
}
