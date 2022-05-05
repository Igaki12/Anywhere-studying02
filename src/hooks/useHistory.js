import { useState, useEffect } from 'react'

export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      askedQuestionList: [],
      askingQuestion: {},
      remainingQuestionList: [],
      isAnswered: false,
    },
  ])
  const showHistory = () => {
    return history
  }
  const selectQuestionList = (questionList, settingDetail) => {
    let newHistory = history[history.length - 1]
    newHistory.remainingQuestionList = []
    questionList.forEach((group, groupIndex) => {
      console.log(
        group.groupTag +
          'のsettingDetail.questionRange.indexOf(group.groupTag):' +
          settingDetail.questionRange.indexOf(group.groupTag),
      )
      if (settingDetail.questionRange.indexOf(group.groupTag) === -1) {
        return
      }
      group.groupContents.forEach((question, questionIndex) => {
        let newRemainingQuestion = question
        newRemainingQuestion.id = groupIndex * 10000 + questionIndex
        newRemainingQuestion.groupTag = group.groupTag

        if (newRemainingQuestion.askedQuestionList) {
          console.log(
            question.questionSentence +
              'のnewRemainingQuestion.askedQuestionList.findIndex' +
              newRemainingQuestion.askedQuestionList,
          )
          if (
            newRemainingQuestion.askedQuestionList.findIndex(
              (question) => question.id === newRemainingQuestion.id,
            ) > -1
          ) {
            return
          }
        } else {
          newRemainingQuestion.askedQuestionList = []
        }

        if (newRemainingQuestion.remainingQuestionList) {
          if (
            newRemainingQuestion.remainingQuestionList.findIndex(
              (question) => question.id === newRemainingQuestion.id,
            ) > -1
          ) {
            return
          }
        } else {
          newRemainingQuestion.remainingQuestionList = []
        }

        // 検索機能はここに追加する。検索単語を配列にして、該当Questionになんの配列アイテムも見つからなかった場合はreturnで省く
        if (newRemainingQuestion.choices) {
          let choiceList = [...question.choices]
          newRemainingQuestion.randomizedChoices = []
          for (let i = 0; i < question.choices.length; i++) {
            newRemainingQuestion.randomizedChoices.push(
              choiceList.splice(
                Math.floor(Math.random() * choiceList.length),
                1,
              ),
            )
          }
        }
        console.log(newRemainingQuestion)
        newHistory.remainingQuestionList.push(newRemainingQuestion)
      })
    })
    setHistory([...history, newHistory])
  }
  const nextQuestion = (settingDetail) => {
    if (settingDetail.questionOrder === 'ascend') {
      let newHistory = history[history.length - 1]
      if (newHistory.askingQuestion) {
        newHistory.askedQuestionList = [
          ...history[history.length - 1].askedQuestionList,
          newHistory.askingQuestion,
        ]
      }
      newHistory.askingQuestion = {}
      function compareFun(QListA, QListB) {
        return QListA.id - QListB.id
      }
      if (newHistory.remainingQuestionList.length > 0) {
        newHistory.remainingQuestionList.sort(compareFun)
        console.log(
          'RemainingQuestionList:' + newHistory.remainingQuestionList.length,
        )
        // newHistory.askedQuestionList = [
        //   ...history[history.length - 1].askedQuestionList,
        //   newHistory.remainingQuestionList[0],
        // ]
        newHistory.askingQuestion = newHistory.remainingQuestionList[0]
        console.log(newHistory.remainingQuestionList[0])
        newHistory.remainingQuestionList.shift()
        newHistory.isAnswered = false
        setHistory([...history, newHistory])
        console.log('nextQuestion:')
        console.log(history)
      }
    }
  }
  const checkAnswer = () => {
    let newHistory = history[history.length - 1]
    newHistory.isAnswered = true
    setHistory([...history, newHistory])
    console.log('checkAnswer')
  }
  const hideAnswer = () => {
    let newHistory = history[history.length - 1]
    newHistory.isAnswered = false
    setHistory([...history, newHistory])
  }
  return {
    history,
    showHistory,
    selectQuestionList,
    nextQuestion,
    checkAnswer,
    hideAnswer,
  }
}
