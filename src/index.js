import React, {useEffect, useState, useRef} from "react";
import ReactDOM  from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Subtitle, BoxForm, BoxSubTitle, BoxDetailSales, TokensToClaim,FormSwapToken, InputBuyToken, LabelAmount, ButtonSwap, BoxTitleSwap, BinanceLogo, 
    ViewWhitePapper, DivSecondaryHero, DivSecondaryText, Box, BoxText, BoxTitle, Logo, Note, Ol}  from "./styles/global";
import web3 from './utils/web3';
import contract from './contract/contract';
import tokenContract from './contract/token';
import swapToken from './contract/swapToken';
import Web3 from 'web3';
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector';
import party from "party-js";
import CountDown from "./components/countdown";
import { SpinnerInfinity } from 'spinners-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { chains, client } from './connectors';
import { createRoot } from 'react-dom/client';
import '@rainbow-me/rainbowkit/dist/index.css';
// import {
//     RainbowKitProvider,
//     DisclaimerComponent,
//   } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";


import { getDefaultWallets, RainbowKitProvider, darkTheme} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const injected = new InjectedConnector({
  supportedChainIds: [ 56],
})

const lorem =
  "Our automated Trading Bots do the heavy lifting for you. Simply hold $DUDE token to earn periodic rewards.";

const boxData = 
  {
    id: Math.random(),
    title: "DUDE TOKEN",
    subtitle: "Earn rewards by holding",
    text: lorem,
    bgColor: "#EDA9A9"
  };

const boxDataSales = {
    title: "HOW TO PARTICIPATE",
    position: ["Enter swap amount to receive synthetic LP","Swap synthetic LP for real LP"],
    note: ["All contributions will receive a 170% bonus; meaning if you contribute $1000 you will receive $1700 worth of LP tokens to be redeem.","This liquidity can be withdrawn in full after 90 days without occurring any tax","This ensures the project starts with a healthy liquidity."]

} 


  
  const Disclaimer = ({ Text, Link }) => (
    <Text>
      By connecting your wallet, you agree to the{' '}
      <Link href="https://assets.website-files.com/624b9f6b660c8a01c2fbd34d/6273a5844c0c09798d2573fb_Defi_Dude_DAO_WP_Latest.pdf">Terms of Service</Link> All contributions will receive a 170% bonus; meaning if you contribute $1000 you will receive $1700 worth of LP tokens to be redeem.{' '}
      This liquidity can be withdrawn in full after 90 days without occurring any tax This ensures the project starts with a healthy liquidity.
     </Text>
  );

