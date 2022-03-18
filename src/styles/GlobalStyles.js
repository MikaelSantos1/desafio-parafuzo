import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
   
body{
    font-family: 'Open Sans', sans-serif;
    background-color:#F2F2F2;
}
button{
    cursor:pointer;
}
`