import { Button, Flex, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Flex w={"100vw"} h={"100vh"} direction={"column"} justify={"center"} align={"center"}>
        <Text fz={"h1"}>Owncast Live Chat</Text>
        <Button>Loading...</Button>
      </Flex>
    </>
  )
}