const App = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const { address, isConnected } = useAccount();
    const [loading, setLoading] = useState(false);
    const [tokenToClaim, setTokenToClaim] = useState(0);
    const [allowance, setAllowance] = useState(null);
    const [amountOfTokenForClaim, setAmountOfTokenForClaim] = useState(0);
    const [value, setValue] = useState('');
    const [timeOut, setTimeOut] = useState(0);
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const buttonRef = useRef(null);
     

    const approveToken = async() =>{
        setLoading(true);
        buttonRef.current.disabled = true;
        try{
            //pass the amount of tokens of contract
            await tokenContract.methods.approve("0x63b7fca6147e293a8e5d91ed59931614dc961362", "500000000000000000000000000").send({
                from: address
            });
            setLoading(false);
            buttonRef.current.disabled = false;
            setAllowance(await tokenContract.methods.allowance(address, "0x63b7fca6147e293a8e5d91ed59931614dc961362").call());  

        }catch(err){
            setLoading(false);
            buttonRef.current.disabled = false;
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        buttonRef.current.disabled = true;
        try{
            await contract.methods.buyTokens(address).send({
                from: address,
                value: web3.utils.toWei(value, 'ether'),
              });
      
              setAmountOfTokenForClaim(await tokenContract.methods.balanceOf(address).call());  
              setLoading(false);
              buttonRef.current.disabled = false;
        }catch(err){
            console.log(err);
            setLoading(false);
            buttonRef.current.disabled = false;
        }
        
    };
    
    const claimToken = async (claimToken) => {
        setLoading(true);
        buttonRef.current.disabled = true;
        try{
            //pass the amount of tokens of contract
            await swapToken.methods.swapTokens(claimToken).send({
                from: address
            });
            
            party.confetti(document.body,{
                count: party.variation.range(100, 200),
            });
            setAmountOfTokenForClaim(await tokenContract.methods.balanceOf(address).call());
            setLoading(false);
            buttonRef.current.disabled = false;
      }catch(err){
          setLoading(false);
          buttonRef.current.disabled = false;
      }
    }

    const handleChange = event => {
        const result = event.target.value.replace(/\+|-/g,'');
        setValue(result);
    }

    useEffect(() => {
        if(active){
            setWalletAddress(account);
        }
    }, [active]);

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
          if (localStorage?.getItem('isWalletConnected') === 'true') {
            try {
              await activate(injected)
              localStorage.setItem('isWalletConnected', true)
              setWalletAddress(account);
            } catch (ex) {
              console.log(ex)
            }
          }
        }
        const getTimeOut = async () => {
            console.log(await contract.methods.closingTime().call());
            setTimeOut(await contract.methods.closingTime().call());
        }
        connectWalletOnPageLoad();
        getTimeOut();
      }, [])

    useEffect(() => {
        const amountTokenSLP = async() => {
            setTokenToClaim(await swapToken.methods.calculateTokens(amountOfTokenForClaim).call());
        }
        const tokensToClaim = async () => {
            if(address === null)
            {
                return 0;
            }
            //pass the amount of tokens of contract
            setAmountOfTokenForClaim(await tokenContract.methods.balanceOf(address).call());  
        }
        const haveAllowance = async () => {
            setAllowance(await tokenContract.methods.allowance(address, "0x63b7fca6147e293a8e5d91ed59931614dc961362").call());  
        }
        
        if(address !== null)
        {
            tokensToClaim();
            haveAllowance();
            amountTokenSLP();
        }
        else
        {
            setWalletAddress(null);
            setAllowance(null);
            setTokenToClaim(null);
        }
    },[address, amountOfTokenForClaim, allowance]);

    return (
            <Container fuid>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                        <Col md={3}>
                            <br></br>
                            {
                                walletAddress === null ? 
                                    <ConnectButton />
                                : 
                                <div></div>    
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Container>
                            <Box>
                                <Row>
                                    <BoxTitle>{boxData.title}</BoxTitle>
                                </Row>
                                <Row>
                                    <BoxSubTitle>{boxData.subtitle}</BoxSubTitle>
                                </Row>
                                <Row>
                                    <BoxText>{boxData.text}</BoxText>
                                </Row>
                                <Row>
                                    <Logo></Logo>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div  style={{"textAlign":"center"}}>
                                            <ViewWhitePapper href="https://assets.website-files.com/624b9f6b660c8a01c2fbd34d/6273a5844c0c09798d2573fb_Defi_Dude_DAO_WP_Latest.pdf" target="_blank">
                                                <DivSecondaryHero>
                                                    <DivSecondaryText>
                                                        View Our White Papper
                                                    </DivSecondaryText>
                                                </DivSecondaryHero> 
                                            </ViewWhitePapper>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div  style={{"textAlign":"center"}}>
                                            <Subtitle>Powered by</Subtitle>
                                            <BinanceLogo  src="https://assets.website-files.com/624b9f6b660c8a01c2fbd34d/629edfa9441bbb8cebfafcaa_binance-smart-chain-logo-802A74A1DB-seeklogo.com.png"></BinanceLogo>
                                        </div>
                                    </Col>
                                    
                                </Row>
                            </Box>
                            </Container>
                        </Col>
                        <Col md={2}></Col>
                        <Col md={5}>
                            <Container>
                            <Row>
                                <Box>
                                    <Row>
                                        <BoxTitle>{boxDataSales.title}</BoxTitle>
                                    </Row>
                                    <Row>
                                        <Ol>
                                            {
                                                boxDataSales.position.map((step) =>(
                                                    <BoxDetailSales key={step}>
                                                        {step}
                                                    </BoxDetailSales>
                                                ))
                                            }
                                        </Ol>
                                    </Row>
                                </Box>
                            </Row>
                            <Row>
                                <BoxForm>
                                    {
                                        (timeOut>0)?
                                        <Row>
                                            <CountDown toend={timeOut * 1000}></CountDown>
                                        </Row>:<></>
                                    }   
                                        <Row>
                                            <Row>
                                                <Col>
                                                    <BoxTitleSwap>Buy tokens</BoxTitleSwap>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <FormSwapToken onSubmit={submitForm}>
                                                            <Row>
                                                                <LabelAmount>Number</LabelAmount>
                                                            </Row>
                                                            <Row>
                                                                <InputBuyToken value={value} type='number' onChange={handleChange} ></InputBuyToken>
                                                            </Row>
                                                            <Row>
                                                                <div style={{"textAlign":"center"}}>
                                                                    <ButtonSwap type="submit" ref={buttonRef}>
                                                                        <DivSecondaryHero>
                                                                            <DivSecondaryText>
                                                                                {
                                                                                    (loading)?
                                                                                        <SpinnerInfinity  size={30} thickness={170} speed={96} color="rgba(57, 172, 68, 0.97)" secondaryColor="rgba(57, 135, 172, 0.86)" enabled={loading} />
                                                                                    :
                                                                                    <>Swap</>
                                                                                }
                                                                            </DivSecondaryText>
                                                                        </DivSecondaryHero>
                                                                    </ButtonSwap>
                                                                </div>
                                                            </Row>
                                                        
                                                </FormSwapToken>    
                                            </Row>
                                        
                                        </Row>
                                        <Row>
                                        
                                            {
                                                allowance == 0 && amountOfTokenForClaim > 0 ?
                                                        <Row>
                                                            <div  style={{"textAlign":"center"}}>
                                                                <ButtonSwap onClick={approveToken} ref={buttonRef}>
                                                                        <DivSecondaryHero>
                                                                            <DivSecondaryText>
                                                                                {
                                                                                            (loading)?
                                                                                                <SpinnerInfinity  size={30} thickness={170} speed={96} color="rgba(57, 172, 68, 0.97)" secondaryColor="rgba(57, 135, 172, 0.86)" enabled={loading} />
                                                                                            :
                                                                                            <>Approve</>
                                                                                        }
                                                                                                                                            
                                                                            </DivSecondaryText>
                                                                        </DivSecondaryHero>
                                                                </ButtonSwap>
                                                            </div>
                                                        </Row>
                                                        
                                                :
                                                    tokenToClaim > 0 ?
                                                        <>
                                                            <Row>
                                                                <TokensToClaim>You have {web3.utils.fromWei(tokenToClaim, 'ether')} for claim</TokensToClaim>
                                                            </Row>
                                                            <Row>
                                                                <div style={{"textAlign":"center"}}>
                                                                    <ButtonSwap ref={buttonRef} onClick={() => claimToken(amountOfTokenForClaim)}>
                                                                        <DivSecondaryHero>
                                                                                <DivSecondaryText>
                                                                                {
                                                                                    (loading)?
                                                                                        <SpinnerInfinity  size={30} thickness={170} speed={96} color="rgba(57, 172, 68, 0.97)" secondaryColor="rgba(57, 135, 172, 0.86)" enabled={loading} />
                                                                                    :
                                                                                    <>Claim</>
                                                                                }
                                                                                    
                                                                            </DivSecondaryText>
                                                                        </DivSecondaryHero>
                                                                    </ButtonSwap>                        
                                                                </div>
                                                            </Row>
                                                        </>
                                                    :
                                                    <Row><Col></Col></Row>
                                            }
                                        
                                        </Row>
                                    </BoxForm>
                            </Row>
                            {/* <Row>
                                {
                                    boxDataSales.note.map((note) =>(
                                        <Note>{note}</Note>        
                                    ))
                                }
                            </Row> */}
                            </Container>
                        </Col>
                    </Row>
            </Container>
    )
}


const root = createRoot(document.querySelector("#root"));
root.render(<WagmiConfig client={client}>
    <RainbowKitProvider 
    appInfo={{
        appName: 'RainbowKit Demo',
        disclaimer: Disclaimer,
      }}
    theme={darkTheme({
        modalBackground:'#1d2d45',
        modalBackdrop:'#1d2d45'
    })} chains={chains}>
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
          <App/>
      {/* </Web3ReactProvider> */}
  </RainbowKitProvider>
  </WagmiConfig>);