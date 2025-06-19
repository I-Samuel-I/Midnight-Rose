import styled, { css, keyframes } from "styled-components";
import { HoverImage } from "../../../../assets/theme/style";
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const TextHover = css`
  background: linear-gradient(to right, #014862 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: background-position 0.4s ease-out;
  cursor: pointer;

  &:hover {
    background-position: left bottom;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  list-style: none;
  font-family: "Assistant";

  a {
    display: flex;
    img {
      ${HoverImage};
      width: 50px;
      pointer-events: all;
    }
  }
  @media (max-width: 768px) {
    gap: 20px;
    a {
      img {
        width: 45px;
      }
    }
  }
  @media (max-width: 600px) {
    a {
      img {
        display: none;
      }
    }
  }
`;

export const DisplayButton = styled.button`
  z-index: 2;
  width: 10vw;
  padding: 18px;
  border: 1px solid #4e4e4e;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: transparent;
  transition: color 0.5s, transform 0.2s, background-color 0.2s;

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #014862;
    border-radius: 30px;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
  }

  &:hover::after {
    transform: translate(0, 0);
  }

  &:hover {
    cursor: pointer;
    color: white;
    background-color: transparent;
  }

  @media (max-width: 1200px) {
    width: 15vw;
  }
  @media (max-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    width: 25vw;
    padding: 10px;
  }
`;

export const InfoMenu = styled.div`
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 50vh;
  top: 25px;
  right: 0px;
  border: solid 2px #4e4e4e;
  border-radius: 30px;
  background-color: #1b1b1d;

  ul {
    margin-top: 10%;
    padding: 40px;
    li {
      margin-bottom: 10%;
      list-style: none;
      font-size: 3rem;
      animation: ${slideUp} 1s ease forwards;
      opacity: 1;

      a {
        ${TextHover};
        display: flex;
        font-weight: bold;
        text-decoration: none;

        img {
          width: 50px;

          &:hover {
            transform: scale(1.2);
            transition: 0.2s;
          }
        }
      }
    }
  }
  button:nth-child(1) {
    ${TextHover};
    border: none;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Assistant";

    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
  button:nth-child(2) {
    height: 10%;
    margin: 5% 5% 0% 0%;
    border: none;
    background-color: inherit;
    svg {
      font-size: 4rem;
      color: white;
      transition: 0.5s;

      &:hover {
        color: #014862;
      }
    }

    @media (max-width: 600px) {
      svg {
        font-size: 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    top: 20px;
  }
  @media (max-width: 600px) {
    height: 45vh;
    width: 350px;
    ul {
      li {
        font-size: 2.5rem;
      }
    }
  }
  @media (max-width: 500px) {
    top: 0px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
