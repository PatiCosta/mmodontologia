import { Box, Flex, Icon, Image, ResponsiveValue, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { Maximize2, MoveLeft, MoveRight } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { carouselPics, resolveCarouselImage, type CarouselImage, type ResolvedCarouselImage } from './helpers/carousel'
import { ImageLightbox, type LightboxImage } from './ImageLightbox'

// Todas as fotos do carrossel aparecem no mesmo quadro 1:1 (object-fit cover). O quadrado é o formato
// que menos corta na média: o antes/depois já é todo 1:1 e as fotos do espaço vão de 3:4 a 16:9.
// A foto inteira, na proporção original, abre no clique (ImageLightbox).
const MAIN_SIZE = ['80vw', '80vw', '60vw', '32rem', '35rem']
const PEEK_SIZE = ['64vw', '64vw', '48vw', '26rem', '28rem']
const EASE = [0.4, 0, 0.2, 1] as const

type GalleryProps = {
  id?: string
  kicker?: string
  title?: string
  highlightedText?: string | string[]
  images?: CarouselImage[]
  bgColor?: string
  mt?: ResponsiveValue<number | string>
  showBrandMark?: boolean
  // Quando a seção NÃO vem depois de outra com CTA sobre fundo escuro (ex: entre Me e Feedbacks),
  // o topo original fica muito vazio. compactTop remove a linha separadora e reduz padding/margens do topo.
  compactTop?: boolean
}

export function Gallery({
  id = '#galeria',
  kicker = 'GALERIA',
  title = 'Um pouco do nosso espaço e o que fazemos',
  highlightedText = ['nosso espaço', 'o que fazemos'],
  images = carouselPics,
  bgColor = 'dim',
  mt = -28,
  showBrandMark = true,
  compactTop = false,
}: GalleryProps) {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null)
  const frameRef = useRef<HTMLButtonElement>(null)


  const carouselLength = images.length
  const [carouselBarSize] = useState(100 / carouselLength)

  const prevIdx = carouselIndex <= 0 ? carouselLength - 1 : carouselIndex - 1
  const nextIdx = carouselIndex === carouselLength - 1 ? 0 : carouselIndex + 1
  const currentImg = resolveCarouselImage(images[carouselIndex])
  const prevImg = resolveCarouselImage(images[prevIdx])
  const nextImg = resolveCarouselImage(images[nextIdx])

  const goPrev = () => setCarouselIndex(prevIdx)
  const goNext = () => setCarouselIndex(nextIdx)
  const closeLightbox = useCallback(() => setLightboxImage(null), [])

  const openLightbox = () => {
    const frame = frameRef.current
    if (!frame) return
    // a foto já está carregada na tela, então o onload vem do cache praticamente na hora
    const probe = new window.Image()
    probe.onload = () => setLightboxImage({
      ...currentImg,
      naturalWidth: probe.naturalWidth,
      naturalHeight: probe.naturalHeight,
      from: frame.getBoundingClientRect(),
    })
    probe.src = currentImg.src
  }

  return (
    <Box id={id} bgColor={bgColor} pt={compactTop ? [4, 4, 4, 12, 12] : [4, 4, 4, 28, 28]} pb={28} mt={mt} >
      {!compactTop && (
        <Box h="0.5px" w="calc(100% - 16rem)" mx={[0, 0, 0, 32, 32]} mt={20} bgColor="dim" />
      )}

      <Flex alignItems="center" flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']} justifyContent="space-between" mx={[4, 4, 4, 32, 32]} mt={compactTop ? [8, 8, 8, 4, 4] : 16} gap={[12, 12, 12, 0, 0]}>
        <Flex
          direction="column"
          alignItems="start"
          pr={[2, 2, 2, 32, 12]}
          maxW="40rem"
          color="light"
        >
          <Text fontSize="md" lineHeight="md" mb={1}>
            {kicker}
          </Text>
          <Heading
            color="light"
            size={isMobile ? 'md' : 'lg'}
            text={title}
            isHighlighted
            highlightedText={highlightedText}
          />
        </Flex>
        {showBrandMark && <Image src="/assets/marca.svg" alt="marca" h="7rem" />}
      </Flex>

      {/* Foto atual centralizada; as vizinhas transbordam pros lados e são cortadas pelo overflow */}
      <Flex justifyContent="center" alignItems="center" gap={[3, 3, 4, 6, 6]} mt={20} overflow="hidden">
        <CarouselPeek image={prevImg} animKey={`prev-${carouselIndex}`} onClick={goPrev} />

        <Box position="relative" flexShrink={0} w={MAIN_SIZE} h={MAIN_SIZE}>
          <Box
            as="button"
            type="button"
            ref={frameRef}
            aria-label="Ampliar foto"
            onClick={openLightbox}
            position="relative"
            display="block"
            w="100%"
            h="100%"
            overflow="hidden"
            cursor="zoom-in"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={`main-${carouselIndex}`}
                src={currentImg.src}
                alt="gallery"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: currentImg.fit,
                  objectPosition: currentImg.position,
                }}
              />
            </AnimatePresence>

            <Flex
              position="absolute"
              bottom={3}
              right={3}
              p={2}
              borderRadius="full"
              bgColor="rgba(32, 34, 34, 0.35)"
              backdropFilter="auto"
              backdropBlur="5px"
              pointerEvents="none"
            >
              <Icon as={Maximize2} boxSize={4} color="light" />
            </Flex>
          </Box>

          <Flex
            as="button"
            type="button"
            aria-label="Foto anterior"
            onClick={goPrev}
            alignItems="center"
            position="absolute"
            top="50%"
            left={0}
            transform="translate(-50%, -50%)"
            borderRadius="full"
            bgColor="rgba(254, 254, 254, 0.40)"
            _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
            transition="all 0.2s ease"
            backdropFilter="auto"
            backdropBlur="5px"
            p={[2, 2, 2, 4, 4]}
            cursor="pointer"
          >
            <Icon as={MoveLeft} boxSize={[6, 6, 6, 7, 7]} color="eerie" />
          </Flex>

          <Flex
            as="button"
            type="button"
            aria-label="Próxima foto"
            onClick={goNext}
            alignItems="center"
            position="absolute"
            top="50%"
            right={0}
            transform="translate(50%, -50%)"
            borderRadius="full"
            bgColor="rgba(254, 254, 254, 0.40)"
            _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
            transition="all 0.2s ease"
            backdropFilter="auto"
            backdropBlur="5px"
            p={[2, 2, 2, 4, 4]}
            cursor="pointer"
          >
            <Icon as={MoveRight} boxSize={[6, 6, 6, 7, 7]} color="eerie" />
          </Flex>
        </Box>

        <CarouselPeek image={nextImg} animKey={`next-${carouselIndex}`} onClick={goNext} />
      </Flex>

      <Box
        bgColor="rgba(254, 254, 254, 0.40)"
        borderRadius="full"
        w={['80%', '80%', '80%', '38rem', '38rem']}
        mt={10}
        h={2}
        mx="auto"
      >
        <Box
          bgColor="light"
          h={2}
          borderRadius="full"
          ml={`${carouselBarSize * carouselIndex}%`}
          w={`${carouselBarSize}%`}
          transition="margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        />
      </Box>

      <ImageLightbox image={lightboxImage} onClose={closeLightbox} />
    </Box>
  )
}

type CarouselPeekProps = {
  image: ResolvedCarouselImage
  animKey: string
  onClick: () => void
}

// Fotos vizinhas (anterior/próxima) em cinza, no mesmo formato 1:1. Clicar navega; as setas
// já cobrem teclado/leitor de tela, por isso ficam fora do tab.
function CarouselPeek({ image, animKey, onClick }: CarouselPeekProps) {
  return (
    <Box
      as="button"
      type="button"
      tabIndex={-1}
      aria-hidden
      onClick={onClick}
      position="relative"
      flexShrink={0}
      w={PEEK_SIZE}
      h={PEEK_SIZE}
      overflow="hidden"
      filter="grayscale(100%)"
      cursor="pointer"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.img
          key={animKey}
          src={image.src}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: image.fit,
            objectPosition: image.position,
          }}
        />
      </AnimatePresence>
    </Box>
  )
}
