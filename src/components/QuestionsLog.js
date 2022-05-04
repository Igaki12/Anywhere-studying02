import { Image, Box, Badge } from '@chakra-ui/react'
import questionImg from '../img/question/sample.png'
import answerImg from '../img/answer/sampleAnswer.JPG'

export const QuestionsLog = ({ questionList }) => {
  return (
    <ul>
      {questionList.map((group) =>
        group.groupContents.map((question, index) => (
          <>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mb={3}
              mt="3"
            >
              {question.questionImg.map((image) => (
                <Image src={image} alt="写真読み込みエラー" />
              ))}
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {group.groupTag}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {question.detailInfo}
                  </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {question.questionSentence}
                </Box>
              </Box>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={'red.50'}
              pb="20px"
            >
              {question.answerImg.map((image) => (
                <Image src={image} alt="写真読み込みエラー" />
              ))}

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge variant="solid" colorScheme="red">
                    解答
                  </Badge>
                  <Box
                    color="red.700"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize=""
                    textTransform="uppercase"
                    ml="2"
                  >
                    {question.answer ? question.answer : "解答準備中"}
                  </Box>
                </Box>
                <Badge variant="solid" colorScheme="red">
                  解説
                </Badge>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                  {question.commentary ? question.commentary : "解説準備中"}
                </Box>
              </Box>
            </Box>
          </>
        )),
      )}
      {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={questionList.questionImg} alt={questionList.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {questionList.year}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {questionList.details}
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {questionList.question}
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
        <Image src={answerImg} alt={questionList.imageAlt} />
        <Image src={questionList.answerImgUrl} alt={questionList.imageAlt} />
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
              {questionList.answerNum}
            </Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {questionList.answer}
          </Box>
        </Box>
      </Box> */}
    </ul>
  )
}
