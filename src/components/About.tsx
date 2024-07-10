import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ContactButton } from './ContactButton'

export function About() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <Flex
      zIndex="docked"
      alignItems="end"
      position="relative"
      mt={['10vh', 20, 20, 20, 20]}
      px={[0, 8, 8, 0, 0]}
      flexDir={['column', 'column', 'column', 'row', 'row']}
    >

      {/* FOTO CADEIRA CONSULTÓRIO */}
      <Box
        bgImage="/assets/about.png"
        bgPosition={["top", "top", "center", "center", "center"]}
        bgRepeat={'no-repeat'}
        bgSize="cover"
        w={["100%", "100%", '100%', "100%", "calc(100vw - 40rem)"]}
        h={["360px", "360px", "360px", "800px", "800px"]}
      />

      <Box mt={[8, 8, 8, 20, 20]} flex="1" >
        <Flex
          direction="column"
          alignItems="start"
          gap={6}
          mb={[8, 4, 4, 16, 16]}
          pr={[8, 8, 8, 16, 32]}
          pl={[4, 4, 4, 16, 20]}
        >
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1}>
              SOBRE NÓS
            </Text>
            <Heading
              color={isMobile ? "eerie" : 'battleship'}
              size={isMobile ? "md" : 'lg'}
              text="Tudo o que você precisa em um só lugar"
              isHighlighted
              highlightedText={['Tudo', 'um só']}
            />
          </Box>
          <Text
            fontSize={isMobile ? "md" : 'lg'}
            lineHeight={isMobile ? "md" : 'lg'}
            textAlign={['justify', 'justify', 'justify', 'start', 'start']}
          >
            Aqui, você tem acesso a uma equipe multidisciplinar altamente
            qualificada que combina o conhecimento da odontologia com a
            expertise da harmonização facial, proporcionando um atendimento
            integrado e personalizado. Com tecnologia de ponta e tratamentos
            inovadores, garantimos resultados excepcionais para a sua saúde
            bucal e estética facial. Além disso, prezamos pelo conforto e
            bem-estar dos nossos pacientes, criando uma experiência acolhedora e
            satisfatória em um só lugar. Agende sua consulta e descubra como
            podemos transformar o seu sorriso e harmonizar o seu rosto de forma
            única e especial. Seja bem-vindo ao espaço onde a sua beleza e saúde
            são prioridades em um ambiente de excelência.
          </Text>
        </Flex>
        <Flex alignItems="end" pl={[4, 0, 0, 20, 20]} pr={[4, 0, 0, 32, 32]} pt={[0, 0, 0, 16, 16]} >
          <ContactButton isDark={isMobile} />
        </Flex>
      </Box>
    </Flex>
  )
}
