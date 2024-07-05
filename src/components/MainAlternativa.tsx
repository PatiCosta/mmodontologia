import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { MoveRight } from 'lucide-react'
import { ContactButton } from './ContactButton'

export function MainAlternativa() {
  return (
    <Flex direction="column" gap={16} alignItems="stretch" mt={32} mb={32} pl={32}>


      <Flex gap={12} alignItems="end">

        {/* Realce a beleza */}
        <Flex maxW={'370px'} gap={16} flexDir={'column'} alignItems="end">

          <Heading
            size="lg"
            text="Realçando a beleza
                    que já existe em você"
            color="battleship"
            isHighlighted
            highlightedText={['Realçando', 'já existe']}
          />

          <Box h="0.5px" bgColor="dim" w={96} />
          <Flex direction="column" gap={4} alignItems="start" pb={3}>
            <Text fontSize="lg" lineHeight="lg" textAlign="start">
              Lorem ipsum dolor sit amet consectetur. Vitae adipiscing eget quis tortor id quisque consequat mi. Maecenas aenean massa tempor id. Donec sit volutpat adipiscing sit eget condimentum in tristique. Mauris semper vulputate fermentum morbi vivamus congue rutrum scelerisque sit. Blandit.
            </Text>
          </Flex>

          <ContactButton isDark={true}/>
        </Flex>

        {/* Foto da marina */}
        <Flex
          bgColor="eerie"
          bgPosition="center"
          bgSize="cover"
          position={'relative'}
          w="875px"
          h="500px"
        >
          <Flex
            bgImage="/assets/clinica_main_alternative.png"
            bgPosition="center"
            bgSize="cover"
            position={'absolute'}
            w="720px"
            h='532px'
            right={0}
            bottom={20}
          >
          </Flex>
        </Flex>
      </Flex>







    </Flex>
  )
}
