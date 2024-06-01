

import {Image,Box, Flex,Table,Thead,Tr,Th,Tbody,Td, HStack,} from '@chakra-ui/react';

export default function Lestvica() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
     bgColor={"pink.400"}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>

<Box 
h="200px"
w="700px"
ml={200}
>
  

<Box
      color={'white'}
            fontWeight={900}
            fontSize={44}
            textAlign={"center"}
            ml={20}
            mt={30}
      >
        
            Top PIMP Players:
          </Box>
          
          <Image h={"400px"}
w={"400px"}

            ml={60}
      src="https://indigo-urban-mule-142.mypinata.cloud/ipfs/QmRrTuTqhqsj45nRLSgLNJzR4UCfjLy9w7GaPY6qZ1tyS3/play%20with.png" 
      alt="Sample Image" />
      </Box>
          <HStack
         ml={6}
            mt={10}
            spacing={8}
            >
              
      
          <Table variant="simple"
          color="black"
          >
            
        <Thead
        >
          <Tr>
            <Th>Rank</Th>
            <Th>Player</Th>
            <Th>No of PIMP</Th>
          </Tr>
        </Thead>
        <Tbody
        color="black">
          <Tr>
            <Td>1.</Td>
            <Td>Returner</Td>
            <Td>12.450,33</Td>
          </Tr>
          <Tr>
            <Td>2.</Td>
            <Td>BlackAlly</Td>
            <Td>11.300,12</Td>
          </Tr>
          <Tr>
            <Td>3.</Td>
            <Td>?</Td>
            <Td>9.400,12</Td>
          </Tr>
          <Tr>
            <Td>4.</Td>
            <Td>staker</Td>
            <Td>8.200,2</Td>
          </Tr>
          <Tr>
            <Td>5.</Td>
            <Td>CoolGuy</Td>
            <Td>8.120,34</Td>
          </Tr>
          <Tr>
            <Td>6.</Td>
            <Td>0x0e20ebf9409CB204f7903d3484deBb3B88C53e73</Td>
            <Td>8.040,12</Td>
          </Tr>
          <Tr>
            <Td>7.</Td>
            <Td>0x0t70ebf9409CB204fhg03d3484deBb3B38C53228</Td>
            <Td>7.890,10</Td>
          </Tr>
          <Tr>
            <Td>8.</Td>
            <Td>Pimpek</Td>
            <Td>7.333,13</Td>
          </Tr>
          <Tr>
            <Td>9.</Td>
            <Td>0x80124D9bd37814b8A12c92610F92ae08EaB22b87</Td>
            <Td>6.790,34</Td>
          </Tr>
          <Tr>
            <Td>10.</Td>
            <Td>???</Td>
            <Td>3.309.87</Td>
          </Tr>
          <Tr>
            <Td>11.</Td>
            <Td>RudiMLN</Td>
            <Td>2.890,32</Td>
          </Tr>
          <Tr>
            <Td>12.</Td>
            <Td>*-*</Td>
            <Td>2.788,10</Td>
          </Tr>
        </Tbody>
      </Table>

      

        </HStack>
      
    </Flex>
  );
}