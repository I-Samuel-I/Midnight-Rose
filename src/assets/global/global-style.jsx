import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}  
body,html{
    width: 100%;
    overflow-y: hidden;
    font-family: 'Assistant', sans-serif;
    color: white;
    background-color: #2D2D2F;
}
`