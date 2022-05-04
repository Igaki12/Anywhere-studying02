import { Badge,Flex,Text } from "@chakra-ui/react";

export const ResultBar = ({}) => {
  return(
    <>
          <Flex ml={"4"} alignItems="baseline">
        <Badge  colorScheme='purple' height="100%" borderRadius={"full"}>練習モード</Badge>
        <Text fontSize='md' color={"gray.500"} ml="2">現在24問目！/全60問中</Text>
      </Flex>
      <Flex ml={"4"} alignItems="baseline">
        <Badge  colorScheme='purple' height="100%" borderRadius={"full"}>テストモード</Badge>
        <Text fontSize='md' color={"gray.500"} ml="2">正解9  不正解1  正解率90.0%</Text>
      </Flex>
    </>
  )
}