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
      direction={["column-reverse", "column-reverse","column-reverse", "column", "column"]}
      gap={[4, 4, 4, 16, 16]}
      my={[8, 16, 16, 16, 16]}
      px={[4, 4, 8, 12, 32]}>
      

      {/* Banners com contato */}
      <Flex 
      flexDir={['column-reverse','column-reverse', 'column-reverse', 'row', 'row']} 
      w={['100%','100%' ,'100%', '', '']} 
      gap={[0,0,0,6,6]} 
      alignItems="end"
      >

        {/* CARD 1 */}
        {isMobile ?
          <ContactButton isDark={true} />
          :
          // FOTO DO CONSULTORIO
          <Flex
            py={6}
            px={[0, 0, 0, 0,8]}
            bgImage="/assets/clinica_main.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%",  "calc((100vw - 16rem)/2)", "calc((100vw - 16rem)/3)"]}
            h="432px"
            boxShadow="dark"
            direction="column"
            justifyContent="end"

          >
            <Button
              display="flex"
              alignItems="center"
              gap={4}
              w="100%"
              py={6}
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
          </Flex>
        }
        {/* CARD 2 */}
        {isMobile ?
          ''
          :
          <Flex
            bgImage="/assets/yourSmileOurPassion.png"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "100%", "100%", "calc((100vw - 16rem)/3)"]}
            h="432px"
            boxShadow="dark"
            direction="column"
            justifyContent="center"
            px={32}
            gap={10}
          >
            <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="SEU" />
              <Heading color="light" size="xs" text="SORRISO" />
            </Flex>
            <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="NOSSA" />
              <Heading color="light" size="xs" text="PAIXÃO" />
            </Flex>
          </Flex>
        }
        <Box
          bgImage="/assets/marina_main.png"
          bgPosition={["right", "center", "center", "center", "center"]}
          bgRepeat={'no-repeat'}
          bgSize={["contain", "contain", "contain", "cover", "cover"]}
          w={["100%", "100%", "100%", "calc((100vw - 17.5rem)/2)","calc((100vw - 17.5rem)/3)"]}
          h={["360px", "360px", "432px", "432px", "432px"]}
          ml={[0, 0, 0, -12, -12]}
        />

      </Flex>

      {/* Subtitulo e descrição promocional */}
      <Flex flexDir={['column', 'column','column', 'row', 'row']} gap={[2, 2, 2, 20, 20]} alignItems={["start", "start", "start","end", "end"]}>
        <Heading
          size={isMobile ? "sm" : "lg"}
          fontSize={['1.75rem', '1.75rem', '1.75rem', '2.5rem', '2.5rem']}
          text="Realçando a beleza que já existe em você"
          color={"eerie"}
          isHighlighted
          highlightedText={['Realçando', 'já existe']}
          textAlign={["start","start", "start", "start", "end"]}
          pr={[4, 8, 8, 8, 0]}
        />

        <Flex direction="column" gap={4} alignItems={["start", "start", "start", "end", "end"]} pb={3}>

          <Text fontSize={isMobile ? "md" : "lg"} lineHeight={isMobile ? "sm" : "lg"} textAlign={["start","start", "start", "end", "end"]} pr={[8, 8, 8, 0, 0]}>
            Descubra a arte da harmonização facial e do sorriso perfeito
            conosco, onde a beleza e a saúde se unem para transformar vidas.
          </Text>

          {isMobile ? '' : <Box h="0.5px" bgColor="dim" w={96} />}

        </Flex>

      </Flex>
    </Flex>
  )
}
