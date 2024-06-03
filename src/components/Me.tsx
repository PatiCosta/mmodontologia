import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'
import { Heading } from './Heading'

export function Me() {
  return (
    <Flex mt={28} gap={20} pr={32} alignItems="stretch">
      <Grid templateColumns="1fr 1fr" gap={6} minW="calc(100vw - 40rem)">
        <GridItem
          bgImage="/assets/marina1.png"
          bgPos="center"
          bgSize="cover"
          h="100%"
          w="100%"
        />
        <GridItem
          bgImage="/assets/marina3.png"
          rowSpan={2}
          bgPos="center"
          bgSize="cover"
          h="100%"
          w="100%"
        />
        <GridItem
          bgImage="/assets/marina2.png"
          bgPos="bottom"
          bgSize="cover"
          h="100%"
          w="100%"
        />
      </Grid>
      <Box>
        <Flex direction="column" alignItems="start" gap={6}>
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1}>
              SOBRE MIM
            </Text>
            <Heading
              color="battleship"
              size="lg"
              text="Quem vai cuidar de você?"
              isHighlighted
              highlightedText="cuidar de você?"
            />
            <Box h="0.5px" w={64} bgColor="silver" mt={14} />
          </Box>
          <Text fontSize="lg" lineHeight="lg">
            Lorem ipsum dolor sit amet consectetur. Ultrices tempus felis dictum
            id cras orci congue arcu. In viverra vel proin vel. Nec facilisi
            eget id et ullamcorper consectetur urna ultricies. Purus risus metus
            integer velit orci suspendisse eu. Dui dictum est lacus montes sed
            diam mi sed et. Lorem laoreet mollis euismod sem tempus. Ultrices
            diam justo tellus sit quisque nulla sapien id enim. At lacinia odio
            facilisis aenean cum quam. Risus turpis tortor vestibulum bibendum.
            Erat tincidunt tellus dolor et viverra phasellus scelerisque.
            Aliquet varius.
          </Text>
        </Flex>
        <Flex alignItems="end" pt={16}>
          <ContactButton isDark />
        </Flex>
      </Box>
    </Flex>
  )
}
