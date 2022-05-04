import {Stack,Button,Spacer} from '@chakra-ui/react';
import { ArrowBackIcon,CheckIcon } from '@chakra-ui/icons';
export const ControlPanel = ({}) => {
  return (
    <Stack
      bg={'teal'}
      p="2"
      bottom={'0'}
      position={'fixed'}
      w="100%"
      mt={'auto'}
      direction="row"
    >
      <Button colorScheme="teal" variant="solid">
        <ArrowBackIcon />
      </Button>
      <Spacer />
      <Button
        colorScheme="teal"
        variant="solid"
        minW={'200px'}
        letterSpacing="0.1em"
      >
        Next
      </Button>
      <Spacer />
      <Button colorScheme="teal" variant="solid">
        <CheckIcon />
      </Button>
    </Stack>
  )
}
