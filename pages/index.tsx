

import { MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Container, Heading, Flex, Spinner, SimpleGrid, Card, Box, Text, Skeleton } from '@chakra-ui/react';
import { PIMPME_ADDRESS, SCARLET_ADDRESS, PIMP_ADDRESS, SEXTOYS_ADDRESS } from "../const/addresses";
import { ClaimScarlet } from "../Components/ClaimScarlet";
import { BigNumber, ethers } from "ethers";
import { Inventory } from "../Components/Inventory";
import { Equipped } from "../Components/Equipped";
import { useState, useEffect } from 'react';


const Home: NextPage = () => {
  

  
  const address = useAddress();

  const { contract: scarletcontract } = useContract (SCARLET_ADDRESS);
  const { contract: sextoysContract } = useContract (SEXTOYS_ADDRESS);
  const { contract: pimpmeContract } = useContract (PIMPME_ADDRESS);
  const { contract: pimptokenContract } = useContract (PIMP_ADDRESS);

const {
data: ownedScarlets,
isLoading: loadingOwnedScarlets } = useOwnedNFTs(
  scarletcontract, address
);

const { data: ownedSextoys, isLoading: loadingOwnedSextoys } = useOwnedNFTs(sextoysContract, address);

const { data: equippedSextoys } = useContractRead(
  pimpmeContract,
"getStakeInfo",
[address]

);

const { data: rewardBalance } = useContractRead( pimptokenContract, "balanceOf", [address]);

  if(!address) {

  return (

    
    
    <Container 
    
    maxW={"full"}
    bgImage="url('/ozadje.png')" 
    height="110vh" 
    backgroundSize="cover" 
    bgAttachment="fixed">
      
      
      
        
     
      
            
<Flex>
<Heading 
      color={"white"}
        ml={796}
       mt={20}
       position={"fixed"}
       fontSize="24px"
       boxShadow={
        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
      }>
              Welcome to the Polygon Blockchain game: Pimp Me 
            </Heading>

            


      </Flex>
      
     
      
    </Container>
  );
}



if (loadingOwnedScarlets) {
  return(
    <Container maxW={"1200px"}>
<Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
<Spinner />
<h1>Wetting...</h1>
</Flex>
</Container>
  );
}


if(ownedScarlets?.length === 0) {
  return (
    <Container maxW={"1200px"}>
    <ClaimScarlet />
    </Container >
  )
}

  return (

  
    <Container 
    maxW = {"2200px"} 
    bgImage="url('/ozadje.png')" 
    height="100vh" 
    backgroundSize="cover" 
    bgAttachment="fixed">
      
<SimpleGrid 
columns={2} 
spacing={60}
>



<Card p={15}
width={500}
  height={300}
  mt={12}
  bg="black"
  opacity="0.7" 
  color="white" 
  boxShadow="xl"
  my={2} >




  <Heading>Scarlet:</Heading>
  <SimpleGrid 
  opacity="none"
  columns={2} 
  spacing={5}
  
  >
<Box >
  
  {ownedScarlets?.map((nft) => (
    <div key={nft.metadata.id}>
      <MediaRenderer 
      src={nft.metadata.image}
      height="100%"
      width="100%"
      />
    </div>
  ))}
</Box>

<Box>
<Text fontSize={"24px"} fontWeight={"bold"}> PIMP Balance:</Text>
{rewardBalance && (
  <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
)}
</Box>

  </SimpleGrid>
</Card>
  <Card p={15}
  
width={600}
  height={480}
  mt={12}
  bg="black"
  opacity="0.7" 
  color="white" 
  boxShadow="xl">
<Heading 
textAlign="center"
mb={2}
 >Inventory:</Heading>
<Skeleton isLoaded={!loadingOwnedSextoys}>
  <Inventory 
  nft={ownedSextoys}
  />


</Skeleton>
  </Card>
</SimpleGrid>

<Card p={15}
width={800}
  height={450}
  mb={2}
  bg="black"
  opacity="0.7" 
  color="white" 
  boxShadow="xl" 
  my={-200}>

  <Heading  fontSize={"24px"}>Insert Sextoys and start Earning PIMP tokens</Heading>
  <SimpleGrid 
  columns={3} 
  spacing={4}
  >
    {equippedSextoys &&
    equippedSextoys[0].map((nft: BigNumber) =>(
<Equipped
key={nft.toNumber()}
tokenId={nft.toNumber()}
/>
    ))}
  </SimpleGrid>
</Card>
    </Container>
   
  
  )
};

export default Home;
