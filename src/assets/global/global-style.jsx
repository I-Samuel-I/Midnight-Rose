import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}  
body,html{
    width: 100%;
    user-select: none;
    
    scroll-behavior: smooth;
    font-family: 'Assistant', sans-serif;
    font-size: 16px;
    color: white;
    background-color: #1B1B1D;

    img{
        pointer-events: none;
    }
}
`