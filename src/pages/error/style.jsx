import styled from "styled-components";

export const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  img {
   width: 50%;
  }
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-size: 2rem;
    }
    button {
      border: none;
      font-size: 1.1rem;
      font-family: "Assistant", sans-serif;
      color: white;
      background-color: inherit;

      &:hover {
        cursor: pointer;
        color: #014862;
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1200px) {
    img{
      width: 70%;
    }
    span {
      p {
        font-size: 1.7rem;
      }
    }
  }
  @media(max-width: 992px){
    span {
      p {
        font-size: 1.5rem;
      }
      button{
        font-size: 1rem;
      }
    }
  }
  @media(max-width: 768px){
     img{
      width: 85%;
    }
    span{
      flex-direction: column;
    }
  }
  @media(max-width: 600px){
     img{
      width: 100%;
    }
    span{
      p{
        text-align: center;
        font-size: 1.1rem;
      }
      button{
        font-size: 0.9rem;
      }
    }
  }
  @media(max-width: 400px){
    span{
      p{
        text-align: center;
        font-size: 1rem;
      }
      button{
        font-size: 0.9rem;
      }
    }
  }
`;
