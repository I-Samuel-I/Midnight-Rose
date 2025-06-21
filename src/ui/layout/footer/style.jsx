import styled from "styled-components";

export const FooterContainer = styled.footer`
  z-index: 10;
  position: relative;
  width: 100%;
  height: 20vh;
  background-color: #222222;

  @media (max-height: 750px){
    height: 30vh;
  }
  @media (max-height: 500px){
    height: 35vh;
  }
`;
