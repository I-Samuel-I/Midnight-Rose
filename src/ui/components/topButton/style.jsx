import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  top: 90%;
  right: 30px;
  
  button {
    padding: 20px;
    border: none;
    border: solid 1px #4E4E4E;
    border-radius: 50px;
    background-color: #1b1b1d;
    
    &:hover {
        cursor: pointer;
        transition: 0.3s;
        transform: scale(1.1);
        background-color:#0e0e0f;
    }

    svg {
      font-size: 2rem;
      color: white;
    }
  }
  @media( max-height: 900px){
    top: 87%;
  }
  @media( max-height: 650px){
    top: 82%;
  }
  @media( max-height: 450px){
    top: 78%;
  }
`;
