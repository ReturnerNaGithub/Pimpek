import { Container, Flex, Heading, Link , Button, Box} from '@chakra-ui/react';
import { ConnectWallet } from '@thirdweb-dev/react';


export default function Navbar() {
    return (

        <Container 
        bg={"pink.400"}
        maxW={"full"} 
        py={2}>
            <Flex 
            
            justifyContent="space-between">

<Box
bg={'pink.600'}
px={"center"}
mt={6}
fontSize={'24px'}
rounded={'20px'}
color={'white'}
boxShadow={
  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
}
_hover={{
  bg: 'blue.500',
}}

>
  <ConnectWallet />
</Box>

                <Heading
                 
             textAlign={'center'}
                mt={2} 
                fontWeight="bold">Pimp Me
                </Heading>


                <Link href={"/"}> 
                    <Button
                    bg={'pink.600'}
                    px={4}
                    mt={9}
                    fontSize={'24px'}
                    rounded={'full'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >Play
                    </Button>
                   </Link>


                   <Link 
                    href={"/shop"}>
                    <Button
                    bg={'pink.600'}
                    px={8}
                    mt={2}
                    fontSize={'24px'}
                    rounded={'full'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    
                     mx={2}>Shop
                     </Button>
                     </Link>
                    
                    
                    <Link 
                    href={"/news"}>
                    <Button
                    bg={'pink.600'}
                    px={8}
                    mt={10}
                    fontSize={'24px'}
                    rounded={'full'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    >News</Button>
                    </Link>
                    
                    
                    <Link href={"/lestvica"}>
                    <Button
                    bg={'pink.600'}
                    px={8}
                    mt={2}
                    fontSize={'24px'}
                    rounded={'full'}
                    color={'white'}
                    boxShadow={
                      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                      bg: 'blue.500',
                    }}
                    _focus={{
                      bg: 'pink.500',
                    }} mx={2}>Ranking</Button></Link>


                </Flex>
                
        </Container>
    )
};


