import { Box,Heading,Link,Image,Text,Divider,HStack,Button,useColorModeValue,Container} from '@chakra-ui/react';


export default function Novice () {
    
    return(


    <HStack 
    
    spacing="2" 
    display="flex" 
    alignItems="center"
    bg="pink.200">
      
      <Container 
      maxW={'7xl'} 
      p="12"
      bg="pink.300"
      >
      <Heading 
      mt="8px"
      textAlign="center"
      as="h1">News: This game was made for Chainlink Hackathon 2024.
      </Heading>

      <Divider marginTop="5" />
      <Box
        marginTop={{ base: '2', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Box 
            width="100%"
            height="100%">
      <Image src="https://cdn.prod.website-files.com/5f6b7190899f41fb70882d08/661d2acf9ee617ec9e0c0503_Block%20Magic%20Stacked%20Logo%20-%20Light%20No%20Tag.svg" 
      alt="Magic Block" 
      objectFit="cover" width="60%" 
      height="100%"
      bg="black" />
    </Box>
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              If we succeed, we will continue this project
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
          Its great to be here on awsome  Block Magic Chainlink competition. So we come up with crazy idea.
           We hope that judges and players will not see this like something bad,
           but will have respect to blockchain tehnology, what are we capitable to do with it.
          </Text>
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
                  >Hackathon
                    </Button>
                   </Link>
    
        </Box>
      </Box>
      
      <Divider marginTop="5" />
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Box 
            width="100%"
            height="100%">
      <Image src="/cpimpa.png" 
      alt="Magic Block" 
      objectFit="cover" width="60%" 
      height="100%"
      bg="black" />
    </Box>
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              More about This project
            </Link>
          </Heading>
          <Heading fontSize="xl" marginTop="4">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                PimpMe is not just a game
              </Link>
            </Heading>
          <Text as="p" fontSize="md" marginTop="2">
              As the player and the owner of the NFTs, 
              players can decide where the project will move on which direction.
              Also owning erc-20 PIMP tokens you will be able to take a place in the Alfa game on Unreal Engine in 3d and
            later VR. Can you imagine what power players possess?
             Only 1 Milion PIMP tokens will ever be made and this will be belong only to players.
            </Text>
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
                  >Unreal Engine
                    </Button>
                   </Link>
        </Box>
      </Box>

      <Divider marginTop="5" />

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="5"
          position="relative"
          alignItems="center"><Image src="https://indigo-urban-mule-142.mypinata.cloud/ipfs/QmRrTuTqhqsj45nRLSgLNJzR4UCfjLy9w7GaPY6qZ1tyS3/ki%C5%A1tica.png" 
      alt="Magic Block" 
      objectFit="cover" width="60%" 
      height="100%"
       />
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Box 
            width="100%"
            height="100%">
      
    </Box>
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Toys are NFTs
            </Link>
          </Heading>
          <Heading fontSize="xl" marginTop="4">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                New NFTs on the way
              </Link>
            </Heading>
          <Text as="p" fontSize="md" marginTop="2"> 
              Players have full autonomy and can decide where to use NFTs and for what purpose.
              NFTs have different grades and different functionality.Each offering unique advantages.
              For instance, rare items exhibit a 15% increase in wettnes.
             All NFT sex toys will be written later in the Pink Book.
            </Text>
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
                  >Open Sea
                    </Button>
                   </Link>
    
        </Box>
      </Box>

      <Divider marginTop="5" />

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          ml="40"
          position="relative"
          alignItems="center"><Image src="https://indigo-urban-mule-142.mypinata.cloud/ipfs/QmRrTuTqhqsj45nRLSgLNJzR4UCfjLy9w7GaPY6qZ1tyS3/fraldo%20BG%202.png" 
      alt="Magic Block" 
      objectFit="cover" width="60%" 
      height="100%"
       />
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Box 
            width="100%"
            height="100%">
      
    </Box>
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              New Info Avatar: Need Info ?
            </Link>
          </Heading>
          <Heading fontSize="xl" marginTop="4">
             
                Fraldo will always help
              
            </Heading>
          <Text as="p" fontSize="md" marginTop="2"> 
              In the PimpMe 3-D game with the newest version Unreal Engine 5.4, avatar Fraldo will always help you-
            </Text>
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
                  >Avatars
                    </Button>
                   </Link>
        </Box>
      </Box>
      <Divider marginTop="5" />

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"><Image src="/poli.png" 
      alt="Polygon" 
      objectFit="cover" width="60%" 
      height="100%"
      bg="black" />
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            <Box 
            width="100%"
            height="100%">
      
    </Box>
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Your assets are really your assets
            </Link>
          </Heading>
          <Heading fontSize="xl" marginTop="4">
          
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                First Blockchain: Polygon
              </Link>
            </Heading>
          <Text as="p" fontSize="md" marginTop="2"> 
             Our first mision is to make player happy. 
             So we decided to use cheap and fast blockchain for playing the game.
            </Text>
    <Link href={"https://polygon.technology/"}> 
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
                  >Polygon
                    </Button>
                   </Link>
        </Box>
      </Box>
    </Container>
     
      
    </HStack>
  );
};
