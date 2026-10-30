import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { ContactButton } from './ContactButton'
import { Heading } from './Heading'

// perguntas e respostas enviadas pela Marina (29/10/2026), na ordem dela
const faqItems = [
  {
    q: 'Não sei exatamente qual procedimento preciso. A avaliação é para mim?',
    a: 'Sim. Você não precisa chegar à consulta sabendo quais procedimentos deseja realizar. A avaliação é justamente o momento de entender suas queixas, seus objetivos e as características do seu rosto. A partir disso, desenvolvemos um planejamento individualizado, respeitando sua identidade e suas necessidades.'
  },
  {
    q: 'Harmonização facial significa preencher o rosto todo?',
    a: 'Não. Harmonização facial não é sinônimo de preenchimento. O tratamento pode envolver toxina botulínica, bioestimuladores de colágeno, tecnologias para a pele e, quando indicado, ácido hialurônico. O objetivo é trabalhar o rosto de maneira global, sem intervenções desnecessárias.'
  },
  {
    q: 'Tenho medo de ficar artificial. Como evitar esse resultado?',
    a: 'Essa é uma preocupação muito comum. Na Arquitetura Facial 360™, consideramos suas características, proporções e expressões antes de indicar qualquer tratamento. A proposta é valorizar sua beleza individual, com planejamento criterioso e respeito aos limites de cada rosto.'
  },
  {
    q: 'Posso começar a cuidar do meu rosto antes de apresentar sinais avançados de envelhecimento?',
    a: 'Sim. O planejamento facial também pode ter uma abordagem preventiva, considerando a qualidade da pele, a movimentação muscular e as mudanças naturais do rosto ao longo do tempo. As indicações dependem da avaliação individual.'
  },
  {
    q: 'Preciso realizar todos os procedimentos de uma só vez?',
    a: 'Não. O planejamento pode ser realizado em etapas, conforme suas prioridades, necessidades clínicas e possibilidades. Nem sempre fazer mais significa alcançar um resultado melhor.'
  },
  {
    q: 'Como funciona a primeira avaliação com a Dra. Marina?',
    a: 'A consulta começa com uma conversa sobre suas queixas, expectativas e a imagem que deseja transmitir. Em seguida, realizamos uma análise facial individualizada para identificar as possibilidades de tratamento e construir um planejamento alinhado aos seus objetivos.'
  },
  {
    q: 'Quanto custa um tratamento de harmonização facial?',
    a: 'O investimento depende dos procedimentos indicados e das necessidades de cada paciente. Como trabalhamos com planejamentos individualizados, os valores são apresentados após a avaliação, com clareza sobre as etapas propostas.'
  },
  {
    q: 'Como posso agendar minha avaliação?',
    a: 'Basta entrar em contato com nossa equipe pelo WhatsApp. Vamos orientar você sobre os horários disponíveis e os próximos passos para sua consulta.'
  },
]

/* versão anterior (CRO diagnóstico) — 6 perguntas placeholder que a Marina não aprovou:
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
*/

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
    // pb desconta o mt={-28} da Location (que sobe por cima do fim desta seção): sobra 48px/80px de respiro abaixo do CTA
    <Box id="#faq" mt={28} pb={[40, 40, 40, 48, 48]} px={[4, 8, 8, 32, 32]}>
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

      {/* fechamento pedido pela Marina: frase + CTA pro WhatsApp logo abaixo do FAQ */}
      <Flex
        mt={[12, 12, 12, 16, 16]}
        direction={['column', 'column', 'column', 'row', 'row']}
        alignItems={['start', 'start', 'start', 'center', 'center']}
        justifyContent="space-between"
        gap={[6, 6, 6, 12, 12]}
      >
        <Heading
          color="eerie"
          size={isMobile ? 'sm' : 'md'}
          text="Sua beleza não precisa seguir um padrão. Seu tratamento também não."
          isHighlighted
          // o destaque do Chakra não quebra linha: no celular divide em dois pra caber na largura
          highlightedText={isMobile ? ['Seu tratamento', 'também não'] : 'Seu tratamento também não'}
          maxW="40rem"
        />
        <Box flexShrink={0}>
          <ContactButton isDark label="Agende sua avaliação" />
        </Box>
      </Flex>
    </Box>
  )
}
