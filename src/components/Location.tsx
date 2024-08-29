import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { Heading } from './Heading'
import { BsTelephone, BsTelephoneFill } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'

export function Location() {
  return (
    <Box id="#endereço" bgColor="dim" pt={28} mt={-28}>
      <Flex
        alignItems="stretch"
        gap={10}
        mt={28}
        pr={[4, 4, 4, 8, 32]}
        pl={[4, 4, 4, 8, 32]}
        flexDir={['column', 'column', 'column', 'row', 'row']}
      >

        <Flex
          direction="column"
          alignItems="start"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize="md" lineHeight="md" mb={1} color="light">
              ENDEREÇO
            </Text>
            <Heading
              color="light"
              size="lg"
              text="Onde você pode nos encontrar"
              isHighlighted
              highlightedText={['Onde', 'encontrar']}
            />
          </Box>

          <Flex flexDir={'column'} gap={2}>

            <Text fontSize="lg" lineHeight="lg" color="light">
              Hantei Office Building
            </Text>
            <Text fontSize="lg" lineHeight="lg" color="light">
              Rua Crispim Mira, 110, Florianópolis, Santa Catarina, 88020-540 - Sala 1104 - Bloco B
            </Text>

            <Flex fontSize="lg" lineHeight="lg" color="light">
              <Link
                href="https://wa.me/+5548999600383?text=Olá, acessei o site da MMOdontologia e gostaria de mais informações'"
                _hover={{ textDecoration: 'none', color: 'pink.200', transition: '300ms', borderColor: 'pink.200' }}
                cursor={'pointer'}
                target='_blank'
                isExternal
              >
                <Flex alignItems={'center'} gap={2}>

                  <RiWhatsappFill size={20} />
                  <Text> (48) 999600383 </Text>
                </Flex>
              </Link>
            </Flex>

            <Flex fontSize="lg" lineHeight="lg" color="light">
              <Link
                href={'tel:+554832493276'}
                _hover={{ textDecoration: 'none', color: 'pink.200', transition: '300ms', borderColor: 'pink.200' }}
                cursor={'pointer'}
              >
                <Flex alignItems={'center'} gap={2}>
                  <BsTelephoneFill size={20} color={'blue.500'} />
                  <Text>(48) 3249-3276</Text>
                </Flex>
              </Link>
            </Flex>

          </Flex>
        </Flex>
        <Box
          w={[
            "100%",
            "100%",
            "100%",
            "calc(100vw - 8rem - ((100vw - 16rem - 3rem)/3))",
            "calc(100vw - 8rem - ((100vw - 16rem - 3rem)/3))"
          ]}
          h={96}
        >

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4705.517903735974!2d-48.5447785!3d-27.592138499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383c3ecc4591%3A0xc133c41ceab42d40!2sR.%20Crispim%20Mira%2C%20110%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088020-540!5e1!3m2!1spt-BR!2sbr!4v1723499731104!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" />
        </Box>
      </Flex>
      <Box h="0.5px" bgColor="dim" w="calc(100vw - 16rem)" mx="auto" mt={28} />
    </Box>
  )
}
