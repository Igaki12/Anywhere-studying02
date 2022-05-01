import './App.css';
import { Box,Image,Badge,Heading } from '@chakra-ui/react'
import questionImg from './img/question/sample.png'


function App() {
  const property = {
    imageUrl: '',
    imageAlt: '（エラーにより写真が表示できません。）',
    beds: 3,
    baths: 2,
    question: 'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
    reviewCount: 34,
    rating: 4,
    year:2020,
    details:"大問1(3)",
  }

  return (
    <>
    <Heading>どこでも試験対策</Heading>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image href={questionImg} alt={property.imageAlt} />

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
    </>

  )
}
//   )
// }

export default App;
