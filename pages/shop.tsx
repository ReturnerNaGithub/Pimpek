import { useContract, useNFTs } from "@thirdweb-dev/react";
import { SEXTOYS_ADDRESS } from "../const/addresses";
import { Spinner, Heading, Container,Box, Flex, SimpleGrid } from "@chakra-ui/react";
import NFT from "../Components/NFT";


export default function Shop () {
    const { contract } = useContract(SEXTOYS_ADDRESS);
    const { data:nfts } = useNFTs(contract); 
    return(
       
<Container   
    bgImage="url('./shop.png')"  
    backgroundSize="cover" 
    bgAttachment="fixed"
    bgRepeat="no-repeat"
    height="100vh" 
    width="100vw"
    maxW={"full"}>
   <Box>
    
   </Box>

<Box
>
    <Heading
display="flex" 
alignItems="center"
justifyContent="center" 
h="10vh"
w="33%"
bg="black"
ml="76px"
mb="6"
bgAttachment="fixed"
  opacity="0.8" 
  rounded={"full"}
  boxShadow="xl"
color="white"
fontSize="44px"

>NFT Sex shop :</Heading>
</Box>


{!nfts ? (
<Flex 
    h={"80vh"} 
    justifyContent={"center"} 
    alignItems={"center"}>

<Spinner />

</Flex>

) : (

    

<SimpleGrid 
rounded={"6%"}
 p={12}
  bg="black"
  opacity="0.8" 
  boxShadow="xl" 
  my={10}
  ml={12}
columns ={3} 
spacing={10}
height={540}
width={620}
justifyItems="center" 
alignItems="center"
>

    


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