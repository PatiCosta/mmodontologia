import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { MoveRight } from 'lucide-react'
import { ContactButton } from './ContactButton'

export function Main() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <Flex
      alignItems="stretch"
      direction={["column-reverse", "column-reverse", "column-reverse", "column", "column"]}
      gap={[6, 4, 4, 16, 16]}
      my={[8, 16, 16, 16, 16]}
      px={[4, 4, 8, 12, 2]}
    >


      {/* Banners com contato */}
      <Flex
        flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
        w={['100%', '100%', '100%', '', '']}
        maxW='1920px'
        mx='auto'
        justifyContent={'space-between'}
        gap={[0, 0, 0, 6, 1]}
        alignItems="center"

      >

        {/* CARD 1 */}
        {isMobile ?
          // FOTO NO MOBILE
          <Flex flexDir={'column'} w='100%' gap={6}>

            {/* RETRATO DA MARINA (no lugar do vídeo do YouTube, que pesava demais pra carregar no topo) */}
            <Box
              bgImage="/assets/marina2.png"
              bgPosition="center top"
              bgSize="cover"
              bgRepeat="no-repeat"
              w="100%"
              h="398px"
              boxShadow={'0px 1px 4px 0px black'}
              borderRadius={8}
            />
            {/* versão anterior: vídeo do YouTube no topo (removido por peso)
            <Flex flexDir={'column'} gap={4} boxShadow={'0px 1px 4px 0px black'} borderRadius={8}>

              <iframe width="100%" height="398px" src="https://www.youtube.com/embed/OcSoSanmS9E?si=-R80BmWTJrtVo_aH&autoplay=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{ borderRadius: 8 }}></iframe>

            </Flex>
            */}
            <Flex direction="column" gap={3} alignItems={["start", "start", "start", "end", "end"]} py={2}>

              <Text fontSize={"md"} lineHeight='md' textAlign='start' pr={[8, 8, 8, 0, 0]} color="battleship">
                Harmonização facial começa com uma pergunta:
              </Text>
              <Text fontSize={"xl"} lineHeight='lg' textAlign='start' pr={[8, 8, 8, 0, 0]} fontWeight="semibold" color="eerie">
                Como você quer ser percebida pelo mundo?
              </Text>
              <Text fontSize={"md"} lineHeight='md' textAlign='start' pr={[8, 8, 8, 0, 0]}>
                É a partir dessa resposta, da sua individualidade e das características do seu rosto que construo um planejamento pensado para você.
              </Text>
              <Text fontSize={"sm"} lineHeight='sm' textAlign='start' pr={[8, 8, 8, 0, 0]} color="dim" fontStyle="italic">
                Arquitetura Facial 360™ — por Dra. Marina Maragno
              </Text>
              {/* versão anterior (CRO diagnóstico):
              <Text fontSize={"lg"} lineHeight='md' textAlign='start' pr={[8, 8, 8, 0, 0]}>
                Harmonização orofacial que realça sua beleza natural — sem parecer artificial.
                Agenda com vagas limitadas por semana.
              </Text>
              */}
              {/* versão original:
              <Text fontSize={"lg"} lineHeight='md' textAlign='start' pr={[8, 8, 8, 0, 0]}>
                Descubra a arte da harmonização facial e do sorriso perfeito
                conosco, onde a beleza e a saúde se unem para transformar vidas.
              </Text>
              */}

            </Flex>
            <ContactButton isDark={true} />

          </Flex>
          :

          // FOTO DO CONSULTORIO
          <Flex
            py={6}
            bgImage="/assets/clinica_main.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "50%", "50%"]}
            h="460px"
            boxShadow="dark"
            direction="column"
            justifyContent="end"

          >
            <Button
              as="a"
              href="https://wa.me/5548996437416?text=Olá, acessei o site da Dra. Marina Maragno e gostaria de agendar minha avaliação"
              target="_blank"
              rel="noopener noreferrer"
              w="100%"
              py={6}
              gap={4}
              display="flex"
              alignItems="center"
              bgColor="rgba(32, 34, 34, 0.25)"
              _hover={{ bgColor: 'rgba(32, 34, 34, 0.40)' }}
              transition="all 0.2s ease"
              borderRadius="full"
              backdropFilter="auto"
              backdropBlur="5px"
            >
              <Text color="light" fontWeight="thin">
                Agendar minha avaliação
              </Text>
              <MoveRight size={24} color="#fefefe" />
            </Button>
            {/* versão anterior (CRO): "Agendar avaliação pelo WhatsApp" */}
            {/* versão original:
            <Button
              w="100%"
              py={6}
              gap={4}
              display="flex"
              alignItems="center"
              bgColor="rgba(32, 34, 34, 0.25)"
              _hover={{ bgColor: 'rgba(32, 34, 34, 0.40)' }}
              transition="all 0.2s ease"
              borderRadius="full"
              backdropFilter="auto"
              backdropBlur="5px"
            >
              <Text color="light" fontWeight="thin">
                Entre em contato conosco
              </Text>
              <MoveRight size={24} color="#fefefe" />
            </Button>
            */}


          </Flex>
        }
        {/* CARD 2 */}
        {isMobile ?
          ''
          :
          // RETRATO DA MARINA NO CENTRO (maior, no lugar do vídeo, que saiu por peso) + FOTO DELA ATENDENDO
          <>
            {/* quadro vertical 4:5 (484x604) que não encolhe: mostra da cabeça aos braços cruzados;
                as fotos laterais dividem o resto da largura */}
            <Box
              bgImage="/assets/marina2.png"
              bgPosition="center 10%"
              bgSize="cover"
              bgRepeat="no-repeat"
              w="484px"
              h="604px"
              flexShrink={0}
              boxShadow="dark"
            />
            {/* versão anterior: vídeo do YouTube entre as duas fotos
            <Flex
              // bgImage="/assets/yourSmileOurPassion.png"
              bgPosition="center"
              bgSize="cover"
              w='100%'
              h="604px"
              boxShadow="dark"
              direction="column"
              justifyContent="center"

              // px={32}
              gap={10}
            >

              <iframe width="100%" height="640px" src="https://www.youtube.com/embed/OcSoSanmS9E?si=-R80BmWTJrtVo_aH&autoplay=1&loop=1"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

              (os dois Flex SEU SORRISO / NOSSA PAIXÃO abaixo já estavam comentados nessa versão)
              <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="SEU" />
              <Heading color="light" size="xs" text="SORRISO" />
            </Flex>
            <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="NOSSA" />
              <Heading color="light" size="xs" text="PAIXÃO" />
            </Flex>
            </Flex>
            */}


            <Box
              bgImage="/assets/marina_main_3.png"
              bgPosition={["right", "center", "center", "75% center", "center top"]}
              bgRepeat={'no-repeat'}
              bgSize={["contain", "contain", "cover", "cover", "cover"]}
              position={'relative'}
              w={["100%", "100%", "100%", "50%", "50%"]}
              h={["360px", "360px", "460px", "460px", "460px"]}
            >

            </Box>
          </>
        }

      </Flex>

      {/* Subtitulo e descrição promocional */}
      <Flex flexDir={['column', 'column', 'column', 'row', 'row']} gap={[2, 2, 2, 20, 20]} alignItems={["start", "start", "start", "end", "end"]} px={[2, 0, 28, 28, 28]}>
        <Box pr={[4, 8, 8, 8, 0]}>
          <Text fontSize={isMobile ? "sm" : "md"} lineHeight={isMobile ? "sm" : "md"} color="battleship" mb={2} textAlign="start">
            Harmonização facial começa com uma pergunta:
          </Text>
          <Heading
            size={isMobile ? "md" : "lg"}
            fontSize={['1.8rem', '1.8rem', '1.8rem', '2.5rem', '2.5rem']}
            text="Como você quer ser percebida pelo mundo?"
            color={"eerie"}
            isHighlighted
            highlightedText={['percebida pelo mundo']}
            textAlign={["start", "start", "start", "start", "start"]}
          />
        </Box>
        {/* versão anterior (CRO diagnóstico):
        <Heading
          size={isMobile ? "md" : "lg"}
          fontSize={['1.8rem', '1.8rem', '1.8rem', '2.5rem', '2.5rem']}
          text="Harmonização orofacial que realça sua beleza natural — sem parecer artificial."
          color={"eerie"}
          isHighlighted
          highlightedText={['beleza natural', 'sem parecer artificial']}
          textAlign={["start", "start", "start", "start", "start"]}
          pr={[4, 8, 8, 8, 0]}
        />
        */}
        {/* versão original:
        <Heading
          size={isMobile ? "md" : "lg"}
          fontSize={['1.8rem', '1.8rem', '1.8rem', '2.5rem', '2.5rem']}
          text="Realçando a beleza que já existe em você."
          color={"eerie"}
          isHighlighted
          highlightedText={['Realçando', 'já existe']}
          textAlign={["start", "start", "start", "start", "start"]}
          pr={[4, 8, 8, 8, 0]}
        />
        */}

        {isMobile ? '' :


          <Flex direction="column" gap={4} alignItems={["start", "start", "start", "end", "end"]} pb={3}>

            <Text fontSize={isMobile ? "md" : "lg"} lineHeight={isMobile ? "sm" : "lg"} textAlign={["start", "start", "start", "end", "end"]} pr={[8, 8, 8, 0, 0]}>
              É a partir dessa resposta, da sua individualidade e das características do seu rosto que construo um planejamento pensado para você.
            </Text>
            <Text fontSize="sm" lineHeight="sm" color="dim" fontStyle="italic" textAlign={["start", "start", "start", "end", "end"]}>
              Arquitetura Facial 360™ — por Dra. Marina Maragno
            </Text>
            {/* versão anterior (CRO):
            <Text fontSize={isMobile ? "md" : "lg"} lineHeight={isMobile ? "sm" : "lg"} textAlign={["start", "start", "start", "end", "end"]} pr={[8, 8, 8, 0, 0]}>
              Você sai da avaliação sabendo exatamente o que vai mudar — e com um plano personalizado para o seu caso. Agenda com vagas limitadas por semana.
            </Text>
            */}
            {/* versão original:
            <Text fontSize={isMobile ? "md" : "lg"} lineHeight={isMobile ? "sm" : "lg"} textAlign={["start", "start", "start", "end", "end"]} pr={[8, 8, 8, 0, 0]}>
              Descubra a arte da harmonização facial e do sorriso perfeito
              conosco, onde a beleza e a saúde se unem para transformar vidas.
            </Text>
            */}

          </Flex>
        }

      </Flex>
    </Flex>
  )
}
