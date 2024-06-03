import { Box, Flex, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ContactButton } from './ContactButton'

export function About() {
  return (
    <Flex alignItems="end" mt={20} zIndex="docked" position="relative">
      <Box
        bgImage="/assets/about.png"
        bgPosition="center"
        bgSize="cover"
        w="calc(100vw - 40rem)"
        h="800px"
      />
      <Box mt={20} flex="1">
        <Flex
          direction="column"
          alignItems="start"
          gap={6}
          mb={16}
          pr={32}
          pl={20}
        >
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1}>
              SOBRE NÓS
            </Text>
            <Heading
              color="battleship"
              size="lg"
              text="Tudo o que você precisa em um só lugar"
              isHighlighted
              highlightedText={['Tudo', 'um só']}
            />
          </Box>
          <Text fontSize="lg" lineHeight="lg">
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
        <Flex alignItems="end" pl={20} pr={32} pt={16}>
          <ContactButton />
        </Flex>
      </Box>
    </Flex>
  )
}
