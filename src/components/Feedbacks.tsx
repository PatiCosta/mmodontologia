import { Avatar, Box, Flex, Grid, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Heading } from './Heading'
import { ChatsTeardrop, Quotes } from 'phosphor-react'

import { MoveLeft, MoveRight } from 'lucide-react'
import { use, useState } from 'react'
import { carouselPics } from './helpers/carousel'
import { feedbackslist } from './helpers/feedbacks'

function Feedback({ feedback, patient, imageURL }: { feedback: string, patient: string, imageURL: string }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      px={10}
      pt={6}
      pb={8}
      gap={4}
      boxShadow="dark"
      h="100%"
      bgColor="light"
    >
      <Quotes size={32} weight="duotone" color="#B1B1AE" />
      <Text fontSize="lg" lineHeight="lg">
        {feedback}
      </Text>
      <Flex alignItems="center" gap={3} justifyContent="start">

        {imageURL == '' ?
          <Avatar size="md" name="" bgColor={'battleship'} src="https://bit.ly/broken-link" />
          :
          <Image boxSize={12} src={imageURL} />
        }

        <Box>
          <Text fontSize="lg" lineHeight="lg" color="battleship">
            {patient}
          </Text>
          {/* <Text fontSize="md" lineHeight="md" color="eerie">
            {imageURL}
          </Text> */}
        </Box>
      </Flex>
    </Flex>
  )
}

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
      zIndex="dropdown"
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

            <Feedback key={feedback.id} feedback={feedback.feedback} patient={feedback.patient} imageURL={feedback.imageURL} />
          )
        })

      }


    </Grid >
  )
}
