import { ConnectWallet, MediaRenderer, useAddress, useContract, useContractRead, useOwnedNFTs } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Container, Heading, Flex, Spinner, SimpleGrid, Card, Box, Text, Skeleton } from '@chakra-ui/react';
import { PIMPME_ADDRESS, SCARLET_ADDRESS, PIMP_ADDRESS, SEXTOYS_ADDRESS } from "../const/addresses";
import { ClaimScarlet } from "../Components/ClaimScarlet";
import { BigNumber, ethers } from "ethers";
import { Inventory } from "../Components/Inventory";
import { Equipped } from "../Components/Equipped";


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
    <Container maxW={"1200px"}>
      <Flex direction={"column"} h={"100vh"} justifyContent={"center"}>
      <Heading my={"40px"}>Welcome to Game: Pimp Me</Heading>
      <ConnectWallet />
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
  
    <Container maxW = {"1200px"}>
<SimpleGrid columns={2} spacing={10} >
<Card p={5}>
  <Heading>Scarlet:</Heading>
  <SimpleGrid columns={2} spacing={10}>
<Box>
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
<Text fontSize={"small"} fontWeight={"bold"}> PIMP Balance:</Text>
{rewardBalance && (
  <p>{ethers.utils.formatUnits(rewardBalance, 18)}</p>
)}
</Box>

  </SimpleGrid>
</Card>
  <Card p={5}>
<Heading>Inventory:</Heading>
<Skeleton isLoaded={!loadingOwnedSextoys}>
  <Inventory 
  nft={ownedSextoys}
  />


</Skeleton>
  </Card>
</SimpleGrid>

<Card p={5} my={10}>
  <Heading mb={"20px"}>Insert Sextoys and start Earning PIMP tokens</Heading>
  <SimpleGrid columns={3} spacing={10}>
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
