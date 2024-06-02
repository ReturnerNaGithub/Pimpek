import { MediaRenderer, Web3Button, useContract, useContractMetadata } from "@thirdweb-dev/react";
import { SCARLET_ADDRESS } from "../const/addresses";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";


export function ClaimScarlet() {
const { contract } = useContract(SCARLET_ADDRESS);
const { data: metadata } = useContractMetadata(contract);

return (

    <Container maxW={"full"}
    maxH={"full"}
    mt="12px"
    bg={"pink.400"}
    rounded={'12px'}
    >
<Flex  alignItems={"center"} justifyContent={"center"} h= {"50vh"} >
<Heading>
    Pick: Scarlet to start Pimping...
</Heading>
<Box borderRadius={"8px"} overflow={"hidden"} my={10}>
  <MediaRenderer
    src={metadata?.image}
    height="800px"
    width="800px"
/>

</Box>
<Box
bg="red"
rounded={'full'}
>

<Web3Button
contractAddress={SCARLET_ADDRESS}
action={(contract) => contract.erc1155.claim(0, 1)}
>Claim</Web3Button>

</Box>


</Flex>

    </Container>
);
}