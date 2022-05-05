import { Image, Box, Badge, Button } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

export const QuestionsLog = ({ questionList }) => {
  return (
    <>
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
                key={index + 'QuestionBox'}
              >
                {question.questionImg.map((image, imageNum) => (
                  <Image
                    src={image}
                    alt="写真読み込みエラー"
                    key={index + imageNum + 'QuestionImage'}
                  />
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
                key={index + 'AnswerBox'}
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
                      {question.answer ? question.answer : '解答準備中'}
                    </Box>
                  </Box>
                  <Badge variant="solid" colorScheme="red">
                    解説
                  </Badge>
                  <Box mt="1" as="h4" lineHeight="tight">
                    {question.commentary ? question.commentary : ''}
                  </Box>
                </Box>
              </Box>
            </>
          )),
        )}
      </ul>
      <Button
        m={1}
        rightIcon={<ArrowDownIcon />}
        colorScheme="teal"
        variant={'solid'}
      >
        次の問題へ
      </Button>
      <Button
        m={1}
        rightIcon={<ArrowDownIcon />}
        colorScheme="red"
        variant={'outline'}
      >
        解答をみる
      </Button>
    </>
  )
}
