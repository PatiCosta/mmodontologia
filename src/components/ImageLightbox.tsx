import { Box, Flex, Icon } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useReducer, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ResolvedCarouselImage } from './helpers/carousel'

// from = retângulo da miniatura na tela: a foto "sai" dali ao abrir e volta pra lá ao fechar
export type LightboxImage = ResolvedCarouselImage & {
  naturalWidth: number
  naturalHeight: number
  from: DOMRect
}

type Rect = { top: number; left: number; width: number; height: number }

const EASE = [0.4, 0, 0.2, 1] as const
const SHADOW = '0px 20px 60px rgba(0, 0, 0, 0.45)'
const NO_SHADOW = '0px 0px 0px rgba(0, 0, 0, 0)'

function toRect({ top, left, width, height }: DOMRect): Rect {
  return { top, left, width, height }
}

// Maior tamanho que cabe na tela na proporção original da foto, sem ampliar além da resolução dela
function fitToViewport(naturalWidth: number, naturalHeight: number): Rect {
  const ratio = naturalWidth / naturalHeight
  const width = Math.min(window.innerWidth * 0.92, window.innerHeight * 0.88 * ratio, naturalWidth)
  const height = width / ratio
  return { width, height, top: (window.innerHeight - height) / 2, left: (window.innerWidth - width) / 2 }
}

type ImageLightboxProps = {
  image: LightboxImage | null
  onClose: () => void
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [, rerender] = useReducer((n: number) => n + 1, 0)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!image) return

    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }

    // trava o scroll e compensa a largura da barra de rolagem pra página não "pular" atrás do overlay
    const { overflow, paddingRight } = document.body.style
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', rerender)

    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', rerender)
    }
  }, [image, onClose])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {image && (
        <Box key={image.src} position="fixed" inset={0} zIndex={1400} role="dialog" aria-modal="true" aria-label="Foto ampliada">
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{ position: 'absolute', inset: 0, background: 'rgba(32, 34, 34, 0.9)', cursor: 'zoom-out' }}
          />

          {/* Anima top/left/width/height (não scale) com object-fit: a moldura vai do quadro 1:1 até a
              proporção original revelando o que estava cortado, sem distorcer a foto no meio do caminho */}
          <motion.img
            src={image.src}
            alt="Foto ampliada"
            onClick={onClose}
            initial={{ ...toRect(image.from), boxShadow: NO_SHADOW }}
            animate={{ ...fitToViewport(image.naturalWidth, image.naturalHeight), boxShadow: SHADOW }}
            exit={{ ...toRect(image.from), boxShadow: NO_SHADOW }}
            transition={{ duration: 0.5, ease: EASE }}
            style={{
              position: 'absolute',
              objectFit: image.fit,
              objectPosition: image.position,
              cursor: 'zoom-out',
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ position: 'absolute', top: 16, right: 16 }}
          >
            <Flex
              as="button"
              type="button"
              aria-label="Fechar foto"
              onClick={onClose}
              alignItems="center"
              borderRadius="full"
              bgColor="rgba(254, 254, 254, 0.40)"
              _hover={{ bgColor: 'rgba(254, 254, 254, 0.60)' }}
              transition="all 0.2s ease"
              backdropFilter="auto"
              backdropBlur="5px"
              p={3}
              cursor="pointer"
            >
              <Icon as={X} boxSize={6} color="eerie" />
            </Flex>
          </motion.div>
        </Box>
      )}
    </AnimatePresence>,
    document.body
  )
}
