import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'
import { Heading } from './Heading'
import { MoveDown } from 'lucide-react'

function Specialty({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Flex alignItems="start" gap={6}>
      <Box w="px" bgColor="silver" h={10} mt={5} />
      <Flex direction="column" gap={3} alignItems="start">
        <Heading color="dim" size="sm" text={title} />
        <Text fontSize="lg" lineHeight="lg">
          {description}
        </Text>
        <Flex alignItems="center" gap={2} cursor="pointer">
          <Text fontSize="lg" lineHeight="lg" color="dim">
            {' '}
            VEJA MAIS
          </Text>
          <Icon as={MoveDown} boxSize={4} color="battleship" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export function Specialties() {
  return (
    <Flex alignItems="stretch" mt={28} zIndex="docked" position="relative">
      <Box flex="1">
        <VStack
          pl={32}
          mb={16}
          mr={20}
          spacing={6}
          divider={<Box h="0.5px" bgColor="silver" w="80%" />}
        >
          <Specialty
            title="Odontologia Estética"
            description="Especializada em procedimentos estéticos dentários como
                clareamentos, facetas e lentes de contato dental para melhorar a
                aparência do sorriso."
          />
          <Specialty
            title="Ortodontia"
            description="Responsável por correções na posição dos dentes e da arcada dentária, utilizando aparelhos ortodônticos ou técnicas como a ortodontia invisível."
          />
          <Specialty
            title="Harmonização Facial"
            description="Voltada para procedimentos estéticos faciais como preenchimentos, botox e outras técnicas para melhorar a harmonia e rejuvenescimento facial."
          />
          <Specialty
            title="Implantodontia"
            description="Especialidade que envolve a colocação de implantes dentários para substituir dentes ausentes e restaurar a função mastigatória e estética."
          />
        </VStack>
        <Flex alignItems="end" pl={32} pr={20} pt={16} bgColor="eerie">
          <ContactButton />
        </Flex>
      </Box>
      <Flex
        direction="column"
        // alignItems="stretch"
        // justifyContent="space-between"
      >
        <Flex
          direction="column"
          alignItems="start"
          pr={32}
          w="calc(100vw - (50vw + 8rem))"
        >
          <Text fontSize="md" lineHeight="md" mb={1}>
            ESPECIALIZAÇÕES
          </Text>
          <Heading
            color="battleship"
            size="lg"
            text="O que oferecemos para você e sua saúde"
            isHighlighted
            highlightedText={['oferecemos', 'você', 'saúde']}
          />
        </Flex>
        <Box mt={10} h="100%">
          <Box
            bgImage="/assets/botox.png"
            bgPosition="center"
            bgSize="cover"
            w="calc(100vw - (50vw + 8rem))"
            h="calc((100%/2) - 0.75rem)"
          />
          <Box
            bgImage="/assets/botox2.png"
            bgPosition="center"
            bgSize="cover"
            w="calc(100vw - (50vw + 8rem))"
            h="calc((100%/2) - 0.75rem)"
            mt={6}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
