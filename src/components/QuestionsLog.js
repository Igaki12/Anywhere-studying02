import { Image, Box, Badge } from '@chakra-ui/react'
import questionImg from '../img/question/sample.png'
import answerImg from '../img/answer/sampleAnswer.JPG'

export const QuestionsLog = ({ questionsList }) => {
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={questionImg} alt={questionsList.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {questionsList.year}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {questionsList.details}
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {questionsList.question}
          </Box>
        </Box>
      </Box>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={'red.50'}
        pb="150px"
      >
        <Image src={answerImg} alt={questionsList.imageAlt} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge variant="solid" colorScheme="red">
              解答・解説
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {questionsList.answerNum}
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {questionsList.answer}
          </Box>
        </Box>
      </Box>
    </>
  )
}
