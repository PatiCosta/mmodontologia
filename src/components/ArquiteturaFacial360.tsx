import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'

export function ArquiteturaFacial360() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  // mb desktop compensa o mt negativo de -28 do Data.tsx (que sobe 7rem por cima do que vem antes)
  return (
    <Flex
      id="#arquitetura-facial-360"
      mt={[16, 20, 20, 28, 28]}
      mb={[0, 0, 0, 28, 28]}
      px={[4, 8, 8, 20, 32]}
      py={[10, 12, 12, 16, 20]}
      flexDir={['column', 'column', 'column', 'row', 'row']}
      gap={[6, 8, 8, 16, 20]}
      alignItems="start"
      borderTop="0.5px solid"
      borderBottom="0.5px solid"
      borderColor="silver"
    >
      <Flex direction="column" alignItems="start" flex="1" pr={[0, 0, 0, 8, 16]}>
        <Text fontSize="md" lineHeight="md" mb={2} color="battleship" letterSpacing="0.1em">
          O MÉTODO
        </Text>
        <Heading
          color="eerie"
          size={isMobile ? 'md' : 'lg'}
          text="Arquitetura Facial 360™"
        />
        <Text fontSize="sm" lineHeight="sm" color="dim" fontStyle="italic" mt={3}>
          por Dra. Marina Maragno
        </Text>
      </Flex>

      <Flex direction="column" flex="1.5" gap={5}>
        <Text fontSize={isMobile ? 'md' : 'lg'} lineHeight={isMobile ? 'md' : 'lg'} color="eerie" fontWeight="medium">
          Cada rosto carrega uma identidade, e é a partir dela que começa o meu olhar.
        </Text>
        <Text fontSize={isMobile ? 'md' : 'lg'} lineHeight={isMobile ? 'md' : 'lg'} color="dim">
          A Arquitetura Facial 360™ considera suas características, proporções e desejos para construir um planejamento verdadeiramente individualizado.
        </Text>
        <Text fontSize={isMobile ? 'md' : 'lg'} lineHeight={isMobile ? 'md' : 'lg'} color="dim">
          Um olhar que une técnica e sensibilidade para valorizar sua beleza, suavizar o que incomoda e destacar o que favorece você — para que o resultado não seja apenas mais harmônico e natural, mas faça você se sentir mais bonita e confiante.
        </Text>
      </Flex>
    </Flex>
  )
}
