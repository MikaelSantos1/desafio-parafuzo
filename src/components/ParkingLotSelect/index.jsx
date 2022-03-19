import { useState } from "react"
import { ButtonParkingLot, ContainerButton } from "./styles"
import { Link } from "react-router-dom"
export function ParkingLotSelect() {

    const [type, setType] = useState('input')
    return (

        <ContainerButton>
            <Link to="/in">
                <ButtonParkingLot
                    onClick={() => { setType('input') }}
                    isActive={type === "input"}>
                    Entrada
                </ButtonParkingLot>
            </Link>
            <Link to="/out">
            <ButtonParkingLot
                onClick={() => { setType('output') }}
                isActive={type === "output"}>
                Saida
            </ButtonParkingLot>
            </Link>
        </ContainerButton>



    )
}