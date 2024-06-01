import {  MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useNFT } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { PIMPME_ADDRESS, SEXTOYS_ADDRESS } from "../const/addresses";
import {Text, Card, Box,Flex, Stack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
interface EquippedProps {
    tokenId: number;
};

export const Equipped = (props: EquippedProps) => {
const address = useAddress();

const { contract: pimpmeContract } = useContract(PIMPME_ADDRESS);
const { contract: sextoyContract } = useContract(SEXTOYS_ADDRESS);

const { data: nft } = useNFT(sextoyContract, props.tokenId);

const { data: claimableRewards } = useContractRead(
    pimpmeContract,
    "getStakeInfoForToken",
    [props.tokenId,address]
);

return(
    <Box
    mt={5}
    mb={5}
width={"240px"}
 height={"60px"}
  
  >
{nft && (
    <Card className={styles.equipcontainer}
    mt={1}
    p={4}
    
    >
<Flex>
<Box>
<MediaRenderer
src={nft.metadata.image}
height="90%"
width="90%"
/>
</Box>
<Stack 
spacing={5}>
   
    <Text 
    fontSize={"12px"} 
    fontWeight={"bold"}
    >
        {nft.metadata.name}</Text>
<Text
fontWeight={"bold"}
>Equipped: {ethers.utils.formatUnits(claimableRewards[0], 0)}
</Text>

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
action={(contract) => contract.call("withdraw", [props.tokenId, 1])}
className={styles.unequipbutton}
>Pull Out</Web3Button>

</Text>


</Stack>


</Flex>
<Box 
mt={15}
width="200px"
 height="160px"
 >
<Text 
fontWeight={"bold"}

> Balance:</Text>

<Box
display="flex"
 alignItems="center" 
 justifyContent="space-between"
 
>
  <Text 
fontWeight={"bold"}
fontSize="18px"
>{ethers.utils.formatUnits(claimableRewards[1], 18)} PIMP</Text>

</Box>


<Box
 h={"40px"}
 w='100%' 
 color='black'
 px={2}
 fontSize={'sm'}
 rounded={'full'}
 bg={'pink.400'}
 mt={12}
 
 boxShadow={
   '0px 1px 25px -5px rgb(66 53 25 / 18%), 0 10px 10px -5px rgb(66 53 25 / 43%)'
 }
 _hover={{
   bg: 'blue.500',
 }}
 _focus={{
   bg: 'pink.500',
 }}

 >
  <Web3Button
contractAddress={PIMPME_ADDRESS}
action={(contract) => contract.call("claimRewards", [props.tokenId])}
>Claim PIMP</Web3Button>
</Box>
</Box>

    </Card>
)}

    </Box>
)

};