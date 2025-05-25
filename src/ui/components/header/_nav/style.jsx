import styled from "styled-components";

export const NavContainer = styled.nav`
  
  display: flex;
  align-items: center;
    
  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    list-style: none;
    font-family: "Assistant";
  }
  li {
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
