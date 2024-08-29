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
          pr={[4, 4, 4, 0, 0]}
          mb={16}
          mr={[0, 0, 0, 20, 20]}
          spacing={6}
          divider={<Box h="0.5px" bgColor="silver" w="80%" />}
        >
          <Specialty
            title="Harmonização Orofacial"
            description="A harmonização orofacial é um conjunto de procedimentos estéticos que visam equilibrar as proporções do rosto, proporcionando um sorriso mais harmônico e rejuvenescendo a aparência. Através de técnicas como aplicação de ácido hialurônico e botox, é possível corrigir assimetrias, aumentar o volume dos lábios, suavizar rugas e definir o contorno facial."
          />
          <Specialty
            title="Implantes Dentários"
            description="Os implantes dentários são pequenas raízes artificiais de titânio que são colocadas no osso maxilar ou mandibular para substituir as raízes dos dentes perdidos. Sobre esses implantes, são colocadas coroas dentárias, pontes ou próteses, devolvendo a função mastigatória e a estética do sorriso."
          />
          <Specialty
            title="Lentes de Contato Dental"
            description="As lentes de contato dental são finas lâminas de porcelana ou resina compostas que são coladas na superfície dos dentes, proporcionando um sorriso mais branco, alinhado e perfeito. Elas são indicadas para corrigir pequenas imperfeições, como manchas, espaços entre os dentes e desgastes."
          />
          <Specialty
            title="Clareamento e Estética Dental"
            description="O clareamento dental é um tratamento estético que visa remover manchas e devolver a brancura natural dos dentes. Já a estética dental engloba uma série de procedimentos que visam melhorar a aparência do sorriso, como o uso de facetas de porcelana, resinas compostas e outros recursos."
          />
          <Specialty
            title="Alinhadores Invisíveis"
            description="Os alinhadores invisíveis são uma alternativa aos aparelhos ortodônticos tradicionais. São placas transparentes e removíveis que corrigem problemas de alinhamento dos dentes de forma discreta e confortável."
          />
          <Specialty
            title="Tratamento de Canal"
            description="O tratamento de canal é um procedimento odontológico que visa salvar um dente que está com a polpa infeccionada ou inflamada. Durante o tratamento, a polpa do dente é removida e o canal radicular é limpo e obturado."
          />
          <Specialty
            title="Exodontia de Terceiros Molares - Sisos"
            description="A exodontia de terceiros molares, popularmente conhecidos como sisos, é a remoção cirúrgica desses dentes. A cirurgia é indicada quando os sisos estão causando dor, inflamação ou atrapalhando o alinhamento dos outros dentes."
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
