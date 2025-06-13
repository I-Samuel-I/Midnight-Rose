import styled from "styled-components";

export const MusicContainer = styled.section`
  background-color: #222222;
  margin: 15% 0% 5% 0%;
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
      font-size: 1.5rem;
      font-weight: bold;
    }
    img {
      width: 85px;
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
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const PreviousTrack = styled.span`
  svg {
    transform: scale(-1);
  }
`;
export const NextTrack = styled.span `
`
