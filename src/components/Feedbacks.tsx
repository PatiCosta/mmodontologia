import { Avatar, Box, Flex, Grid, HStack, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ChatsTeardrop, Quotes, Star } from 'phosphor-react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { use, useState } from 'react'
import { carouselPics } from './helpers/carousel'
import { feedbackslist } from './helpers/feedbacks'

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

function Feedback({ feedback, patient, imageURL, rating, procedure }: { feedback: string, patient: string, imageURL: string, rating: number, procedure: string }) {
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
        <StarRating rating={rating} />
      </Flex>
      <Text fontSize="lg" lineHeight="lg">
        {feedback}
      </Text>
      <Flex alignItems="center" gap={3} justifyContent="start" w="100%">

        {imageURL == '' ?
          <Avatar size="md" name="" bgColor={'battleship'} src="https://bit.ly/broken-link" />
          :
          <Image boxSize={12} src={imageURL} borderRadius="full" alt={patient} />
        }

        <Box>
          <Text fontSize="lg" lineHeight="lg" color="battleship">
            {patient}
          </Text>
          <Text fontSize="sm" lineHeight="sm" color="dim">
            {procedure}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
/* versão anterior — sem StarRating, sem procedure:
function Feedback({ feedback, patient, imageURL }: { feedback: string, patient: string, imageURL: string }) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="space-between" px={10} pt={6} pb={8} gap={4} boxShadow="dark" h="100%" bgColor="light">
      <Quotes size={32} weight="duotone" color="#B1B1AE" />
      <Text fontSize="lg" lineHeight="lg">{feedback}</Text>
      <Flex alignItems="center" gap={3} justifyContent="start">
        {imageURL == '' ? <Avatar ... /> : <Image ... />}
        <Box><Text ...>{patient}</Text></Box>
      </Flex>
    </Flex>
  )
}
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

  const feedbacksLength = feedbackslist.length

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

      {isMobile ?

        <>
          <Flex
            onClick={() => { feedbackIndex <= 0 ? setFeedbackIndex(feedbacksLength - 1) : setFeedbackIndex(feedbackIndex - 1) }}
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

          <Feedback
            feedback={feedbackslist[feedbackIndex].feedback}
            patient={feedbackslist[feedbackIndex].patient}
            imageURL={feedbackslist[feedbackIndex].imageURL}
            rating={feedbackslist[feedbackIndex].rating}
            procedure={feedbackslist[feedbackIndex].procedure}
          />

          <Flex
            onClick={() => { feedbackIndex >= feedbacksLength - 1 ? setFeedbackIndex(0) : setFeedbackIndex(feedbackIndex + 1) }}
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
        :

        feedbackslist.map((feedback) => {
          return (

            <Feedback key={feedback.id} feedback={feedback.feedback} patient={feedback.patient} imageURL={feedback.imageURL} rating={feedback.rating} procedure={feedback.procedure} />
          )
        })

      }


    </Grid >
  )
}
