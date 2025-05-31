import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  top: 880px;
  left: 30px;

  button {
    padding: 25px;
    border: none;
    border: solid 1px #807f7c;
    border-radius: 50px;
    background-color: #1b1b1d;
    &:hover {
        cursor: pointer;
        background-color:#0e0e0f;
    }

    svg {
      font-size: 2rem;
      color: white;
    }
  }
`;
