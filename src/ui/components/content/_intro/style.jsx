import styled, { keyframes } from "styled-components";

const autoRotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0% 1% 0% 1%;

  article {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    bottom: 150px;
    right: 525px;
    gap: 5px;
    h1 {
      font-size: 5rem;
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      color: white;

      svg {
        font-size: 1rem;
      }
    }
  }

  img {
    width: 475px;
  }

  @media (max-width: 992px) {
    margin: 0% 2% 0% 2%;
  }
  @media (max-width: 600px) {
    margin: 0% 3% 0% 3%;
  }
`;

export const Cube3DContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 150px;
  user-select: none;
`;

export const Cube3D = styled.div`
  perspective: 1000px;
`;

export const OuterCube = styled.div`
  transform-style: preserve-3d;
`;
export const Cube = styled.div`
  width: 475px;
  height: 475px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${autoRotate} 50s linear infinite;
`;

export const Face = styled.div`
  position: absolute;
  width: 475px;
  height: 475px;
  background-color: rgb(53, 83, 165);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`;

export const CubeFaceFront = styled(Face)`
  transform: translateZ(237.5px);
`;

export const CubeFaceBack = styled(Face)`
  transform: rotateY(180deg) translateZ(237.5px);
`;

export const CubeFaceLeft = styled(Face)`
  transform: rotateY(-90deg) translateZ(237.5px);
`;

export const CubeFaceRight = styled(Face)`
  transform: rotateY(90deg) translateZ(237.5px);
`;

export const CubeFaceTop = styled(Face)`
  transform: rotateX(90deg) translateZ(237.5px);
`;

export const CubeFaceBottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(237.5px);
`;
