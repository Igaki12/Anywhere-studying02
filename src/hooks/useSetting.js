import { useState, useEffect } from 'react'
// 途中で設定を変更するときはuseEffectが必要？

export const useSetting = () => {
  const [settingDetail, setSettingDetail] = useState({
    isSet: false,
    mode: 'training',
    questionOrder: 'ascend',
    questionRange: ['2020本', '2018本'],
  })
  const showSettingDetail = () => {
    return settingDetail
  }
  const updateQuestionOrder = (order) => {
    let updatedSettingDetail = settingDetail
    updatedSettingDetail.questionOrder = order
    console.log('updatedQuestionOrder:' + updatedSettingDetail)
    setSettingDetail(updatedSettingDetail)
  }
  const toggleQuestionRange = (value) => {
    let toggledSettingDetail = settingDetail
    if (toggledSettingDetail.questionRange.indexOf(value) === -1) {
      toggledSettingDetail.questionRange.push(value)
    } else {
      toggledSettingDetail.questionRange = settingDetail.questionRange.filter(
        (content) => content !== value,
      )
    }
    console.log('toggledQuestionRange:' + toggledSettingDetail)
    setSettingDetail(toggledSettingDetail)
  }
  const updateQuestionMode = (value) => {
    let updatedSettingDetail = settingDetail
    updatedSettingDetail.mode = value
    console.log('updatedQuestionMode:' + value)
    setSettingDetail(updatedSettingDetail)
  }
  const makeSetting = () => {
    let updatedSettingDetail = settingDetail
    updatedSettingDetail.isSet = true
    console.log('make setting')
    setSettingDetail(updatedSettingDetail)
  }
  return {
    settingDetail,
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
    updateQuestionMode,
    makeSetting,
  }
}
