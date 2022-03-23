import styled from 'styled-components'

export const Container= styled.header`
    height:60px;
    width:100vw;
    background-color:#4DD0E1;
    padding: 0 8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    div{
       z-index:50;
        display:flex;
        width:100%;
        height:100%;
        align-items:center;
    }
    
`

export const MenuBurger = styled.nav`
        position:absolute;
        top:0; 
        bottom:0;
        right:0;
        left:0;
        background-color:#4DD0E1;
        width:100vw;
        z-index:1;
        transform:${props => props.show?'translateX(0)':'translateX(100%)'};
        transition: transform 0.2s ease-in-out;
        a{
            display:block;
            margin-top:108px;
            margin-left:15px;
            color:#FFFF;
            text-decoration:none;
            & + a{
                margin-top:46px;
                text-decoration:none;
        }
        }
        
`
