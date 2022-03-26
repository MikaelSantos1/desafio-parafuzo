import styled from 'styled-components'

export const Container= styled.div`
width:100%;
border-radius: 0px 0px 4px 4px;
background-color:#FFFFFF;

margin-top:41px;
label{
        margin-left:16px;
        margin-top:35px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #9B9B9B;
        display:block;
    }

.error{
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
        margin-left:16px;
        margin-top:35px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #9B9B9B;
    }

`
export const InputParkingLot=styled.input`
    max-width:312px;
    width:100%;
    height:67px;
    margin: 0 auto ;
   
    border:none;
    outline:0;
    margin-top:7px;
    background-color:#FFFBE6;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

color: #0A261D;

`

export const ContentContainer= styled.div`
background-color:#FFFFFF;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0 16px;

`