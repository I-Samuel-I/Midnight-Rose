import styled from "styled-components";

export const MusicContainer = styled.section`
  margin: 5% 0% 3% 0%;
  h1 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1%;
  }
  figure {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    img {
      width: 100%;
      display: block;
      border: 1px solid black;
    }
  }
  .ImageContainer {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
  }
  .Overlay {    
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border: none;
    transition: opacity 0.3s ease;
    background-color: #00000080;

    &:hover {
      cursor: pointer;
    }

    h1 {
      font-size: 4rem;
    }
    a {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
      color: white;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        gap: 10px;
        p {
          font-size: 2rem;
        }
        svg {
          width: 15%;
          padding: 3px;
          font-size: 1.3rem;
          border-radius: 50px;
          background-color: #1b1b1d;
        }
      }
    }
  }
  .ImageContainer:hover .Overlay {
    opacity: 1;
  }

  @media (max-width: 1440px) {
    .Overlay {
      h1 {
        font-size: 3.5rem;
      }
      a {
        div {
          p {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 4rem;
    }

    .Overlay {
      h1 {
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 3.5rem;
      margin-bottom: 2%;
    }

    .Overlay {
      a {
        div {
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 5%;
    }
    figure {
      display: flex;
      flex-direction: column;
      .ImageContainer {
        display: flex;
        justify-content: center;
      }
      img {
        margin-bottom: 3%;
        width: 95%;
        border: none;
      }
    }
    .Overlay {
      h1 {
        font-size: 5rem;
      }
      a {
        div {
          p {
            font-size: 2rem;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    figure {
      img {
        width: 95%;
        margin-bottom: 3%;
      }
      .Overlay {
        display: none;
      }
    }
  }
`;

export const LinkAdo = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1%;
  a {
    font-size: 5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;

    &:hover {
      cursor: pointer;
      color: #014862;
    }

    img {
      color: white;
    }
  }
  @media (max-width: 1200px) {
    a {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    a {
      font-size: 3rem;
    }
  }
`;
