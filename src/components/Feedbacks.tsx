import { Avatar, Box, Flex, Grid, HStack, Icon, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ChatsTeardrop, GoogleLogo, Quotes, Star } from 'phosphor-react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Review, ReviewsResponse } from '@/pages/api/reviews'

function StarRating({ rating }: { rating: number }) {
  return (
    <HStack spacing={1}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          weight={i < rating ? 'fill' : 'regular'}
          color={i < rating ? '#F5B301' : '#B1B1AE'}
        />
      ))}
    </HStack>
  )
}

function Feedback({ review, showGoogleBadge }: { review: Review; showGoogleBadge: boolean }) {
  return (
    <Flex
      direction="column"
      alignItems="start"
      justifyContent="space-between"
      px={10}
      pt={6}
      pb={8}
      gap={4}
      boxShadow="dark"
      h="100%"
      bgColor="light"
    >
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Quotes size={32} weight="duotone" color="#B1B1AE" />
        <StarRating rating={review.rating} />
      </Flex>
      <Text fontSize="lg" lineHeight="lg" noOfLines={8}>
        {review.text}
      </Text>
      <Flex alignItems="center" gap={3} justifyContent="space-between" w="100%">
        <Flex alignItems="center" gap={3}>
          {review.authorPhotoUrl ? (
            <Image boxSize={12} src={review.authorPhotoUrl} borderRadius="full" alt={review.author} referrerPolicy="no-referrer" />
          ) : (
            <Avatar size="md" name={review.author} bgColor={'battleship'} />
          )}
          <Box>
            <Text fontSize="lg" lineHeight="lg" color="battleship">
              {review.author}
            </Text>
            <Text fontSize="sm" lineHeight="sm" color="dim">
              {review.relativeTime || review.procedure || ''}
            </Text>
          </Box>
        </Flex>
        {showGoogleBadge && (
          <GoogleLogo size={20} weight="duotone" color="#B1B1AE" />
        )}
      </Flex>
    </Flex>
  )
}
/* versão anterior — props soltas em vez de objeto Review:
function Feedback({ feedback, patient, imageURL, rating, procedure }: { feedback: string, patient: string, imageURL: string, rating: number, procedure: string }) { ... }
*/

export function Feedbacks() {

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false
  })

  const [feedbackIndex, setFeedbackIndex] = useState(0)
  const [data, setData] = useState<ReviewsResponse | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/reviews')
      .then((r) => r.json() as Promise<ReviewsResponse>)
      .then((json) => { if (!cancelled) setData(json) })
      .catch((err) => { console.error('[Feedbacks] failed to load reviews', err) })
    return () => { cancelled = true }
  }, [])

  const reviews = data?.reviews ?? []
  const feedbacksLength = reviews.length
  const showGoogleBadge = data?.source === 'google'
  const currentIndex = Math.min(feedbackIndex, Math.max(0, feedbacksLength - 1))

  return (
    <Grid
      id="#depoimentos"
      templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
      rowGap={10}
      columnGap={6}
      px={[8, 8, 8, 8, 32]}
      mt={28}
      // zIndex="dropdown"
      position="relative"
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="space-between"
        gap={8}
      >
        <Box>
          <Text fontSize="md" lineHeight="md" mb={1}>
            DEPOIMENTOS
          </Text>
          <Heading
            color="battleship"
            size={isMobile ? "md" : "lg"}
            text="O que nossos pacientes têm a dizer?"
            isHighlighted
            highlightedText={['nossos', 'pacientes', 'dizer']}
          />
        </Box>
        {data?.overallRating && data?.totalRatings ? (
          <Flex direction="column" gap={2} alignItems="start">
            <Flex alignItems="center" gap={2}>
              <Text fontSize="2xl" fontWeight="semibold" color="eerie">
                {data.overallRating.toFixed(1)}
              </Text>
              <StarRating rating={Math.round(data.overallRating)} />
            </Flex>
            <Text fontSize="sm" color="dim">
              {data.totalRatings} avaliações no Google
            </Text>
            {data.googleMapsUrl && (
              <Link
                href={data.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="sm"
                color="battleship"
                textDecoration="underline"
                _hover={{ color: 'eerie' }}
              >
                Ver todas no Google →
              </Link>
            )}
          </Flex>
        ) : null}
        <Flex alignItems="end" gap={3} w="100%">
          <ChatsTeardrop
            color="#B1B1AE"
            size={56}
            weight="duotone"
            style={{ flexShrink: '0' }}
          />
          <Box h="px" w="100%" bgColor="silver" mb={1} />
        </Flex>
      </Flex>

      {feedbacksLength === 0 ? null : isMobile ? (
        <>
          <Flex
            onClick={() => { setFeedbackIndex(currentIndex <= 0 ? feedbacksLength - 1 : currentIndex - 1) }}
            alignItems="center"
            position="absolute"
            left={["0.4rem", "0.4rem", "0.4rem", "4rem", "4rem"]}
            top={[420, 420, 264, 0, 0]}
            borderRadius="full"
            bgColor="battleship"
            _hover={{ bgColor: 'silver' }}
            transition="all 0.2s ease"
            backdropFilter="auto"
            backdropBlur="5px"
            p={[2, 2, 2, 9, 9]}
            cursor="pointer"
          >
            <Icon as={MoveLeft} boxSize={6} color="light" />
          </Flex>

          <Feedback review={reviews[currentIndex]} showGoogleBadge={showGoogleBadge} />

          <Flex
            onClick={() => { setFeedbackIndex(currentIndex >= feedbacksLength - 1 ? 0 : currentIndex + 1) }}
            alignItems="center"
            position="absolute"
            right={["0.4rem", "0.4rem", "0.4rem", "4rem", "4rem"]}
            top={[420, 420, 264, 0, 0]}
            borderRadius="full"
            bgColor="battleship"
            _hover={{ bgColor: 'silver' }}
            transition="all 0.2s ease"
            backdropFilter="auto"
            backdropBlur="5px"
            p={[2, 2, 2, 9, 9]}
            cursor="pointer"
          >
            <Icon as={MoveRight} boxSize={6} color="light" />
          </Flex>
        </>
      ) : (
        reviews.slice(0, 5).map((review) => (
          <Feedback key={review.id} review={review} showGoogleBadge={showGoogleBadge} />
        ))
      )}


    </Grid >
  )
}
