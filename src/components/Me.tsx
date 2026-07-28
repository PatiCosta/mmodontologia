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
            A Dra. Marina é apaixonada por realçar a beleza natural de cada
            paciente através da Harmonização Orofacial. Formada pela
            Universidade Federal de Santa Catarina, construiu uma carreira
            sólida com foco em técnicas que valorizam a individualidade e
            entregam resultados naturais.
            <br></br> <br></br>
            Seu currículo inclui especializações e cursos voltados à harmonização
            facial e estética, com atualização constante nas técnicas mais
            modernas da área. A dedicação em compreender o que cada paciente
            deseja é a base do seu atendimento personalizado.
            <br></br> <br></br>
            Com sensibilidade estética e mão leve, a Dra. Marina se dedica a
            oferecer resultados harmônicos, sempre atenta às expectativas e à
            individualidade de cada rosto.
          </Text>
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
        <Flex alignItems="end" pt={16}>
          <ContactButton isDark />
        </Flex>
      </Box>
    </Flex>
  )
}
