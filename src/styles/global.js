import styled, { createGlobalStyle, keyframes}  from "styled-components";
import px2vw from "../utils/px2vw";
import LogoSrc from '../assets/dude.svg'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (max-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (max-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const floatingAnimation = keyframes`
	0% { transform: translate(0, 0px); }
	50% { transform: translate(0, 15px); }
	100% { transform: translate(0, -0px); }
`;

export const Logo = styled.div`
    background-color: ${props => props.bgColor};
    background-image: url(${LogoSrc});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    animation-name: ${floatingAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  
    
    @media (max-width: 768px) {
      width: ${px2vw(1400)};
      min-height: ${px2vw(1100)};
  }

    @media (min-width: 1024px) {
        width: ${px2vw(350)};
        min-height: ${px2vw(300)};
    }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  margin-top:10%;


  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    
  }
`;




export const BoxTitle = styled.div`
  color: #fff;
  font-size: 2.2rem;
  font-family: Inter,sans-serif;
  line-height:1.2;
  text-align: center;
  font-weight:600;
  


  @media(max-width:400px){
    font-size: 2.5rem;
    margin-top: 10px;
  }
`;

export const BoxSubTitle = styled.div`
  color: #fff;
  font-size: 3rem;
  font-family: Inter,sans-serif;
  line-height:1.2;
  text-align: center;
  font-weight:600;
  

  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media(max-width:400px){
    font-size: 2em;
    margin-top: 10px;
  }
`;

export const Note = styled.p`
  font-size: 1.3rem;
  font-family: Inter,sans-serif;
  color: #f3d81bf7;
  font-weight:600;
  line-height:1.2;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media(max-width:460px){
    font-size: 1rem;
    margin-top: 10px;
  }
`;

export const Ol = styled.ol`
  margin-left:25%; 
  margin-right:25%; 
  padding-right:0;

  @media(max-width:460px){
    margin-left:5%; 
    margin-right:5%; 
    padding-right:0;
  }
`;

export const BoxDetailSales = styled.li`
  font-size: 1rem;
  font-family: Inter,sans-serif;
  color: #f3d81bf7;
  font-weight:600;
  line-height:1.2;
  

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media(max-width:460px){
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

export const BoxText = styled.div`
  margin-top: ${px2vw(10)};
  color: hsla(0,0%,100%,.75);
  font-size: 1.2rem;
  line-height:1.4;
  letter-spacing: 1.5px;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
  @media(max-width:460px){
    font-size: 1rem;
    padding: 5%;
  }
`;

export const BoxExchange = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;
  border-color: linear-gradient(135deg,#ab69ff,#14c4dc 67%,#14c4dc 0,#00fc9a);
  border-style: solid;
  content-align: center;
  

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitleSwap = styled.h3`
  color: #fff;
  text-align:center;
  font-size: 3.2rem;
  font-family: Inter,sans-serif;
  line-height:1.2;
  font-weight:600;
  text-align:center;
  padding: 1.5%;
  
  
  @media (min-width: 1024px) {
    font-size: 2.7rem;
  }

  @media (max-width: 460px) {
    font-size: 2rem; 
  }
`;

export const TokensToClaim = styled.h3`
  color: #fff;
  text-align:center;
  font-size: 2.2rem;
  font-family: Inter,sans-serif;
  line-height:1.2;
  font-weight:600;
  text-align:center;
  padding: 1.5%;
  margin-top: 5%;

  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }

  @media (max-width: 460px) {
    font-size: 1.2rem; 
  }
`;

export const divConnect = styled.div`
  position:relative;
  width:500px;
  height:500px;
  background:red;
`;


export const ConnectButton = styled.button`
  height:5%;
  width:10%;
  margin-top:1%;
  float:right !important;
  position:absolute;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: transparent;
  background-image: linear-gradient(135deg,#00fc9a,#29debd 34%,#14c4dc 67%,#ab69ff);
  transition: .2s,background-color 1s;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  @media (max-width: 460px) {
    width:43%;
    display: center;
    margin-bottom: 10px;
  }

`;

export const ViewWhitePapper = styled.a`
    margin-top: ${px2vw(15)};
    padding: 2px;
    justify-content: flex-end;
    align-items:center;
    border-radius: 30px;
    background-image: linear-gradient(135deg,#00fc9a,#29debd 34%,#14c4dc 67%,#ab69ff);
    transition: backgroud-color 1s,.2s;
    color: #fff;
    text-align:center;
    font-size: inherit;
    background-color: transparent;
    text-decoration: inherit;
    max-width: 100%;
    display: inline-block;
    
    &:-webkit-any-link {
      cursor: pointer;
      text-decoration: underline;
    }

    @media (max-width: 460px) {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left:15%;
    }

`;

export const DivSecondaryHero = styled.div`

    padding: 0.625rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #111e32;
    display:block;
`;

export const DivSecondaryText= styled.div`
    background-image: linear-gradient(127deg,#00fc9a,#29debd 33%,#14c4dc 66%,#ab69ff);
    font-family: Inter,sans-serif;
    font-weight: 700;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;  
`;

export const Subtitle = styled.div`
  margin-top:2%;  
  color: hsla(0,0%,100%,.75);
  font-weight: 800;

  
  @media (max-width: 460px) {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:15%;
  }
`;

export const BinanceLogo = styled.img`
    margin-top:2%;
    width:12rem;
    border:0;
    vertical-align: middle;
    display: inline-block;
    max-width:100%;

    @media(max-width:300px){
      margin-left:20%;
    }
    @media (max-width: 460px) {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left:15%;
    }
`;

export const ButtonSwap = styled.button`
    margin-top: 2%;
    padding: 2px;
    border-radius: 30px;
    background-image: linear-gradient(135deg,#00fc9a,#29debd 34%,#14c4dc 67%,#ab69ff);
    transition: backgroud-color 1s,.2s;
    color: #fff;
    text-align:center;
    font-size: inherit;
    background-color: transparent;
    text-decoration: inherit;
    width: 30%;
    
    
    
    &:-webkit-any-link {
      cursor: pointer;
      text-decoration: underline;
    }

  `;

export const FormSwapToken = styled.form`
    margin-top: 10px;

`;

export const LabelAmount = styled.label`
    margin-top: 2%;
    color: #fff;
    font-size: 1.5rem;
    font-family: Inter,sans-serif;
    line-height:1.2;
    font-weight:600;
    text-align: center;
    

    @media(max-width:460px){
      font-size: 1.5rem; 
    }
`;

export const InputBuyToken = styled.input`
    margin-top: 5%;
    margin-left:10%;
    border-radius: 30px;
    transition: backgroud-color 1s,.2s;
    width:80%;
    text-align: center;
`;

export const BoxForm = styled.div`
  position: relative;
  border: 4px solid;
  border-color: linear-gradient(orange, violet);
  border-radius: 30px;
  background-clip: padding-box;
  margin: ${px2vw(10)};
  
  padding: ${px2vw(25)};
  &:after  {
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    content: '';
    z-index: -1;
    border-radius: 10px 100px / 120 px;
  
  @media(max-width:460px){
    margin: 0;
    padding: 0;
  }
`;
  
