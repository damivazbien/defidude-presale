import React from "react";

import { Container, Box, BoxTitle, BoxText, Logo, BoxExchange, ConnectButton, divConnect } from "./HomeStyles";

export default function Home({ boxData }) {
  return (
    <>
        <Container>
            <Box>
                <ConnectButton>Connect</ConnectButton>
            </Box>
        </Container>
        <Container>
            
        {/* <divConnect>
                
        </divConnect> */}
        <Box>
            <BoxTitle>{boxData[0].title}</BoxTitle>
            <BoxText>{boxData[0].text}</BoxText>
            <Logo></Logo>
        </Box> 

        <BoxExchange>
            <BoxTitle>{boxData[0].title}</BoxTitle>
            <BoxText>{boxData[0].text}</BoxText>
            <Logo></Logo>
        </BoxExchange>
        </Container>
    </>
    
  );
}