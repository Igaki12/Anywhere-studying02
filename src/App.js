import './App.css'
import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react'
import { Setting } from './components/Setting'
import { ResultBar } from './components/ResultBar'
import { QuestionsLog } from './components/QuestionsLog'
import { ControlPanel } from './components/ControlPanel'

function App() {
  const property = {
    imageUrl: '',
    imageAlt: '（エラーにより写真が表示できません。）',
    beds: 3,
    baths: 2,
    question:
      'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
    answer: '小腸粘膜上皮では...',
    reviewCount: 34,
    rating: 4,
    year: 2020,
    details: '大問1(3)',
    answerNum: 'ウ',
  }

  return (
    <>
      <Heading mt={'3'} ml="3" color="teal">
        どこでも試験対策
      </Heading>
      <Setting />
      <ResultBar />
      <QuestionsLog questionsList={property} />

      <Stack direction={'row'} m="2">
        <Button colorScheme="blue" size="md">
          ア
        </Button>
        <Text fontSize="md" color={'blue.700'} maxW="300px">
          サンプル文章１サンプル文章１サンプル文章１サンプル文章１サンプル文章１
        </Text>
      </Stack>
      <Stack direction={'row'} m="2">
        <Button colorScheme="red" size="md">
          イ
        </Button>
        <Text fontSize="md" color={'red.700'}>
          サンプル文章２
        </Text>
      </Stack>
      <Stack direction={'row'} m="2">
        <Button colorScheme="green" size="md">
          ウ
        </Button>
        <Text fontSize="md" color={'green.700'}>
          サンプル文章３
        </Text>
      </Stack>
      <Stack direction={'row'} m="2">
        <Button colorScheme="yellow" size="md">
          エ
        </Button>
        <Text fontSize="md" color={'yellow.700'}>
          サンプル文章４
        </Text>
      </Stack>

      <Box h={'80px'} width="100px"></Box>
      <ControlPanel />
    </>
  )
}
//   )
// }

export default App
