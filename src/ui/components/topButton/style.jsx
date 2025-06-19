import styled from "styled-components";

export const ButtonContainer = styled.div`
  z-index: 20;
  position: fixed;
  top: 90%;
  right: 20px;

  button {
    padding: 20px;
    border: none;
    border: solid 1px #4e4e4e;
    border-radius: 50px;
    background-color: #1b1b1d;

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      transform: scale(1.1);
      background-color: #0e0e0f;
    }
    svg {
      font-size: 2rem;
      color: white;
    }
  }

  @media (max-width: 768px) {
    button {
      svg {
        font-size: 1.7rem;
      }
    }
  }

  @media (max-height: 900px) {
    top: 87%;
  }
  @media (max-height: 650px) {
    top: 82%;
  }

  @media (max-width: 600px) {
    top: 90%;
    button {
      padding: 17px;
      svg {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-height: 450px) {
    top: 78%;
  }
`;
