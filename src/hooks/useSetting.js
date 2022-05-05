import { useState, useEffect } from 'react'
// 途中で設定を変更するときはuseEffectが必要？

export const useSetting = () => {
  const [settingDetail, setSettingDetail] = useState({
    questionOrder: 'ascend',
    questionRange: ['2020本', '2018本'],
  })
  const showSettingDetail = () => {
    return settingDetail
  }
  const updateQuestionOrder = (order) => {
    let updatedSettingDetail = [...settingDetail]
    updatedSettingDetail.questionOrder = order;
    console.log('updatedSettingDetail:' + updatedSettingDetail)
    setSettingDetail(updatedSettingDetail)
  }
  const toggleQuestionRange = (value) => {
    let toggledSettingDetail = [...settingDetail]
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
  return {
    settingDetail,
    showSettingDetail,
    updateQuestionOrder,
    toggleQuestionRange,
  };
}
