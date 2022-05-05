import { useState, useEffect } from 'react'

export const useHistory = () => {
  const [history, setHistory] = useState([
    {
      askedQuestionList: [],
      remainingQuestionList: [],
      isAnswered: false,
    },
  ])
  const showHistory = () => {
    return history
  }
  const selectQuestionList = (questionList, settingDetail) => {
    questionList.forEach((group, groupIndex) => {
      if (settingDetail.questionRange.indexOf(group.groupTag) > -1) {
        return
      }
      group.groupContents.forEach((question, questionIndex) => {
        let newRemainingQuestion = question
        newRemainingQuestion.id = groupIndex * 10000 + questionIndex
        if (
          newRemainingQuestion.askedQuestionList.findIndex(
            (question) => question.id === newRemainingQuestion.id,
          ) > -1
        ) {
          return
        }
        if (
          newRemainingQuestion.remainingQuestionList.findIndex(
            (question) => question.id === newRemainingQuestion.id,
          ) > -1
        ) {
          return
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
      })
    })
  }
  return {
    showHistory,
    selectQuestionList,
  }
}
