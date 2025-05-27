import styled, { keyframes } from "styled-components";

const autoRotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export const CarrerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  margin: 0% 1% 0% 1%;
  border: 2px solid #2d2d2f;

  img {
    width: 300px;
  }

  article {
    padding: 10px;
    width: 50%;
    margin: 1% 0% 0% 2%;
    h1 {
      font-size: 5rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;

export const Cube3DContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30%;
  border: solid 1px white;
  user-select: none;
`;

export const Cube3D = styled.div`
  perspective: 1000px;
`;

export const OuterCube = styled.div`
  transform-style: preserve-3d;
`;

export const Cube = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${autoRotate} 20s linear infinite;
`;

export const Face = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: rgb(53, 83, 165);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CubeFaceFront = styled(Face)`
  transform: translateZ(150px);
`;
export const CubeFaceBack = styled(Face)`
  transform: rotateY(180deg) translateZ(150px);
`;
export const CubeFaceLeft = styled(Face)`
  transform: rotateY(-90deg) translateZ(150px);
`;
export const CubeFaceRight = styled(Face)`
  transform: rotateY(90deg) translateZ(150px);
`;
export const CubeFaceTop = styled(Face)`
  transform: rotateX(90deg) translateZ(150px);
`;
export const CubeFaceBottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(150px);
`;
