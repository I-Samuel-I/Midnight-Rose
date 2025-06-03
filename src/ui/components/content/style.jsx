import styled from "styled-components";

export const ContentContainer = styled.section`
  div {
    margin-bottom: 1%;
    &:nth-child(4) {
      border: none;
    }
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
