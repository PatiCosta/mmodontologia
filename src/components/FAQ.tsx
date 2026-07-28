import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { Heading } from './Heading'

// respostas são placeholders — a doutora precisa revisar cada uma antes de publicar
const faqItems = [
  {
    q: 'Os procedimentos doem?',
    a: 'A maioria dos procedimentos utiliza anestesia tópica ou infiltrativa, tornando o desconforto mínimo. A Dra. Marina explica cada passo antes e durante o atendimento, para que você se sinta segura o tempo todo.'
  },
  {
    q: 'Quanto tempo dura o resultado?',
    a: 'Depende do procedimento. Preenchimento labial dura em média 8 a 12 meses. Toxina botulínica, de 4 a 6 meses. Bichectomia é definitiva. Bioestimuladores duram até 2 anos. Você recebe essa informação personalizada na avaliação.'
  },
  {
    q: 'Precisa de mais de uma sessão?',
    a: 'Muitos procedimentos são resolvidos em uma única sessão (preenchimento, toxina botulínica, rinomodelação). Já bioestimuladores costumam pedir 2 a 3 sessões para o resultado completo. A Dra. define o plano ideal na sua consulta.'
  },
  {
    q: 'Como funciona a consulta de avaliação?',
    a: 'É uma conversa presencial em que a Dra. Marina examina o seu rosto, entende seus objetivos e apresenta as opções indicadas para você — com valor e expectativa de resultado. Você não sai daqui com procedimento marcado sem que faça sentido para você.'
  },
  {
    q: 'Qual o valor dos procedimentos?',
    a: 'O valor depende do procedimento e da quantidade de produto necessária para cada paciente. Chame no WhatsApp com o que você tem interesse e passamos os valores atualizados ou agendamos sua avaliação.'
  },
  {
    q: 'É seguro fazer harmonização orofacial?',
    a: 'Sim, quando realizada por profissional habilitado, com produtos aprovados pela ANVISA e em ambiente adequado. A Dra. Marina é formada pela UFSC e mantém especialização e atualização contínuas em harmonização facial.'
  }
]

// altura é medida com ResizeObserver pra funcionar em qualquer viewport;
// o Collapse do Chakra não animava a altura de forma confiável aqui (height: auto não é animável em CSS puro)
function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const update = () => setContentHeight(el.scrollHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Box borderBottom="0.5px solid" borderColor="silver" py={6}>
      <Flex
        as="button"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        onClick={onToggle}
        cursor="pointer"
        textAlign="start"
        gap={4}
      >
        <Text fontSize="lg" lineHeight="lg" fontWeight="semibold" color="eerie">
          {q}
        </Text>
        <Box
          flexShrink={0}
          color="battleship"
          transition="transform 0.35s ease-in-out"
          transform={isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}
        >
          <Plus size={24} />
        </Box>
      </Flex>
      <Box
        overflow="hidden"
        height={`${isOpen ? contentHeight : 0}px`}
        opacity={isOpen ? 1 : 0}
        transition="height 0.35s ease-in-out, opacity 0.3s ease-in-out"
      >
        <Box ref={contentRef}>
          <Text fontSize="md" lineHeight="md" color="dim" pt={4} pr={10}>
            {a}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export function FAQ() {
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Box id="#faq" mt={28} pb={28} px={[4, 8, 8, 32, 32]}>
      <Flex direction="column" alignItems="start" mb={12}>
        <Text fontSize="md" lineHeight="md" mb={1}>
          PERGUNTAS FREQUENTES
        </Text>
        <Heading
          color="battleship"
          size={isMobile ? 'md' : 'lg'}
          text="Tirando as dúvidas que travam a sua decisão"
          isHighlighted
          highlightedText={['dúvidas', 'sua decisão']}
        />
      </Flex>
      <Box>
        {faqItems.map((item, idx) => (
          <FAQItem
            key={idx}
            q={item.q}
            a={item.a}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </Box>
    </Box>
  )
}
