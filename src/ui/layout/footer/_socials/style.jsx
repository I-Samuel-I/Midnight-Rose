import styled from "styled-components";

export const SocialsContainer = styled.div`
  div {
    display: flex;
    gap: 1.3rem;
    margin-top: 1%; 
    img {
     
      width: 2.5rem;
    }
    p{  
        font-size: 2rem;
        font-weight: bold;
        margin-top: 3%;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media(max-width: 600px){
    div{
      img{
        width: 2rem;
      }
      p{
        font-size: 1.7rem;
      }
    }
  }
   @media(max-width: 400px){
    div{
      img{
        width: 1.8rem;
      }
      p{
        font-size: 1.5rem;
      }
    }
  }
`;
