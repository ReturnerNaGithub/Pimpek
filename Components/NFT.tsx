import { MediaRenderer, Web3Button, useActiveClaimCondition, useContract, useContractMetadata } from "@thirdweb-dev/react";
import {NFT} from "@thirdweb-dev/sdk";
import { SEXTOYS_ADDRESS } from "../const/addresses";
import {Text, Card, Button } from "@chakra-ui/react";
import {ethers} from "ethers";


type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft } : Props) {
const { contract } = useContract(SEXTOYS_ADDRESS);
const { data, isLoading } = useActiveClaimCondition(
    contract,
    nft.metadata.id,
);
    return (







<Card key={nft.metadata.id} overflow={"hidden"}>
<MediaRenderer
src={nft.metadata.image}
height="100%"
width="100%"
/>
<Text fontSize={"24px"} fontWeight={"bold"} my={2} textAlign={"center"}>{nft.metadata.name}</Text>
{!isLoading && data ?(
<Text 
textAlign={"center"} 
my={5}
fontWeight={"bold"}
>Cost: {ethers.utils.formatEther(data?.price)}{"" + data?.currencyMetadata.symbol}</Text>
):(
<Text
boxShadow={
    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
  }
  align={"center"}
>Wetting....</Text>
)}

<Button
mb={2}
h={"28px"}
w={"124px"}
m={22}
fontSize={'sm'}
rounded={'full'}
bg={'pink.400'}
boxShadow={
  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
}
_hover={{
  bg: 'blue.500',
}}
_focus={{
  bg: 'pink.500',
}}
><Web3Button

contractAddress= {SEXTOYS_ADDRESS}
action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
>Buy Here</Web3Button></Button>


</Card>
    )
};