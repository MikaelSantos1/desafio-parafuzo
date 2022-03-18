import { useEffect, useState } from "react";
import { ButtonContainer } from "../Button/styles";
import { ParkingLotSelect, } from "../ParkingLotSelect";
import { Container, InputParkingLot } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";

export function ParkingLot() {
    const [input,setInput]= useState('')
    const[activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }
    },[input])
    
    const handleParkingLot=async()=>{
        try{
               await api.post('parking',{
                plate:input
            })
           
        }catch(err){
            setError(err.response.data.errors.plate)
        }
           

        
    }
    console.log(error)
    return (
        <Container>
            <ParkingLotSelect />
            <label>Número da placa:</label>
            <InputParkingLot 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text" 
            placeholder="AAA-0000" 
            style={error?{color:'red'}:{}}
            />
          
            {error?
                <div className="error"><img src={Alert} alt="alerta" />{error} </div>
                :''
                 
            } 
            <ButtonContainer 
            onClick={handleParkingLot}
            isButtonActive={activeButton}
            activeColor="green"
            >
                CONFIRMAR ENTRADA
            </ButtonContainer>
        </Container>

    )
}