import './App.css'
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Badge,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Setting } from './components/Setting'
import { ResultBar } from './components/ResultBar'
import { QuestionsLog } from './components/QuestionsLog'
import { ControlPanel } from './components/ControlPanel'
import { useQuestionList } from './useQuestionList'
import { useSetting } from './hooks/useSetting'
import { useHistory } from './hooks/useHistory'

function App() {
  const { showQuestionList } = useQuestionList()
  const questionList = showQuestionList()
  const {
    settingDetail,
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
    updateQuestionMode,
  } = useSetting()
  const { showHistory, selectQuestionList } = useHistory()

  return (
    <>
      <Heading mt={'3'} ml="3" color="teal">
        どこでも試験対策
      </Heading>
      <Badge ml={3} mt="-3" borderRadius="full" px="2" colorScheme="teal">
        第二解剖学・組織
      </Badge>
      <Setting
        questionList={questionList}
        showSettingDetail={showSettingDetail}
        updateQuestionOrder={updateQuestionOrder}
        toggleQuestionRange={toggleQuestionRange}
        updateQuestionMode={updateQuestionMode}
        selectQuestionList={selectQuestionList}

      />
      <ResultBar />
      <QuestionsLog questionList={questionList} />

      <Grid
        maxW={'sm'}
        borderRadius="md"
        templateColumns="repeat(4, 1fr)"
        columnGap="6"
        rowGap={4}
        p="3"
        bg={'blackAlpha.100'}
      >
        <GridItem w="100%" h="10">
          <Button colorScheme="blue" w={'100%'}>
            1
          </Button>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button colorScheme="red" w={'100%'}>
            2
          </Button>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button colorScheme="green" w={'100%'}>
            3
          </Button>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button colorScheme="yellow" w={'100%'}>
            4
          </Button>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button colorScheme="purple" w={'100%'}>
            5
          </Button>
        </GridItem>
        <GridItem w="100%" h="10">
          <Button colorScheme="pink" w={'100%'}>
            6
          </Button>
        </GridItem>
      </Grid>

      <Box h={'80px'} width="100px"></Box>
      <ControlPanel showSettingDetail={showSettingDetail} showHistory={showHistory} />
    </>
  )
}
//   )
// }

export default App
