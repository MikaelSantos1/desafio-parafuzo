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
    overflow-x:hidden;
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

.error{
    margin:0 auto;
    max-width:312px;
    width:100%;
    height:32px;
    background: rgba(255, 23, 68, 0.15);
    border-radius: 4px;
    margin-top:8px;
    display:flex;
    align-items:center;
  
    img{
        padding:0 12px;
    }
}
    label{
        margin-top:35px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #9B9B9B;
    }
`