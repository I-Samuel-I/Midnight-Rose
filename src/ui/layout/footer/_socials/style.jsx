import styled from "styled-components";
import { HoverImage } from "../../../../assets/theme/style";

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    display: flex;
    gap: 1.3rem;
    margin-top: 1%;
    img {
      ${HoverImage}
      width: 2.5rem;

      pointer-events: all;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
      margin: 3% 0% 3% 0%;
    }
  }

  @media (max-width: 600px) {
    div {
      img {
        width: 2rem;
      }
      p {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 400px) {
    div {
      img {
        width: 1.8rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-height: 750px) {
    div {
      margin-top: 0%;
      p {
        margin-bottom: 5%;
      }
    }
  }
`;
