import { Button, Icon, Link, Text } from '@chakra-ui/react'
import { MoveRight } from 'lucide-react'

export function ContactButton({ isDark }: { isDark?: boolean }) {
  
  return (
    <Link
      href='https://wa.me/5548996437416?text=Olá, acessei o site da MMOdontologia e gostaria de mais informações'
      target='_blank'
      cursor={'pointer'}
      _hover={{ textDecoration: 'none'}}
    >
      <Button
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        py={6}
        px={8}
        bgColor={isDark ? 'eerie' : 'light'}
        _hover={{ transform: 'translateY(-4px)' }}
        transition="all 0.2s ease"
        borderRadius="full"
        boxShadow={isDark ? 'dark' : 'light'}
        gap={12}
      >
        <Text color={isDark ? 'light' : 'eerie'} fontWeight="thin">
          Entre em contato conosco
        </Text>
        <Icon
          as={MoveRight}
          boxSize={5}
          color={isDark ? 'light' : 'dim'}
        />
      </Button>
    </Link>
  )
}
