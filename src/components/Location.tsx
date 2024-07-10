import { Box, Flex, Text } from '@chakra-ui/react'
import { Heading } from './Heading'

export function Location() {
  return (
    <Box bgColor="dim" pt={28} mt={-28}>
      <Flex
        alignItems="stretch"
        gap={10}
        mt={28}
        pr={[4, 4, 4, 32, 32]}
        pl={[4, 4, 4, 32, 32]}
        flexDir={['column', 'column', 'column', 'row', 'row']}
      >

        <Flex
          direction="column"
          alignItems="start"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1} color="light">
              ENDEREÇO
            </Text>
            <Heading
              color="light"
              size="lg"
              text="Onde você pode nos encontrar"
              isHighlighted
              highlightedText={['Onde', 'encontrar']}
            />
          </Box>
          <Text fontSize="lg" lineHeight="lg" color="light">
            Ratione minima quas alias porro optio sint autem, Itaim Bibi, São
            Paulo - SP, 01155-987
          </Text>
        </Flex>
        <Box
          bgImage="/assets/map.png"
          bgPos="center"
          bgSize="cover"
          w={[
            "100%",
            "100%",
            "100%",
            "calc(100vw - 8rem - ((100vw - 16rem - 3rem)/3))",
            "calc(100vw - 8rem - ((100vw - 16rem - 3rem)/3))"
          ]}
          h={96}
        />
      </Flex>
      <Box h="0.5px" bgColor="dim" w="calc(100vw - 16rem)" mx="auto" mt={28} />
    </Box>
  )
}
