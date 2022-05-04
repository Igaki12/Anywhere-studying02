import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
import imageSample2 from './img/answer/sampleAnswer.JPG'
import ans2 from './img/answer/DSC_0188.JPG'

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
          answerImg: [ans2],
          answer: '洞様毛細血管は一般の毛細血管よりはるかに太く、血管壁には大小の窓が空いている。',
          commentary: '（肝臓：）小葉内には肝細胞索の間を洞様毛細血管（類洞）が流れ、小葉中心の中心静脈へ向かう。小さい窓は100nm以下、大きい窓は径1～3μm程度。内皮細胞のところどころではクッパー細胞という、異物を貪食して処理する細胞がある。内皮と無数の微絨毛をもつ肝細胞との間をディッセ腔という。ここには伊藤の脂肪摂取細胞があり、ビタミンAを取り込み、膠原繊維を作っている。',
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
