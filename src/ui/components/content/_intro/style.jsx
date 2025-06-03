import styled from "styled-components";

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0% 1% 0% 1%;
  border: 2px solid #2d2d2f;

  a {
    text-decoration: none;
    font-size: 10rem;
    font-weight: bold;
    color: white;

    &:hover {
      cursor: pointer;
      color: #014862;
    }
  }
  @media(max-width: 992px){
    margin: 0% 2% 0% 2%;
  }
   @media(max-width: 600px){
    margin: 0% 3% 0% 3%;
  }
`;
