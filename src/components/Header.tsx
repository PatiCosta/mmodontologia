import { Flex, Image, Text } from '@chakra-ui/react'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import { useState } from 'react'

function MenuButton({ title }: { title: string }) {
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

  return (
    <Flex
      mx={32}
      py={6}
      borderBottom="1px solid"
      borderColor="silver"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src="/assets/logo.svg" alt="icon" h={20} />
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
    </Flex>
  )
}
