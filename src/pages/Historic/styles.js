import styled from 'styled-components'

export const Container = styled.main`
    background-color:#FFFFFF;
    margin-top:25px;
    border-radius: 4px;
    height:100%;
    overflow:hidden;
    .container-link{
    text-decoration:none;
    display:flex;
    justify-content:space-around;
    width:100%;
    }
   
`
export const TitleContainer = styled.div`
    margin-left:10px;
    padding-top:14px;
    padding-bottom:19px;

    display:flex;
    gap:12px;
    h3{
    font-size: 24px;
    line-height: 28px;
    color: #00BCD4;
    text-transform:uppercase;
    }
`

export const Card = styled.div`
    width:100%;
    max-width:310px;
    height:83px;
    border:1px solid #E4E3E3;
    margin:0 auto;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    text-decoration:none;
    & + div{
    margin-top:16px;
   }
   

    span{
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #9B9B9B;
    }
    h4{
        font-weight:400;
    color: #0A261D;
    font-size: 24px;
    line-height: 28px;
    }

  

   
   
`