import { Box, Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'
import { Heading } from './Heading'

export function Me() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <Flex mt={[8,8,8,28,28]} gap={[8, 8, 8, 8, 20]} pl={[4, 4, 4, 0, 0]} pr={[4, 4, 4, 4, 32]} alignItems="stretch" flexDir={['column', 'column', 'column', 'row', 'row']}>

      <Grid h={["360px", "360px", "360px", "initial", 'initial']} templateColumns="1fr 1fr" gap={6} minW="calc(100vw - 40rem)">
        <GridItem
          bgImage="/assets/marina1.png"
          bgPos="center"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
        <GridItem
          bgImage="/assets/marina2.png"
          rowSpan={2}
          bgPos="center"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
        <GridItem
          bgImage="/assets/marina3.png"
          bgPos="bottom"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
      </Grid>

      <Box>
        <Flex direction="column" alignItems="start" gap={[2, 2, 2, 6, 6]}>
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1}>
              SOBRE MIM
            </Text>
            <Heading
              color="battleship"
              size={isMobile ? "md" : "lg"}
              text="Quem vai cuidar de você?"
              isHighlighted
              highlightedText="cuidar de você?"
            />
            <Box h="0.5px" w={64} bgColor="silver" mt={[8, 8, 8, 14, 14]} />
          </Box>
          <Text fontSize="lg" lineHeight="lg">
            A Dra. Marina, apaixonada por transformar sorrisos e vidas, lidera nossa equipe de especialistas. Formada pela Universidade Federal de Santa Catarina, sua paixão pela área a levou a construir uma carreira sólida, com foco em Harmonização Orofacial.
            <br></br> <br></br>
            Seu currículo abrangente inclui diversas especializações e cursos em odontologia estética, ortodontia, harmonização facial e implantodontia. Além disso, a Dra. Marina possui Aperfeiçoamento em implantodontia e prótese, bem como em Cirurgia oral menor, garantindo um atendimento completo e personalizado aos pacientes.
            <br></br> <br></br>
            Com vasta experiência e conhecimento, a Dra. Marina se dedica a oferecer resultados impecáveis, sempre atenta às necessidades e expectativas de cada indivíduo.
            <br></br> <br></br>
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
