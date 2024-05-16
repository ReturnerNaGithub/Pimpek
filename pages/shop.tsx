import { NFTCollection, useContract, useNFTs } from "@thirdweb-dev/react";
import { SEXTOYS_ADDRESS } from "../const/addresses";
import {Text, Spinner, Button,Heading, Container, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import NFT from "../Components/NFT";

export default function Shop () {
    const { contract } = useContract(SEXTOYS_ADDRESS);
    const { data:nfts } = useNFTs(contract); 
    return(
<Container maxW={"1200px"}>
<Flex direction ={"row"} justifyContent={"space-between"} alignItems={"center"}>
<Link
href="/"
>
<Button>Back</Button>
</Link>

</Flex> 
<Heading mt={"40px"}>Sex toy Shop</Heading>
<Text bg={"red.100"} textAlign={"center"} mt={"40px"} fontWeight={"bold"} >Purchase sex toys with PIMP token and start wetting your pussy.</Text>
{!nfts ? (
<Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
<Spinner />

</Flex>
) : (
<SimpleGrid columns ={3} spacing={10}>
{nfts?.map((nftItem) =>(
    <NFT
    key={nftItem.metadata.id}
    nft={nftItem}
    />
))}

</SimpleGrid>
)}
</Container>
    )
}