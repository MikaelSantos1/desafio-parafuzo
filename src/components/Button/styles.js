import styled from 'styled-components'
const colors ={
    green:'#28DD91',
    purple:'#A769B2',
    white:"#FFFFFF"
};
export const ButtonContainer= styled.button`
    
    max-width:312px;
    width:100%;
    height:67px;
    font-size: 15px;
    line-height: 18px;
    border:none;
    border-radius: 4px;
    margin: 0 auto ;
    margin-top:13px;
    color:#FFFF;
    background:${(props)=>props.isButtonActive 
    ? colors[props.activeColor]
    :'#DADADA;'
    };

`
