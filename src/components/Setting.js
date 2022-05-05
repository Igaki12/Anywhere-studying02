import {
  CheckboxGroup,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Text,
} from '@chakra-ui/react'
import { CheckCircleIcon, QuestionIcon, WarningIcon } from '@chakra-ui/icons'
import '../App.css'
export const Setting = ({
  questionList,
  showSettingDetail,
  updateQuestionOrder,
  toggleQuestionRange,
}) => {
  const settingDetail = showSettingDetail()
  const clickTest = () => {
    console.log('clicked')
  }
  return (
    <>
      <List spacing={3} p={3} bgColor="green.50" fontSize={'sm'}>
        <ListItem transitionDelay="3s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          スマートフォン・PC・タブレットでどこでも試験対策が可能！
        </ListItem>
        <ListItem transitionDelay="100s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          練習モードで解説をインプットし,テストモードでアウトプットを実践しよう
        </ListItem>
        <ListItem transitionDelay="5s" className="Headline1">
          <ListIcon as={CheckCircleIcon} color="green.500" />
          出題パターンや細かい出題範囲設定にも対応済み。
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem transitionDelay="6s" className="Headline1">
          <ListIcon as={WarningIcon} color="green.500" />
          問題・解答解説の正誤に関しては責任を持ちません
        </ListItem>
        <ListItem transitionDelay="6s" className="Headline1">
          <ListIcon as={QuestionIcon} color="green.500" />
          その他説明不足・バグ等あれば本人まで。
        </ListItem>
      </List>
      <Stack direction="row" spacing={4} align="center" m="2" ml={6}>
        <Button colorScheme="teal" variant="outline">
          練習モード
        </Button>
        <Button
          bgGradient="linear(to bottom right, green.300, green.800)"
          color={'white'}
          variant="solid"
        >
          テストモード
        </Button>
      </Stack>
      <RadioGroup
        defaultValue={settingDetail.questionOrder}
      >
        <Stack spacing={5} direction="row" p={2}>
          <Radio
            colorScheme="red"
            value="random"
            onChange={() => updateQuestionOrder('random')}
          >
            ランダム出題
          </Radio>
          <Radio
            colorScheme="green"
            value="ascend"
            onChange={() => updateQuestionOrder('ascend')}
          >
            順番通り出題
          </Radio>
        </Stack>
      </RadioGroup>
      <CheckboxGroup colorScheme="green" defaultValue={['2020本', '2018本']}>
        <Stack
          spacing={[2, 4]}
          direction={['column', 'row']}
          bg="blackAlpha.100"
          p={2}
        >
          {questionList.map((group, index) => (
            <Checkbox
              value={group.groupTag}
              key={index}
              onChange={() => toggleQuestionRange(group.groupTag)}
            >
              {group.groupTag}(
              {group.groupContents ? group.groupContents.length : '0'}問)
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <Divider orientation="horizontal" />
      <Text fontSize="xs" textColor={'blackAlpha.500'} ml="4">
        ©2022- IgaTatApps
      </Text>
    </>
  )
}
