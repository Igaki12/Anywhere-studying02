import { Stack, Button, Spacer } from '@chakra-ui/react'
import { ArrowBackIcon, CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'
export const ControlPanel = ({}) => {
  return (
    <Stack
      direction="column"
      spacing={4}
      align="center"
      position={'fixed'}
      bottom="5"
      right={"5"}
      alignItems={'end'}
    >
      <Button colorScheme="teal" variant="outline" borderRadius={'full'}>
        <ChevronDownIcon />
      </Button>
    </Stack>

    // <Stack
    //   bg={'teal'}
    //   p="2"
    //   bottom={'0'}
    //   position={'fixed'}
    //   w="100%"
    //   mt={'auto'}
    //   direction="row"
    // >
    //   <Button colorScheme="teal" variant="solid">
    //     <ArrowBackIcon />
    //   </Button>
    //   <Spacer />
    //   <Button
    //     colorScheme="teal"
    //     variant="solid"
    //     minW={'150px'}
    //     letterSpacing="0.1em"
    //   >
    //     Next
    //   </Button>
    //   <Spacer />
    //   <Button colorScheme="teal" variant="solid">
    //     <CheckIcon />
    //   </Button>
    // </Stack>
  )
}
