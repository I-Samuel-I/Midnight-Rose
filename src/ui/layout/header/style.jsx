import styled from "styled-components";


export const HeaderContainer = styled.header`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  margin: 1%;

  @media (max-width: 768px) {
    margin-bottom: 4%;
  }
  @media (max-width: 500px) {
    margin: 5% 1% 8% 1%;
  }

  @media (max-width: 992px) {
    margin-right: 2%;
    margin-left: 2%;
  }
  @media (max-width: 600px) {
    margin-right: 3%;
    margin-left: 3%;
  }
`;
