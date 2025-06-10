import styled, { keyframes } from "styled-components";

const autoRotate = keyframes`
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(180deg) rotateY(360deg); }
`;

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0% 1% 0% 1%;
  article {
    display: flex;
    flex-direction: column;
    margin: 0% 0% 10% 10%;
    gap: 5px;
    h1 {
      font-size: 5rem;
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.1rem;
      font-weight: bold;
      text-decoration: none;
      color: white;

      svg {
        font-size: 1rem;
      }
    }
  }
  img {
    width: 100%;
  }

  @media (max-width: 992px) {
    margin: 0% 2% 0% 2%;
  }
  @media (max-width: 600px) {
    margin: 0% 3% 0% 3%;
  }

  @media (max-width: 1440px) {
    article {
      margin: 0% 0% 15% 6%;
      h1 {
        font-size: 5rem;
      }
      a {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 1200px) {
    article {
      margin: 0% 0% 20% 4%;

      h1 {
        font-size: 3.5rem;
      }
      a {
        font-size: 0.8;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    article {
      margin: 0% 0% 25% 75%;

      h1 {
        font-size: 4rem;
      }
      a {
        font-size: 0.8;
      }
    }
  }
`;

export const Cube3DContainer = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 125px;
  user-select: none;

  @media (max-width: 992px) {
    bottom: 150px;
  }
  @media (max-width: 768px) {
    bottom: 125px;
  }
`;

export const Cube3D = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

export const OuterCube = styled.div`
  transform-style: preserve-3d;
`;
export const Cube = styled.div`
  width: 450px;
  height: 450px;
  position: relative; 
  transform-origin: center;
  transform-style: preserve-3d;
  animation: ${autoRotate} 60s linear infinite;
 
`;

export const Face = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  background-color: rgb(53, 83, 165);
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;

  @media (max-width: 1440px) {
    width: 425px;
    height: 425px;
  }
  @media (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }
   @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const CubeFaceFront = styled(Face)`
  transform: translateZ(225px);

  @media (max-width: 1440px) {
    transform: translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: translateZ(200px);
  }
   @media (max-width: 768px) {
    transform: translateZ(175px);
  }
`;
export const CubeFaceBack = styled(Face)`
  transform: rotateY(180deg) translateZ(225px);

  @media (max-width: 1440px) {
    transform: rotateY(180deg) translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: rotateY(180deg) translateZ(200px);
  }
   @media (max-width: 768px) {
    transform: rotateY(180deg) translateZ(175px);
  }
`;
export const CubeFaceLeft = styled(Face)`
  transform: rotateY(-90deg) translateZ(225px);

  @media (max-width: 1440px) {
    transform: rotateY(-90deg) translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: rotateY(-90deg) translateZ(200px);
  }
   @media (max-width: 768px) {
    transform: rotateY(-90deg) translateZ(175px);
  }
`;
export const CubeFaceRight = styled(Face)`
  transform: rotateY(90deg) translateZ(225px);

  @media (max-width: 1440px) {
    transform: rotateY(90deg) translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: rotateY(90deg) translateZ(200px);
  }
  @media (max-width: 768px) {
    transform: rotateY(90deg) translateZ(175px);
  }
`;
export const CubeFaceTop = styled(Face)`
  transform: rotateX(90deg) translateZ(225px);

  @media (max-width: 1440px) {
    transform: rotateX(90deg) translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: rotateX(90deg) translateZ(200px);
  }
  @media (max-width: 768px) {
    transform: rotateX(90deg) translateZ(175px);
  }
`;
export const CubeFaceBottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(225px);

  @media (max-width: 1440px) {
    transform: rotateX(-90deg) translateZ(212.5px);
  }
  @media (max-width: 1200px) {
    transform: rotateX(-90deg) translateZ(200px);
  }
  @media (max-width: 768px) {
    transform: rotateX(-90deg) translateZ(175px);
  }
`;
