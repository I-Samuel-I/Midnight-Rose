import styled from "styled-components";

export const MusicContainer = styled.section`
  background-color: #222222;
  margin: 30% 0% 5% 0%;
`;
export const SingleMusic = styled.div`
  display: flex;
  gap: 25px;
  figure {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 20px;

    figcaption {
      font-size: 1.3rem;
      font-weight: bold;
    }
    img {
      width: 100px;
    }
  }

  svg {
    font-size: 1.5rem;
    background-color: #1b1b1d;
  }
  input[type="range"] {
    -webkit-appearance: none;
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

  input[type="range"]::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    figure {
      figcaption {
        font-size: 1.1rem;
      }
      img {
        width: 85px;
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
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
export const ControlsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 500px) {
    gap: 15px;
    svg {
      font-size: 1.3rem;
    }
  }
`;
export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const PreviousTrack = styled.span``;
export const NextTrack = styled.span``;
