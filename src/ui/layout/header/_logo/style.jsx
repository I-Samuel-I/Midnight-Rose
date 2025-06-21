import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    width: 80px;
  }
  button {
    border: none;
    font-size: 4rem;
    font-family: "Assistant";
    font-weight: bold;
    color: white;
    background-color: inherit;

    &:hover {
      cursor: pointer;
    }
  }
  div {
    display: flex;
    gap: 5px;
  }
  @media (max-width: 992px) {
    img {
      width: 75px;
    }
    button {
      font-size: 3rem;
    }
  }
  @media (max-width: 768px) {
    gap: 5px;
    img {
      width: 70px;
    }
    button {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 65px;
    }
    button {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 500px) {
    img {
      display: none;
    }
    button {
      padding: 5px;
      font-size: 2rem;
    }
  }
  @media (max-width: 425px) {
    button {
      font-size: 1.5rem;
    }
  }
  @media (max-height: 750px) {
    button{
      font-size: 3.5rem;
    }
  }
`;
