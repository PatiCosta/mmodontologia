import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { MoveRight } from 'lucide-react'

export function Main() {
  return (
    <Flex direction="column" gap={16} alignItems="stretch" my={16} px={32}>
      <Flex gap={6} alignItems="end">
        <Flex
          py={6}
          px={8}
          bgImage="/assets/clinica_main.png"
          bgPosition="center"
          bgSize="cover"
          w="calc((100vw - 16rem)/3)"
          h="432px"
          boxShadow="dark"
          direction="column"
          justifyContent="end"
        >
          <Button
            display="flex"
            alignItems="center"
            gap={4}
            w="100%"
            py={6}
            bgColor="rgba(32, 34, 34, 0.25)"
            _hover={{ bgColor: 'rgba(32, 34, 34, 0.40)' }}
            transition="all 0.2s ease"
            borderRadius="full"
            backdropFilter="auto"
            backdropBlur="5px"
          >
            <Text color="light" fontWeight="thin">
              Entre em contato conosco
            </Text>
            <MoveRight size={24} color="#fefefe" />
          </Button>
        </Flex>
        <Flex
          bgImage="/assets/yourSmileOurPassion.png"
          bgPosition="center"
          bgSize="cover"
          w="calc((100vw - 16rem)/3)"
          h="432px"
          boxShadow="dark"
          direction="column"
          justifyContent="center"
          px={32}
          gap={10}
        >
          <Flex direction="column" alignItems="center">
            <Heading color="eerie" size="xs" text="SEU" />
            <Heading color="light" size="xs" text="SORRISO" />
          </Flex>
          <Flex direction="column" alignItems="center">
            <Heading color="eerie" size="xs" text="NOSSA" />
            <Heading color="light" size="xs" text="PAIXÃO" />
          </Flex>
        </Flex>
        <Box
          bgImage="/assets/marina_main.png"
          bgPosition="center"
          bgSize="cover"
          w="calc((100vw - 17.5rem)/3)"
          h="432px"
          ml={-12}
        />
      </Flex>
      <Flex gap={20} alignItems="end">
        <Heading
          size="lg"
          text="Realçando a beleza
                    que já existe em você"
          color="battleship"
          isHighlighted
          highlightedText={['Realçando', 'já existe']}
        />
        <Flex direction="column" gap={4} alignItems="end" pb={3}>
          <Text fontSize="lg" lineHeight="lg" textAlign="end">
            Descubra a arte da harmonização facial e do sorriso perfeito
            conosco, onde a beleza e a saúde se unem para transformar vidas.
          </Text>
          <Box h="0.5px" bgColor="dim" w={96} />
        </Flex>
      </Flex>
    </Flex>
  )
}
