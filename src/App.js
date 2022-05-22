import './App.css'
import { Box, Heading, Badge, useToast } from '@chakra-ui/react'
import { Setting } from './components/Setting'
import { QuestionsLog } from './components/QuestionsLog'
import { ControlPanel } from './components/ControlPanel'
import { useQuestionList } from './useQuestionList'
import { useSetting } from './hooks/useSetting'
import { useHistory } from './hooks/useHistory'
import { ChoicePanel } from './components/ChoicePanel'
import jsCookie from 'js-cookie'
import { InfoIcon } from '@chakra-ui/icons'

function App() {
  const { showQuestionList } = useQuestionList()
  const toast = useToast()
  const questionList = showQuestionList()
  const {
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
    updateQuestionMode,
    makeSetting,
    addWordFilter,
    deleteWordFilter,
    addQuestionNum,
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
  } = useHistory()
  const history = showHistory()
  // ここからCookieを使った設定の引継ぎ
  let savedSettingDetail = showSettingDetail()
  savedSettingDetail.questionOrder = jsCookie.get('questionOrder')
  if (jsCookie.get('questionRange')) {
    savedSettingDetail.questionRange = jsCookie.get('questionRange').split(',')
  }
  if (jsCookie.get('wordFilter')) {
    savedSettingDetail.wordFilter = jsCookie.get('wordFilter').split(',')
  }

  if (savedSettingDetail !== settingDetail) {
    toast({
      title: '前回の設定を引継ぎました',
      position: 'top',
      status: 'info',
      // isClosable: true,
    })
    updateAllSettings(savedSettingDetail)
  }
  const saveSetting = (settingDetail) => {
    jsCookie.set('locale', 'ja-JP')
    jsCookie.set('questionOrder', settingDetail.questionOrder)
    jsCookie.set('questionRange', settingDetail.questionRange)
    jsCookie.set('wordFilter', settingDetail.wordFilter)
    console.log(jsCookie.get())
  }

  return (
    <>
      <Heading mt={'3'} ml="3" color="teal">
        どこでも試験対策
      </Heading>
      <Badge ml={3} mt="-3" borderRadius="full" px="2" colorScheme="teal">
        第二解剖学・組織
      </Badge>
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
          addQuestionNum={addQuestionNum}
          saveSetting={saveSetting}
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
            addQuestionNum={addQuestionNum}
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
