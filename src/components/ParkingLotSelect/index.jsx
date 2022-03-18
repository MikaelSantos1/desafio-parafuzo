import { useState } from "react"
import {  ButtonParkingLot, ContainerButton } from "./styles"
export function ParkingLotSelect() {
    
    const [type, setType] = useState('input')
    return (
       
            <ContainerButton>
                <ButtonParkingLot
                onClick={()=>{setType('input')}}
                isActive={type==="input"}>
                        
                    Entrada
                </ButtonParkingLot>
                <ButtonParkingLot
                onClick={()=>{setType('output')}}
                isActive={type==="output"}> 
                    Saida
                </ButtonParkingLot>
            </ContainerButton>

            
        
    )
}