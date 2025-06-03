import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  list-style: none;
  font-family: "Assistant";

  a {
    display: flex;
    text-decoration: none;
    color: white;
    &:hover {
      cursor: pointer;
      color: #014862;
      /* color: #2f5974; */
      /* color: #3041bb; */
    }
    img {
      width: 50px;

      &:hover {
        transform: scale(1.2);
        transition: 0.2s;
      }
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
  width: 10vw;
  padding: 18px;
  border: solid 1px #4e4e4e;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: #1b1b1d;

  @media (max-width: 1200px) {
    width: 15vw;
  }
  @media (max-width: 768px) {
    width: 20vw;
  }
  @media (max-width: 600px) {
    width: 25vw;
    padding: 10px;
  }
`;

export const InfoMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 450px;
  height: 60vh;
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
    }
  }
  button:nth-child(1) {
    border: none;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Assistant";
    color: white;
    background-color: inherit;
  }
  button:nth-child(2) {
    height: 10%;
    margin: 5% 5% 0% 0%;
    border: none;
    background-color: inherit;
    svg {
      font-size: 4rem;
      color: white;
    }
  }
`;
