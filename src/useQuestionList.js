import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
import imageSample2 from './img/answer/sampleAnswer.JPG'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述
    {
      groupTag: '2020本',
      groupContents: [
        {
          detailInfo: '大問1(1)',
          questionImg: [],
          questionSentence: '洞様毛細血管について、その構造を説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問1(2)',
          questionImg: [],
          questionSentence:
            '洞様毛細血管を持つ臓器を一つ選び、その臓器の組織構造を図示して説明しなさい。(図中には洞様毛細血管を含むこと)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(1)',
          questionImg: [],
          questionSentence:
            '肺胞を構成する2種類の細胞について、その名称と細胞の特徴を答えなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(2)',
          questionImg: [],
          questionSentence: '血液空気関門について、図示して説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(1)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞を全て挙げ、それぞれについて説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(2)',
          questionImg: [imageSample1],
          questionSentence:
            'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
          answerImg: [imageSample2],
          answer:
            '小腸粘膜上皮では...........................................................................................................................',
          commentary: 'くわしい解説',
        },
      ],
    },
  ])
  const showQuestionList = () => {
    console.log(questionList)
    console.log(questionList[0].groupContents)
    return questionList
  }
  return {
    showQuestionList,
  }
}
