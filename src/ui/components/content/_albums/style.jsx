import styled from "styled-components";

export const AlbumsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AlbumsAside = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
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
      position: relative;
      font-size: 2rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
      transition: 0.5s;
      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 3px;
        background-color: #014862;
        left: 0;
        bottom: 0px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s ease-out;
      }
      &:hover {
        color: #014862;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
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
    position: static;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 0%;
    h1 {
      font-size: 3.5rem;
      text-align: center;
    }
    div {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      margin: 1% 0% 0% 0%;

      a {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 3.2rem;
    }
    div {
      a {
        font-size: 1.2rem;
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
      width: 50%;
      font-size: 2rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
  }
  .ImageContainer:hover .Overlay {
    opacity: 1;
  }
  figure:nth-child(6) {
    figcaption {
      margin-bottom: 5%;
    }
  }
  @media (max-width: 1440px) {
    figure {
      img {
        width: 750px;
      }
    }
  }
  @media (max-width: 1200px) {
    .Overlay{
      h1{
        font-size: 3rem;
      }
    }
    figure {
      img {
        width: 600px;
      }
    }
  }
  @media (max-width: 992px) {
     .Overlay{
      h1{
        font-size: 2.5rem;
      }
    }
    figure {
      img {
        width: 500px;
      }
      figcaption {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .Overlay {
        display: none;
      }
      img {
        width: 90%;
      }
      figcaption {
        margin-top: 2%;
      }
    }
  }
  @media (max-width: 640px) {
    figure {
      .ImageContainer {
        display: flex;
        justify-content: center;
      }
      img {
        width: 95%;
      }

      figcaption {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 400px) {
    figure {
      figcaption {
        font-size: 1.3rem;
      }
    }
  }
`;

export const TextLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 10px;
  p {
    font-size: 2rem;
  }

  svg {
    width: 12%;
    padding: 3px;
    font-size: 1.2rem;
    border-radius: 50px;
    background-color: #1b1b1d;
  }
   @media(max-width: 1440px){
    svg{
      width: 11%;
      padding: 2px;
      font-size: 1rem;
    }
  }
   @media(max-width: 992px){
    svg{
      width: 22%;
      font-size: 0.8rem;
      padding: 1px;
    }
  }
`;
