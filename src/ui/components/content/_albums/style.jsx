import styled from "styled-components";

export const AlbumsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AlbumsAside = styled.aside`
  position: sticky;
  top: 0;
  margin-left: 5%;
  h1 {
    font-size: 5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 10% 0% 0% 5%;
    a {
      font-size: 2.5rem;
      font-weight: bold;
      color: white;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: #014862;
      }
    }
  }
  @media (max-width: 1440px) {
    h1 {
      font-size: 4.5rem;
    }
    div {
      a {
        font-size: 2.3rem;
      }
    }
  }
  @media (max-width: 1200px) {
    margin-left: 4%;
    h1 {
      font-size: 4rem;
    }
    div {
      a {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 992px) {
    margin-left: 3%;
    h1 {
      font-size: 3.5rem;
    }
    div {
      a {
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0%;
    h1 {
      font-size: 4rem;
      text-align: center;
    }
    div {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      margin: 1% 0% 0% 0%;

      a {
        font-size: 1.5rem;
      }
    }
  }
`;
export const AlbumsList = styled.figure`
  figure {
    margin-top: 10%;
    img {
      width: 850px;
    }
    figcaption {
      margin-top: 1%;
      font-size: 3rem;
      font-weight: bold;
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
      font-size: 2rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
  }
  .ImageContainer:hover .Overlay {
    opacity: 1;
  }

  @media (max-width: 1440px) {
    figure {
      img {
        width: 750px;
      }
    }
  }
  @media (max-width: 1200px) {
    figure {
      img {
        width: 550px;
      }
    }
  }
  @media (max-width: 992px) {
    figure {
      img {
        width: 475px;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 650px;
      }
      figcaption {
        margin-top: 2%;
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 640px) {
    figure {
      img {
        width: 100%;
      }
      figcaption {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`;
