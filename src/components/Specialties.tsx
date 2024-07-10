import { Box, Flex, Icon, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
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
      <Flex direction="column" gap={3} pb={4} alignItems="start">
        <Heading color="dim" size="sm" text={title} />
        <Text fontSize="lg" lineHeight="lg">
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}

export function Specialties() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <Flex alignItems="stretch" mt={28} gap={12} flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']} zIndex="docked" position="relative">
      <Box flex="1">
        <VStack
          pl={[2, 2, 2, 2, 32]}
          pr={[4, 4, 4, 0, 0]}
          mb={16}
          mr={[0, 0, 0, 20, 20]}
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
        {isMobile ?
          <Box
            bgImage="/assets/botox2.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2) - 0.75rem)"]}
            mt={6}
          />
          :
          ''}
        <Flex alignItems="end" pl={[4,4,4,4,32]} pr={[4,4,4,4,20]} mt={[-16,-16,-16,0,0]} pt={[0,16,16,16,16]} bgColor={["none","none","none","dim","dim"]}>
          <ContactButton />
        </Flex>
      </Box>

      <Flex
        direction="column"
        px={[4, 4, 4, 0, 0]}
      // alignItems="stretch"
      // justifyContent="space-between"
      >
        <Flex
          direction="column"
          alignItems="start"
          pr={[8, 8, 8, 8, 32]}
          w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
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
            w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2) - 0.75rem)"]}
          />
          {isMobile ?
            ''
            :

            <Box
              bgImage="/assets/botox2.png"
              bgPosition="center"
              bgSize="cover"
              w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
              h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2) - 0.75rem)"]}
              mt={6}
            />
          }
        </Box>
      </Flex>

    </Flex>
  )
}
