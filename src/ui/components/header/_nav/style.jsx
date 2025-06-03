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
    text-decoration: none;
    color: white;
    &:hover {
      cursor: pointer;
      color: #014862;
      /* color: #2f5974; */
      /* color: #3041bb; */
    }
  }
  a {
    display: flex;

    img {
      width: 40px;

      &:hover {
        transform: scale(1.2);
        transition: 0.2s;
      }
    }
  }
`;

export const DisplayButton = styled.button`
  width: 9vw;
  padding: 18px;
  border: solid 1px #4e4e4e;
  border-radius: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: #1b1b1d;
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
