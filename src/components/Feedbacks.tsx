import { Avatar, Box, Flex, Grid, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ChatsTeardrop, Quotes } from 'phosphor-react'

function Feedback() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      px={10}
      pt={6}
      pb={8}
      gap={4}
      boxShadow="dark"
      h="100%"
      bgColor="light"
    >
      <Quotes size={32} weight="duotone" color="#B1B1AE" />
      <Text fontSize="lg" lineHeight="lg">
        Lorem ipsum dolor sit amet consectetur. Enim lacus eu ipsum sociis amet
        arcu quis. Fusce hac faucibus nulla risus consequat. Nibh enim velit et
        accumsan tellus. At tristique porttitor aliquet nunc gravida est. Nibh
        nisl mollis sagittis sed.
      </Text>
      <Flex alignItems="center" gap={3} justifyContent="center">
        <Avatar size="md" name="Rita Thiel" src="https://bit.ly/broken-link" />
        <Box>
          <Text fontSize="lg" lineHeight="lg" color="battleship">
            Rita Thiel
          </Text>
          <Text fontSize="md" lineHeight="md" color="eerie">
            Paciente de odontologia
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export function Feedbacks() {
  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      rowGap={10}
      columnGap={6}
      px={32}
      mt={28}
      zIndex="dropdown"
      position="relative"
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="md" lineHeight="md" mb={1}>
            DEPOIMENTOS
          </Text>
          <Heading
            color="battleship"
            size="lg"
            text="O que nossos pacientes têm a dizer?"
            isHighlighted
            highlightedText={['nossos', 'pacientes', 'dizer']}
          />
        </Box>
        <Flex alignItems="end" gap={3} w="100%">
          <ChatsTeardrop
            color="#B1B1AE"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="silver" mb={1} />
        </Flex>
      </Flex>
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
      <Feedback />
    </Grid>
  )
}
