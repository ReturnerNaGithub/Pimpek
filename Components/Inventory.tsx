import { MediaRenderer, Web3Button, useAddress, useContract} from "@thirdweb-dev/react";
import {NFT} from "@thirdweb-dev/sdk";
import { PIMPME_ADDRESS, SEXTOYS_ADDRESS } from "../const/addresses";
import {Text, Card, Box, SimpleGrid, Button, Stack, Link } from "@chakra-ui/react";

type Props = {
    nft: NFT[] | undefined;
};

export function Inventory({ nft }: Props ) {
const address = useAddress();
const { contract: sextoysContract } = useContract(SEXTOYS_ADDRESS);
const { contract: pimpmeContract } = useContract(PIMPME_ADDRESS);
   
async function stakeNFT(id: string) {
    if (!address){
        return;
    }
    
const isApproved = await sextoysContract?.erc1155.isApproved(
    address,
    PIMPME_ADDRESS,
);

if (!isApproved) {
    await sextoysContract?.erc1155.setApprovalForAll(
        PIMPME_ADDRESS,
        true,

    );
}
await pimpmeContract?.call("stake", [id, 1]);

};

if(nft?.length === 0) {
    return (

<Box>
<Text>No sex toys.</Text>
<Link
href="/shop"
>
<Button
px={4}
rounded={'full'}
h={"62px"}
bg={'pink.400'}
fontSize={"22px"}
mt={12}
ml={182}

boxShadow={
  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
}
_hover={{
  bg: 'blue.500',
}}
_focus={{
  bg: 'pink.500',
}}>

Buy sex toys</Button>

</Link>


</Box>

    )
}

return (

<SimpleGrid 
columns={3} 
spacing={4}

>
{nft?.map((nft) => (
<Card key={nft.metadata.id} p={15}>
<Stack alignItems={"center"}>
<MediaRenderer
src={nft.metadata.image}
height="100%"
width="100%"
/>
<Text fontWeight="bold"  
      shadow="lg"         
   >{nft.metadata.name}</Text>

<Text
bg={"pink.400"}
rounded={'full'}
 _hover={{
  bg: 'blue.500'
}}
mt={10}
>

<Web3Button
contractAddress={PIMPME_ADDRESS}
action={() => stakeNFT(nft.metadata.id)}
>Insert</Web3Button>

</Text>



</Stack>


</Card>
))}

</SimpleGrid>

    );
};