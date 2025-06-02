import styled from "styled-components";

export const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-size: 2.5rem;
    margin-top: 2%;
  }
  input {
    padding: 20px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-family: "Assistant", sans-serif;
    color: white;
    background-color: #313131;

    &::placeholder {
      font-weight: bold;
      color: #7d7c7c;
    }
    &:hover[type=submit]{
        cursor: pointer;
        background-color: #2b2a2a;
        
    }
  }
  textarea {
    padding: 20px;
    border: none;
    border-radius: 10px;
    resize: none;
    font-size: 1rem;
    font-family: "Assistant", sans-serif;
    color: white;
    background-color: #313131;

    &::placeholder {
      font-weight: bold;
      color: #7d7c7c;
    }
  }
`;
