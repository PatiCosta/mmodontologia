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
    <Flex
      id="#especializações"
      alignItems="stretch"
      mt={28}
      gap={12}
      flexDir={['column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
        'row']}
      // zIndex="docked"
      position="relative">

      <Box flex="1">

        <VStack
          pl={[2, 2, 2, 2, 32]}
          pr={[2, 2, 2, 0, 0]}
          mb={[0, 0, 16, 16, 16]}
          mr={[0, 0, 0, 20, 20]}
          spacing={6}
          divider={<Box h="0.5px" bgColor="silver" w="80%" />}
        >
          <Specialty
            title="Harmonização Orofacial"
            description="A harmonização orofacial é um conjunto de procedimentos estéticos que visam equilibrar as proporções do rosto, valorizando a beleza natural de cada paciente. Através de técnicas modernas, é possível corrigir assimetrias, suavizar rugas, definir o contorno facial e devolver a sensação de rejuvenescimento — sempre com resultados naturais."
          />
          <Specialty
            title="Preenchimento Labial"
            description="O preenchimento labial com ácido hialurônico realça o volume, o contorno e a hidratação dos lábios, respeitando a proporção do rosto. O resultado é natural, com lábios mais definidos e harmônicos — sem exageros."
          />
          <Specialty
            title="Toxina Botulínica"
            description="A aplicação de toxina botulínica suaviza linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos, prevenindo o aprofundamento das rugas. O resultado preserva a expressão natural do rosto."
          />
          <Specialty
            title="Bichectomia"
            description="A bichectomia é a remoção parcial das bolsas de Bichat, presentes nas bochechas. O procedimento afina o terço inferior do rosto, evidenciando os contornos naturais e trazendo uma aparência mais alongada e definida."
          />
          <Specialty
            title="Bioestimuladores de Colágeno"
            description="Os bioestimuladores estimulam a produção natural de colágeno pela pele, restaurando firmeza, viço e sustentação. Indicado para quem busca um rejuvenescimento gradual e duradouro, sem alterar os traços do rosto."
          />
          <Specialty
            title="Rinomodelação"
            description="A rinomodelação é uma alternativa não cirúrgica para corrigir pequenas imperfeições do nariz, como assimetrias e projeção da ponta. Com ácido hialurônico, é possível refinar o formato do nariz em uma única sessão, sem cortes ou recuperação prolongada."
          />


        {isMobile ?
          <Box
            bgImage="/assets/specialties/invisalign.png"
            bgPosition="center"
            bgSize="cover"
            w='100%'
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/4) - 0.75rem)"]}
            mt={6}
            mx='auto'
          />
          :
          ''}
        </VStack>


        {isMobile ?
          <Box
            bgImage="/assets/teste2.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2) - 0.75rem)"]}
          > olha aqui ó</Box>
          :
          ''}
        <Flex alignItems="end" pl={[4, 4, 4, 4, 32]} pr={[4, 4, 4, 4, 20]} mt={[-60, -16, -16, 0, 0]} pt={[0, 16, 16, 16, 16]} bgColor={["none", "none", "none", "dim", "dim"]}>
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
            text="O que oferecemos para realçar sua beleza natural"
            isHighlighted
            highlightedText={['oferecemos', 'beleza natural']}
          />
        </Flex>
        <Box mt={10} h="100%" pb={0}>
          <Box
            bgImage="/assets/specialties/antes-depois.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2.5) - 0.75rem)"]}
          />
          {isMobile ?
            ''
            :
            <>
              <Box
                bgImage="/assets/specialties/preenchimento-labial.png"
                bgPosition="center"
                bgSize="cover"
                w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
                h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/3) - 0.75rem)"]}
                mt={6}
              />
              <Box
                bgImage="/assets/specialties/invisalign.png"
                bgPosition="center"
                bgSize="cover"
                w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
                h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/4) - 0.75rem)"]}
                mt={6}
              />
            </>
          }
        </Box>
      </Flex>

    </Flex>
  )
}
