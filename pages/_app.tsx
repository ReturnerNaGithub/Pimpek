import Navbar from "../Components/NavBar";

import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider} from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Polygon}>
      <ChakraProvider> 
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
      
    </ThirdwebProvider>
  );
}

export default MyApp;
