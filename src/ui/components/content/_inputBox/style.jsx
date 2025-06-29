import styled from "styled-components";

export const BoxContainer = styled.section`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  div {
    width: 35%;
    padding: 25px;

    border-radius: 15px;
    background-color: #222222;
  }
  @media (max-width: 1440px) {
    div {
      width: 40%;
    }
  }
  @media (max-width: 1200px) {
    div {
      width: 50%;
    }
  }
  @media (max-width: 992px) {
    div {
      width: 60%;
    }
  }
  @media (max-width: 768px) {
    div {
      width: 75%;
    }
  }
  @media (max-width: 600px) {
    height: 85vh;
    div {
      width: 90%;
    }
  }
  @media (max-height: 750px) and (min-width: 1000px) {
    height: 75vh;
  }
 
`;
