import styled, { keyframes } from "styled-components";

const autoRotate = keyframes`
 0% { transform: rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export const IntroContainer = styled.section`
  display: flex;
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
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width:768px) {
    flex-direction: column-reverse;
    article {
      margin: 0% 0% 30% 75%;

      h1 {
        font-size: 4rem;
      }
      a {
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width:600px) {
    flex-direction: column-reverse;
    article {
      margin: 0% 0% 40% 75%;

      h1 {
        font-size: 4rem;
      }
      a {
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width:500px) {
    flex-direction: column-reverse;
    article {
      margin: 0% 0% 50% 60%;

      h1 {
        font-size: 4rem;
      }
      a {
        font-size: 0.8rem;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
`;

export const Cube3DContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 150px;
  user-select: none;
  touch-action: none;
  
  
  @media (max-width: 992px) {
    bottom: 150px;
  }
  @media (max-width: 768px) {
    bottom: 125px;
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
  width:100%;
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
    width: 200px;
    height: 200px;
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
    transform: translateZ(100px);
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
    transform: rotateY(180deg) translateZ(100px);
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
    transform: rotateY(-90deg) translateZ(100px);
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
    transform: rotateY(90deg) translateZ(100px);
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
    transform: rotateX(90deg) translateZ(100px);
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
    transform: rotateX(-90deg) translateZ(100px);
  }
`;
