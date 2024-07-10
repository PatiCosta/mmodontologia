import { Flex, Grid, GridItem, HStack, Image, Link, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import { useState } from 'react'
import { ModalMenu, modalMenuProps } from './HeaderModal'

export function MenuButton({ title }: { title: string }) {

  const [isHovering, setIsHovering] = useState(false)



  return (
    <Text
      fontSize="md"
      lineHeight="md"
      fontWeight={isHovering ? 'normal' : 'light'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      _after={{
        content: '""',
        display: 'block',
        margin: 'auto',
        marginTop: '1',
        height: 'px',
        width: isHovering ? '50%' : '0',
        background: isHovering ? 'eerie' : 'transparent',
        transition: 'all 0.2s',
      }}
      cursor="pointer"
    >
      {title}
    </Text>
  )
}

export function Header() {
  const [whatsappFocus, setWhatsappFocus] = useState(false)
  const [instagramFocus, setInstagramFocus] = useState(false)

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  return (
    <>

      {isMobile ?
        // MOBILE HEADER
        <Flex w='100%' >
          <Grid
            p={4}
            w='100%'
            alignItems={'center'}
            position='relative'
            templateColumns={['', '', '', 'repeat(12,1fr)', 'repeat(12,1fr)']}
            justifyContent={'space-between'}
            
          >

            <GridItem colStart={[0, 0, 1, 1, 1]} colEnd={[0, 0, 3, 3, 3]} >

              {/* LOGO */}
              <Link href='/' _hover={{ textDecoration: 'none' }}>
                <HStack alignItems='center' pl={[0,0,8,8,8]}>
                  <Flex>
                    <Image maxW={[56,56,64,64,64]} src="/assets/logo.svg" alt="icon" borderBottom='1px solid #00000033' />
                  </Flex>
                </HStack>
              </Link>
            </GridItem>



            <ModalMenu
              whatsappFocus={whatsappFocus}
              instagramFocus={instagramFocus}
              setInstagramFocus={setInstagramFocus}
              setWhatsappFocus={setWhatsappFocus}
            />
          </Grid>
        </Flex>
        :

        // DEMAIS HEADERS
        <Flex
          mx={[0, 32, 32, 32]}
          py={6}
          borderBottom="1px solid"
          borderColor="silver"
          alignItems="center"
          justifyContent="space-between"
          position='relative'
        >
          <Image src="/assets/logo.svg" alt="icon" h={20} />


          <>
            <Flex gap={6} alignItems="center">
              <MenuButton title="SOBRE NÓS" />
              <MenuButton title="ESPECIALIZAÇÕES" />
              <MenuButton title="GALERIA" />
              <MenuButton title="DEPOIMENTOS" />
              <MenuButton title="ENDEREÇO" />
            </Flex>
            <Flex alignItems="center" gap={4}>
              <WhatsappLogo
                weight="duotone"
                size={40}
                color={whatsappFocus ? '#25D366' : '#96928B'}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setWhatsappFocus(true)}
                onMouseLeave={() => setWhatsappFocus(false)}
              />
              <InstagramLogo
                weight="duotone"
                size={40}
                color={instagramFocus ? 'transparent' : '#96928B'}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setInstagramFocus(true)}
                onMouseLeave={() => setInstagramFocus(false)}
              />
            </Flex>
          </>
        </Flex>
      }
    </>
  )
}
