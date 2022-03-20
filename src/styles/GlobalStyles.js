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

.react-modal-overlay{

    background-color: rgba(0,0,0,0.51);
  
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
}

.react-modal-content{
    width:100%;
    height:294px;
    background-color:#FFFFFF;
    max-width:339px;
    border-radius: 4px;
    opacity: 0.95;
}
`