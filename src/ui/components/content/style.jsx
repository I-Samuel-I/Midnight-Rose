import styled from "styled-components";

export const ContentContainer = styled.section`
  z-index: 10;
  position: relative;
  width: 100%;
  gap: 20px;
  background-color: #1b1b1bc7;
  backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
  div {
    margin-bottom: 1%;
  }

  @media (max-width: 992px) {
    div {
      margin-bottom: 2%;
    }
  }
  @media (max-width: 600px) {
    div {
      margin-bottom: 3%;
    }
  }
`;
