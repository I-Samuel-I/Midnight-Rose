import styled from "styled-components";

export const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  h1 {
    
    font-size: 15rem;
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
    h1 {
      font-size: 12rem;
    }
    span {
      p {
        font-size: 1.7rem;
      }
    }
  }
  @media(max-width: 992px){
     h1 {
      font-size: 10rem;
    }
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
    span{
      flex-direction: column;
    }
  }
  @media(max-width: 600px){
    h1{
      font-size: 8rem;
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
    h1{
      font-size: 7rem;
    }
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
