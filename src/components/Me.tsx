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
            A Dra. Marina, apaixonada por transformar sorrisos e vidas, lidera nossa equipe de especialistas. Com diversas especializações e cursos em odontologia estética, ortodontia, harmonização facial e implantodontia, ela garante um atendimento personalizado e resultados impecáveis. <br></br> <br></br>

            Nossa clínica conta com uma equipe multidisciplinar de profissionais altamente qualificados, prontos para cuidar da sua saúde bucal em todas as áreas. Oferecemos desde os tratamentos mais tradicionais até as técnicas mais avançadas, sempre com foco no seu bem-estar e satisfação.
          </Text>
        </Flex>
        <Flex alignItems="end" pt={16}>
          <ContactButton isDark />
        </Flex>
      </Box>
    </Flex>
  )
}
