import styled from  'styled-components'

export const Container=styled.div`

    

`
export const ContainerButton= styled.div`

    display:flex;
`
export const ButtonParkingLot = styled.button`
        height:48px;
        width:50vw;
        border:none;
        background-color:${(props)=>props.isActive ? "#ffff;":"##F2F2F2;"};
        color:${(props)=>props.isActive ? "#4DD0E1;":"#9B9B9B;"};
        border-bottom:${(props)=>props.isActive ? "3px solid #4DD0E1;":""};


`