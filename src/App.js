import './App.css'
import { Box, Heading, Badge, Flex, Text } from '@chakra-ui/react'
import { Setting } from './components/Setting'
import { QuestionsLog } from './components/QuestionsLog'
import { ControlPanel } from './components/ControlPanel'
import { useQuestionList } from './useQuestionList'
import { useSetting } from './hooks/useSetting'
import { useHistory } from './hooks/useHistory'
import { ChoicePanel } from './components/ChoicePanel'
import jsCookie from 'js-cookie'

function App() {
  const { showQuestionList } = useQuestionList()
  const questionList = showQuestionList()
  const {
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
    updateQuestionMode,
    makeSetting,
    addWordFilter,
    deleteWordFilter,
    updateAllSettings,
  } = useSetting()
  const settingDetail = showSettingDetail()
  const {
    showHistory,
    selectQuestionList,
    nextQuestion,
    checkAnswer,
    hideAnswer,
    reviewQuestion,
    reviewAskingQuestion,
    loadHistory,
  } = useHistory()
  const history = showHistory()
  // ここからCookieを利用した設定の引継ぎ
  const saveHistory = (latestHistory) => {
    let savingHistory = latestHistory.questionNum + ','
    latestHistory.remainingQuestionList.forEach((question) => {
      savingHistory += question.id
      savingHistory += ','
    })
    savingHistory = savingHistory.substring(0, savingHistory.length - 1)
    jsCookie.set('history', savingHistory)
    console.log('saveHistory:' + jsCookie.get('history'))
  }
  return (
    <>
      <Heading mt={'3'} ml="3" color="teal" mb={0}>
        どこでも試験対策
      </Heading>
      <Flex>
        <Badge
          m={1}
          mr="0"
          mt={'0'}
          ml={3}
          borderRadius="full"
          px="2"
          colorScheme="teal"
          variant={'outline'}
        >
          Ver.0.8
        </Badge>
        <Badge m={1} mt="0" borderRadius="full" px="2" colorScheme="teal">
          第二解剖学
        </Badge>
      </Flex>

      {settingDetail.isSet ? (
        <></>
      ) : (
        <Setting
          questionList={questionList}
          showSettingDetail={showSettingDetail}
          updateQuestionOrder={updateQuestionOrder}
          toggleQuestionRange={toggleQuestionRange}
          updateQuestionMode={updateQuestionMode}
          selectQuestionList={selectQuestionList}
          nextQuestion={nextQuestion}
          makeSetting={makeSetting}
          addWordFilter={addWordFilter}
          deleteWordFilter={deleteWordFilter}
          updateAllSettings={updateAllSettings}
          loadHistory={loadHistory}
        />
      )}
      {settingDetail.isSet ? (
        <>
          {/* <ResultBar
            showHistory={showHistory}
            showSettingDetail={showSettingDetail}
          /> */}
          <QuestionsLog
            questionList={questionList}
            showHistory={showHistory}
            nextQuestion={nextQuestion}
            checkAnswer={checkAnswer}
            hideAnswer={hideAnswer}
            showSettingDetail={showSettingDetail}
            reviewQuestion={reviewQuestion}
            reviewAskingQuestion={reviewAskingQuestion}
            saveHistory={saveHistory}
          />
          {settingDetail.mode === 'practice' &&
          history[history.length - 1].askingQuestion.choices.length > 1 ? (
            <ChoicePanel />
          ) : (
            <></>
          )}
          <Box h={'200px'} width="100px"></Box>
          <ControlPanel
            showSettingDetail={showSettingDetail}
            showHistory={showHistory}
          />
        </>
      ) : (
        <></>
      )}
    </>
  )
}
//   )
// }

export default App
