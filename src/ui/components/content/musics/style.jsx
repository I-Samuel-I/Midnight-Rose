import styled from "styled-components";

export const MusicContainer = styled.section`
  margin-bottom: 3%;
  h1 {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 1%;
  }
  figure {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
  }
  img {
    width: 100%;
    display: block;
    border: 1px solid black;
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

export const LinkAdo = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1%;
  a {
    font-size: 5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;

    &:hover{
      cursor: pointer;
      color: #014862;
    }
  }
`;
