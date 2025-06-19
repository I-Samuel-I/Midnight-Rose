import styled, { keyframes } from "styled-components";

const autoRotate = keyframes`
 0% { transform: rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export const IntroContainer = styled.section`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  height: 100vh;
  margin: 0% 1% 0% 1%;
  article {
    z-index: 3;
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

      &:hover {
        color: #014862;
      }
      svg {
        font-size: 1rem;
      }
    }
  }
  img {
    width: 100%;
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
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    margin: 0% 2% 3% 2%;
    article {
      position: relative;
      left: 35%;
      bottom: 100px;
      h1 {
        font-size: 4rem;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    article {
      gap: 10px;
      h1 {
        font-size: 3.5rem;
      }
    }
  }
  @media (max-width: 600px) {
    height: 90vh;
    margin: 0% 3% 0% 3%;
    article {
      left: 30%;
      bottom: 150px;
    }
  }
  @media (max-width: 400px) {
    article {
      h1 {
        font-size: 3.2rem;
      }
    }
  }

  @media (max-height: 750px) {
    article {
      left: 30%;
      bottom: 50px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
`;

export const Cube3DContainer = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 350px;
  user-select: none;
  touch-action: none;

  @media (max-height: 768px) {
    bottom: 75px;
  }
  @media (max-width: 600px) {
    bottom: 200px;
  }
`;

export const Cube3D = styled.div`
  display: flex;
  width: 100%;
  perspective: 1000px;
`;

export const OuterCube = styled.div`
  transform-style: preserve-3d;
  transform-origin: center center;
  width: 100%;
`;
export const Cube = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 992px) {
    width: 375px;
    height: 375px;
  }
  @media (max-width: 768px) {
    width: 325px;
    height: 325px;
  }
  @media (max-width: 650px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 400px) {
    width: 225px;
    height: 225px;
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
  @media (max-width: 992px) {
    transform: translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: translateZ(112.5px);
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
  @media (max-width: 992px) {
    transform: rotateY(180deg) translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: rotateY(180deg) translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: rotateY(180deg) translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: rotateY(180deg) translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: rotateY(180deg) translateZ(112.5px);
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
  @media (max-width: 992px) {
    transform: rotateY(-90deg) translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: rotateY(-90deg) translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: rotateY(-90deg) translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: rotateY(-90deg) translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: rotateY(-90deg) translateZ(112.5px);
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
  @media (max-width: 992px) {
    transform: rotateY(90deg) translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: rotateY(90deg) translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: rotateY(90deg) translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: rotateY(90deg) translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: rotateY(90deg) translateZ(112.5px);
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
  @media (max-width: 992px) {
    transform: rotateX(90deg) translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: rotateX(90deg) translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: rotateX(90deg) translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: rotateX(90deg) translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: rotateX(90deg) translateZ(112.5px);
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
  @media (max-width: 992px) {
    transform: rotateX(-90deg) translateZ(187.2px);
  }
  @media (max-width: 768px) {
    transform: rotateX(-90deg) translateZ(162.5px);
  }
  @media (max-width: 650px) {
    transform: rotateX(-90deg) translateZ(150px);
  }
  @media (max-width: 500px) {
    transform: rotateX(-90deg) translateZ(125px);
  }
  @media (max-width: 400px) {
    transform: rotateX(-90deg) translateZ(112.5px);
  }
`;
