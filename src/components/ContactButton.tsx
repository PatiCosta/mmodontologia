import { Button, Icon, Text, keyframes } from '@chakra-ui/react'
import { MoveRight } from 'lucide-react'

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
	40% {transform: translateX(-20px);}
	60% {transform: translateX(-10px);}
`

export function ContactButton({ isDark }: { isDark?: boolean }) {
  const bounceAnimation = `${bounce} 2s ease infinite`
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      py={6}
      px={10}
      bgColor={isDark ? 'eerie' : 'light'}
      _hover={{ transform: 'translateY(-4px)' }}
      transition="all 0.2s ease"
      borderRadius="full"
      boxShadow={isDark ? 'dark' : 'light'}
    >
      <Text color={isDark ? 'light' : 'eerie'} fontWeight="thin">
        Entre em contato conosco
      </Text>
      <Icon
        as={MoveRight}
        boxSize={5}
        color={isDark ? 'light' : 'dim'}
        animation={bounceAnimation}
      />
    </Button>
  )
}
