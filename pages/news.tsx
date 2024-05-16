import { useContract, useNFTs } from "@thirdweb-dev/react";
import {Text, Stack, Button, Heading, Container, Flex, Link, SimpleGrid } from "@chakra-ui/react";


export default function News () {
    
    return(

        <Container maxW={"800px"}>
      <Flex direction={"column"} h={"100vh"} justifyContent={"top"}>
      <Heading my={"40px"}>News: This game was made for Chainlink Hackathon 2024</Heading>
      <Stack spacing={3}>
      <Text fontSize='2xl'>Wellcome players and judges to test funny game- Enjoy and don,t tell anyone.</Text>
      </Stack>
      
<Link href="/">
<Button>Back</Button>
</Link>
      </Flex>
    </Container>



);
}
