import { Box, Flex, Grid, GridItem, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'
import { Heading } from './Heading'
import { InstagramLogo } from 'phosphor-react'

export function Me() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <Flex mt={[8,8,8,20,20]} mb={[12, 12, 12, 20, 20]} gap={[8, 8, 8, 8, 20]} px={[4, 4, 4, 12, 32]} alignItems={['stretch', 'stretch', 'stretch', 'start', 'start']} justifyContent="space-between" flexDir={['column', 'column', 'column', 'row', 'row']}>
      {/* px no xl = mesma linha (8rem) do header e do título da Galeria acima; space-between encosta o texto na linha da direita */}

      {/* No desktop o bloco de fotos é um quadrado (as duas da esquerda ficam quadradas) e não estica até a
          altura do texto; antes ele ocupava calc(100vw - 40rem) e espremia o texto em ~430px, deixando a seção enorme */}
      <Grid
        h={["360px", "360px", "360px", "auto", "auto"]}
        w={["100%", "100%", "100%", "45%", "45%"]}
        maxW={["none", "none", "none", "52rem", "52rem"]}
        flexShrink={0}
        sx={{ aspectRatio: '1 / 1' }}
        templateColumns="1fr 1fr"
        templateRows="1fr 1fr"
        gap={6}
      >
        <GridItem
          bgImage="/assets/marinaquadrado1.JPEG"
          bgPos="center"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
        <GridItem
          bgImage="/assets/marinaprincipal.JPEG"
          rowSpan={2}
          bgPos="center"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
        <GridItem
          bgImage="/assets/marinaquadrado2.JPEG"
          bgPos="center"
          bgSize="cover"
          h={'100%'}
          w={'100%'}
        />
      </Grid>

      <Box flex={1} maxW={["none", "none", "none", "44rem", "44rem"]}>
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
            <Box h="0.5px" w={64} bgColor="silver" mt={[8, 8, 8, 10, 10]} />
          </Box>
          <Text fontSize="lg" lineHeight="lg">
            Meu encontro com a harmonização facial aconteceu em 2019, durante
            minha especialização em Harmonização Orofacial. Desde os primeiros
            procedimentos, encontrei uma área que unia duas coisas que sempre
            fizeram sentido para mim: técnica e um olhar muito apurado para a
            estética.
            <br></br><br></br>
            Com o tempo, acompanhar o impacto dessas mudanças na autoestima e
            na confiança das minhas pacientes transformou essa escolha no
            centro da minha atuação profissional.
            <br></br><br></br>
            Hoje, meu trabalho começa muito antes de qualquer procedimento.
            Gosto de entender quem está diante de mim, o que a incomoda, o que
            deseja valorizar e analisar o rosto como um todo. É desse olhar que
            nasce um planejamento individual, capaz de embelezar sem apagar
            identidade e trazer resultados que não tenham &ldquo;cara de
            procedimento&rdquo;.
            <br></br><br></br>
            Essa forma de enxergar a harmonização deu origem à{' '}
            <strong>Arquitetura Facial 360™</strong> e guia meu trabalho até
            hoje: técnica, sensibilidade e individualidade para que cada
            paciente se reconheça — e goste ainda mais do que vê.
          </Text>
          <Box mt={4}>
            <Text fontSize="md" lineHeight="md" fontWeight="semibold" color="battleship" mb={3}>
              Formação e credenciais
            </Text>
            <Flex direction="column" gap={2}>
              <Text fontSize="md" lineHeight="md">• Cirurgiã-dentista formada pela Universidade Federal de Santa Catarina (UFSC)</Text>
              <Text fontSize="md" lineHeight="md">• Especialista em Harmonização Orofacial</Text>
              <Text fontSize="md" lineHeight="md">• Atuação dedicada à Harmonização Facial desde 2019</Text>
              <Text fontSize="md" lineHeight="md">• Criadora da Arquitetura Facial 360™</Text>
              <Text fontSize="md" lineHeight="md">• Atualização contínua em cursos, congressos e eventos nacionais e internacionais</Text>
            </Flex>
          </Box>
          {/* Marina não enviou nº de pacientes atendidos nesta rodada (item pendente do diagnóstico CRO) */}
          {/* versão anterior (CRO diagnóstico):
          <Text fontSize="lg" lineHeight="lg">
            Sou a Dra. Marina Maragno. Escolhi a Harmonização Orofacial porque
            acredito que estética de verdade é aquela que ninguém precisa
            adivinhar — é a versão mais bonita de você, sem parecer que você
            fez algo.
            <br></br><br></br>
            Sou formada pela Universidade Federal de Santa Catarina, com
            especializações e atualização constante em harmonização facial. Já
            atendi <strong>+ [XXX] pacientes</strong> em Florianópolis,
            construindo um trabalho que valoriza a individualidade de cada
            rosto.
            <br></br><br></br>
            Meu compromisso na sua primeira consulta é simples: te ouvir de
            verdade, te mostrar o que faz sentido para o seu caso e o que não
            faz, e devolver a decisão para você — sem pressão, sem pacote
            pronto, sem "vender" procedimento.
          </Text>
          */}
          {/* versão original:
          <Text fontSize="lg" lineHeight="lg">
            A Dra. Marina, apaixonada por transformar sorrisos e vidas, lidera nossa equipe de especialistas. Formada pela Universidade Federal de Santa Catarina, sua paixão pela área a levou a construir uma carreira sólida, com foco em Harmonização Orofacial.
            <br></br> <br></br>
            Seu currículo abrangente inclui diversas especializações e cursos em odontologia estética, harmonização facial e implantodontia. Além disso, a Dra. Marina possui Aperfeiçoamento em implantodontia e prótese, bem como em Cirurgia oral menor, garantindo um atendimento completo e personalizado aos pacientes.
            <br></br> <br></br>
            Com vasta experiência e conhecimento, a Dra. Marina se dedica a oferecer resultados impecáveis, sempre atenta às necessidades e expectativas de cada indivíduo.
            <br></br> <br></br>
            Nossa clínica conta com uma equipe multidisciplinar de profissionais altamente qualificados, prontos para cuidar da sua saúde bucal em todas as áreas. Oferecemos desde os tratamentos mais tradicionais até as técnicas mais avançadas, sempre com foco no seu bem-estar e satisfação.
          </Text>
          */}
          <Link
          href='https://www.instagram.com/dramarinamaragno?igsh=MXkxbnI0NG52N2lo '
          color={'white'}
          cursor={'pointer'}
          target='_blank'
        >
          <Flex gap={2} alignItems={'center'} justify={'center'}>
            <Flex
              borderRadius="full"
              border="1px solid"
              borderColor="white"
              bgColor={'instagram'}
              p={2}
              cursor="pointer"

              alignItems={'center'}
              justifyContent={'center'}
              flexDir={'column'}

              _hover={{ textDecoration: 'none', color: 'instagram', bgColor: "white", transition: '300ms', borderColor: 'instagram' }}
            >
              <InstagramLogo weight="duotone" size={24} />
            </Flex>
            <Text color='eerie'> Dra. Marina Maragno</Text>
          </Flex>
        </Link>
        </Flex>
        <Flex alignItems="end" pt={[12, 12, 12, 10, 10]}>
          <ContactButton isDark label="Quero conversar com a Dra. Marina" />
        </Flex>
      </Box>
    </Flex>
  )
}
