import styled from "styled-components";

export const AlbumsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;
