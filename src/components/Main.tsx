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
          // VIDEO NO MOBILE
          <Flex flexDir={'column'} w='100%' gap={6}>

            {/* YOUTUBE MOBILE */}
            <Flex flexDir={'column'} gap={4} boxShadow={'0px 1px 4px 0px black'} borderRadius={8}>

              <iframe width="100%" height="398px" src="https://www.youtube.com/embed/Ci4TZZ9JdG8?si=0Voyal17XJyMFi5Z&autoplay=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{ borderRadius: 8 }}></iframe>

            </Flex>
            <Flex direction="column" gap={4} alignItems={["start", "start", "start", "end", "end"]} py={2}>

              <Text fontSize={"lg"} lineHeight='md' textAlign='start' pr={[8, 8, 8, 0, 0]}>
                Descubra a arte da harmonização facial e do sorriso perfeito
                conosco, onde a beleza e a saúde se unem para transformar vidas.
              </Text>

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
            w={["100%", "100%", "100%", "60%", "60%"]}
            h="460px"
            boxShadow="dark"
            direction="column"
            justifyContent="end"

          >
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


          </Flex>
        }
        {/* CARD 2 */}
        {isMobile ?
          ''
          :
          // VIDEO 
          <>
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

              <iframe width="100%" height="640px" src="https://www.youtube.com/embed/Ci4TZZ9JdG8?si=0Voyal17XJyMFi5Z&autoplay=1&loop=1"
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

              {/* <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="SEU" />
              <Heading color="light" size="xs" text="SORRISO" />
            </Flex>
            <Flex direction="column" alignItems="center">
              <Heading color="eerie" size="xs" text="NOSSA" />
              <Heading color="light" size="xs" text="PAIXÃO" />
            </Flex> */}
            </Flex>


            <Box
              bgImage="/assets/marina_main_3.png"
              bgPosition={["right", "center", "center", "center", "center"]}
              bgRepeat={'no-repeat'}
              bgSize={["contain", "contain", "cover", "cover", "cover"]}
              position={'relative'}
              w={["100%", "100%", "100%", "calc((100vw - 17.5rem)/2)", "60%"]}
              h={["360px", "360px", "460px", "460px", "460px"]}
            >

            </Box>
          </>
        }

      </Flex>

      {/* Subtitulo e descrição promocional */}
      <Flex flexDir={['column', 'column', 'column', 'row', 'row']} gap={[2, 2, 2, 20, 20]} alignItems={["start", "start", "start", "end", "end"]} px={[2, 0, 28, 28, 28]}>
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

        {isMobile ? '' :


          <Flex direction="column" gap={4} alignItems={["start", "start", "start", "end", "end"]} pb={3}>

            <Text fontSize={isMobile ? "md" : "lg"} lineHeight={isMobile ? "sm" : "lg"} textAlign={["start", "start", "start", "end", "end"]} pr={[8, 8, 8, 0, 0]}>
              Descubra a arte da harmonização facial e do sorriso perfeito
              conosco, onde a beleza e a saúde se unem para transformar vidas.
            </Text>

          </Flex>
        }

      </Flex>
    </Flex>
  )
}
