import {
  Input,
  IconButton,
  Flex,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'

export const SearchWord = ({
  addWordFilter,
  deleteWordFilter,
  showSettingDetail,
}) => {
  const [predictionText, setPredictionText] = useState()
  const settingDetail = showSettingDetail()
  const inputEl = useRef(null)
  const addWordFilterTag = () => {
    if (inputEl.current.value === '') return
    // ここに検索予測が０なら中止するコードを追加
    addWordFilter(inputEl.current.value)
    inputEl.current.value = ''
  }
  return (
    <>
      <Text
        fontSize="sm"
        pl="4"
        pr="4"
        maxW="sm"
        textAlign={'center'}
        mt="4"
        color={'white'}
        bgColor={'green.800'}
        borderRadius="full"
      >
        {predictionText}
      </Text>
      <Flex m={2} mt="1" pr={3} maxW={'sm'}>
        <Input
          focusBorderColor="teal"
          placeholder="キーワードを設定しさらに絞り込む"
          onFocus={() => setPredictionText('ここに検索予測が表示されます')}
          // onBlur={() => setPredictionText()}
          ref={inputEl}
        />
        <IconButton
          ml={2}
          variant="outline"
          colorScheme="teal"
          aria-label="Search database"
          icon={<AddIcon />}
          onClick={() => {
            addWordFilterTag()
            setPredictionText()
          }}
        />
      </Flex>
      <HStack spacing={1} m="3" mt={-1}>
        {settingDetail.wordFilter.map((word, index) => (
          <Tag
            size={'lg'}
            key={'lg'}
            borderRadius="full"
            variant="solid"
            colorScheme="teal"
          >
            <TagLabel key={index}>{word}</TagLabel>
            <TagCloseButton
              key={index}
              onClick={() => {
                deleteWordFilter(index)
                setPredictionText(`${word}タグが消去されました`)
              }}
            />
          </Tag>
        ))}
      </HStack>
    </>
  )
}
