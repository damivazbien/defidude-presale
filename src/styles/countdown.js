import styled, { createGlobalStyle, keyframes}  from "styled-components";
import px2vw from "../utils/px2vw";

export const DivTimeFirst = styled.div`
    margin-top: ${px2vw(1.5)};
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
    

    &:-webkit-any-link {
    cursor: pointer;
    text-decoration: underline;
    }

    @media (max-width: 460px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }

`;

export const DivTime = styled.div`
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #111e32;
    display:block;
`;

export const DivTimeTwo = styled.div`
background-image: linear-gradient(127deg,#00fc9a,#29debd 33%,#14c4dc 66%,#ab69ff);
font-family: Inter,sans-serif;
font-weight: 700;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;  

`;

export const SpanTime = styled.span`
  color : #ffff;
`;

export const ClockTitle = styled.h3`
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
    font-size: 1rem; 
  }
`;

export const DivTitle = styled.div`
  color: #fff;
  text-align:center;
  font-size: 1rem;
  font-family: Inter,sans-serif;
`;