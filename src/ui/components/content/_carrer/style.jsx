import styled from "styled-components";

export const CarrerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0% 1% 0% 1%;
  border: 2px solid #2d2d2f;
  img {
    height: 100%;
  }
  article {
    padding: 10px;
    height: 100%;
    margin-top: 1%;
    h1 {
      font-size: 5rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
  @media (max-width: 1440px) {
    article {
      h1 {
        font-size: 4.5rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 1299px) {
    height: 80vh;
    img {
      height: 100%;
    }
    article {
      h1 {
        font-size: 3.5rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 992px) {
    height: 60vh;
    margin: 0% 2% 0% 2%;
    img {
      height: 100%;
    }
    article {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100vh;

    img {
      width: 70%;
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 3rem;
      }
      p {
        padding: 10px;
        text-align: center;
      }
    }
  }
  @media (max-width: 600px) {
    margin: 0% 3% 0% 3%;

    img {
      width: 95%;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
    }
    article {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`;
