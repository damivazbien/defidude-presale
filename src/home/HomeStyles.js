import styled, {keyframes} from "styled-components";
import px2vw from "../utils/px2vw";
import LogoSrc from '../assets/dude.svg'



export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  
  @media (min-width: 1024px) {
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
    
    @media (min-width: 768px) {
        width: ${px2vw(320, 768)};
        min-height: ${px2vw(400,800)};
    }

    @media (min-width: 1024px) {
        width: ${px2vw(450)};
        min-height: ${px2vw(400)};
    }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;


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

export const BoxTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  
  color: hsla(0,0%,100%,.75);
  font-size: 1.5rem;
  margin-top: 2%;
  margin-left: 2%;
  margin-right:2%;


  @media (min-width: 1024px) {
    font-size: 1rem;
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

export const divConnect = styled.div`
  position:relative;
  width:500px;
  height:500px;
  background:red;
`;


export const ConnectButton = styled.button`
  height:5%;
  width:10%;
  position:absolute;
  right: 0px;
  margin-right: 1rem;
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
`;