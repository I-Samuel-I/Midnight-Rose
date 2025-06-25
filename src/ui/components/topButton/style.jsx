import styled from "styled-components";

export const ButtonContainer = styled.button`
  z-index: 10;
  position: fixed;
  bottom: 50px;
  right: 20px;
  width: 65px;
  height: 65px;
  border: solid 1px #4e4e4e;
  border-radius: 50%;
  transition: 0.5s;
  background-color: #1b1b1d;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #0e0e0f;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  }
  svg {
    width: 27px;
    height: 27px;
    color: white;
  }

  @media (max-width: 992px) {
    bottom: 20px;
    width: 57px;
    height: 57px;
    svg {
      width: 23px;
      height: 23px;
    }
  }
`;
