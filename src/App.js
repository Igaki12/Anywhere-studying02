import './App.css';
import { Box,Image,Badge,Heading,Text, Stack,Button, Spacer, Flex} from '@chakra-ui/react'
import {ArrowBackIcon,CheckIcon} from '@chakra-ui/icons'
import questionImg from './img/question/sample.png'
import answerImg from './img/answer/sampleAnswer.JPG'
import { Setting } from './components/Setting';


function App() {
  const property = {
    imageUrl: '',
    imageAlt: '（エラーにより写真が表示できません。）',
    beds: 3,
    baths: 2,
    question: 'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
    answer:'小腸粘膜上皮では...',
    reviewCount: 34,
    rating: 4,
    year:2020,
    details:"大問1(3)",
    answerNum:"ウ",
  }

  return (
    <>
      <Heading mt={"3"} ml="3" color="teal">どこでも試験対策</Heading>
      <Setting />
      <Flex ml={"4"} alignItems="baseline">
        <Badge  colorScheme='purple' height="100%" borderRadius={"full"}>テストモード</Badge>
        <Text fontSize='md' color={"gray.500"} ml="2">正解9  不正解1  正解率90.0%</Text>
      </Flex>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={questionImg} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {property.year}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.details}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
        >
          {property.question}
        </Box>

      </Box>
    </Box>

    <Stack direction={"row"} m="2">
    <Button colorScheme='blue' size='md'>ア</Button>
    <Text fontSize='md' color={'blue.700'} maxW="300px">サンプル文章１サンプル文章１サンプル文章１サンプル文章１サンプル文章１</Text>
    </Stack>
    <Stack direction={"row"} m="2">
    <Button colorScheme='red' size='md'>イ</Button>
    <Text fontSize='md' color={'red.700'}>サンプル文章２</Text>
    </Stack>
    <Stack direction={"row"} m="2">
    <Button colorScheme='green' size='md'>ウ</Button>
    <Text fontSize='md' color={'green.700'}>サンプル文章３</Text>
    </Stack>
    <Stack direction={"row"} m="2">
    <Button colorScheme='yellow' size='md'>エ</Button>
    <Text fontSize='md' color={'yellow.700'}>サンプル文章４</Text>
    </Stack>

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={"red.50"} pb="150px">
      <Image src={answerImg} alt={property.imageAlt} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
        <Badge variant='solid' colorScheme='red'>
    解答・解説
  </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.answerNum}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
        >
          {property.answer}
        </Box>

      </Box>
    </Box>
    

    <Stack bg={"teal"} p="2" bottom={"0"} position={"fixed"} w="100%" mt={"auto"} direction="row">
      <Button colorScheme='teal' variant='solid'>
        <ArrowBackIcon />
      </Button>
      <Spacer />
      <Button colorScheme='teal' variant='solid' minW={"200px"} letterSpacing="0.1em">
        Next
      </Button>
      <Spacer />
      <Button colorScheme='teal' variant='solid'>
        <CheckIcon />
      </Button>
    </Stack>



    </>
  )
}
//   )
// }

export default App;
