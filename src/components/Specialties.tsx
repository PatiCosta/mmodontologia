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
      zIndex="docked"
      position="relative">

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
            title="Prótese Dentária"
            description="O objetivo da especialidade em Prótese Dentária é o restabelecimento e a manutenção das funções do sistema estomatognático, a fim de proporcionar conforto, estética e saúde pela recolocação dos dentes perdidos e dos tecidos contíguos."
          />
          <Specialty
            title="Endodontia"
            description="A Endodontia é a área da Odontologia que tem como objetivo a preservação do dente por meio de prevenção, diagnóstico, prognóstico, tratamento e controle das alterações da polpa e dos tecidos perirradiculares.
            
            As áreas de competência para atuação do especialista em Endodontia incluem: procedimentos conservadores da vitalidade pulpar, procedimentos cirúrgicos no tecido e na cavidade pulpares, procedimentos cirúrgicos para-endodônticos e tratamento dos traumatismos dentários."
          />
          <Specialty
            title="Implantodontia"
            description="O profissional da área de Implantodontia é o responsável por viabilizar a instalação de implantes dentários, da própria cirurgia de instalação desses implantes e das próteses que são confeccionadas sobre estes dispositivos."
          />
          <Specialty
            title="Cirurgia oral menor"
            description="É uma especialidade da odontologia que abrange uma variedade de procedimentos cirúrgicos realizados na cavidade oral. Esses procedimentos são considerados de pequeno porte e geralmente podem ser realizados em consultório odontológico sob anestesia local."
          />
          <Specialty
            title="Ortodontia"
            description="E por fim, a Ortodontia é a especialidade que tem como objetivo a prevenção, a supervisão e a orientação do desenvolvimento do aparelho mastigatório e a devida correção das estruturas dento-faciais. São esses profissionais os responsáveis por indicação, aplicação e controle dos aparelhos mecanoterápicos e funcionais."
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
        <Flex alignItems="end" pl={[4, 4, 4, 4, 32]} pr={[4, 4, 4, 4, 20]} mt={[-16, -16, -16, 0, 0]} pt={[0, 16, 16, 16, 16]} bgColor={["none", "none", "none", "dim", "dim"]}>
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
            bgImage="/assets/consultorio.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "calc(100vw - (50vw + 8rem))", "calc(100vw - (50vw + 8rem))"]}
            h={["264px", "264px", "264px", "calc((100%/2) - 0.75rem)", "calc((100%/2) - 0.75rem)"]}
          />
          {isMobile ?
            ''
            :

            <Box
              bgImage="/assets/dentist.png"
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
