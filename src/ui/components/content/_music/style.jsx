import styled, { css } from "styled-components";

const FlexItems = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MusicContainer = styled.section`
  position: fixed;
  z-index: 20;
  bottom: 0;
  margin: 30% 0% 5% 0%;
  border-radius: 10px;
  background-color: #222222;
`;
export const SingleMusic = styled.div`
  display: flex;
  gap: 25px;
  figure {
    display: flex;
    align-items: center;

    gap: 20px;

    figcaption {
      font-size: 1.2rem;
      font-weight: bold;
      padding-right: 15px;
    }
    img {
      width: 75px;
    }
  }

  svg {
    font-size: 1.5rem;
    background-color: #1b1b1d;
  }
  input[type="range"] {
    -webkit-appearance: none;
    width: 75%;
    height: 8px;
    background: #343438;
    border-radius: 30px;
    outline: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    input[type="range"] {
      width: 70%;
    }
    figure {
    }
  }
  @media (max-width: 500px) {
    figure {
      img {
        width: 65px;
      }
    }
  }
  @media (max-width: 400px) {
    figure {
      figcaption {
        font-size: 0.9rem;
      }
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const ControlsContainer = styled.div`
  ${FlexItems};
  gap: 20px;
  padding-bottom: 2px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 1.2rem;
  }
`;
export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const PreviousTrack = styled.span`
  ${FlexItems};
`;
export const NextTrack = styled.span`
  ${FlexItems}
`;
export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SideArrow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 65px;
  right: 8px;
  svg {
    display: flex;
    font-size: 2rem;
    transform: rotate(-90deg);
    background-color: inherit;
  }
  @media (min-width: 993px) {
    display: none;
  }
  @media (max-width: 500px) {
    svg {
      font-size: 1.8rem;
    }
  }
`;
