import styled from "styled-components";

export const InputContainer = styled.article`
  h1 {
    font-size: 2.5rem;
    margin: 2% 0% 5% 0%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    input {
      width: 100%;
      padding: 20px;
      border: none;
      border-radius: 7px;
      font-size: 1rem;
      font-family: "Assistant", sans-serif;
      color: white;
      background-color: #313131;
      &:focus {
        outline: solid 2px #474747;
      }
      &::placeholder {
        font-weight: bold;
        color: #7d7c7c;
      }

      &[type="submit"] {
        width: 50%;
        font-size: 1.2rem;
        font-weight: bold;
        color: #7d7c7c;
        &:hover {
          cursor: pointer;
          background-color: #2b2a2a;
        }
      }
    }
    textarea {
      width: 100%;
      padding: 20px;
      border: none;
      border-radius: 7px;
      resize: none;
      font-size: 1rem;
      font-family: "Assistant", sans-serif;
      color: white;
      background-color: #313131;

      &:focus {
        outline: solid 2px #474747;
      }
      &::placeholder {
        font-weight: bold;
        color: #7d7c7c;
      }
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
    input[type="submit"] {
      padding: 15px;
    }
  }

  @media (max-height: 750px) {
    form {
      input {
        padding: 15px;
        &[type="submit"] {
          padding: 15px;
        }
      }
      textarea {
        padding: 15px;
      }
    }
  }
`;
