import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import { Container, InputParkingLot } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import { ButtonContainer } from "../../components/Button/styles";


export function ParkingLotOut() {

    const [input,setInput]= useState('')
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()

    const navigate= useNavigate()

    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }
        setError('')
    },[input])
    
    console.log(activeButton)
    const handleParkingLot=async()=>{
        try{
           
               await api.post('parking',{
                plate:input
            })
             navigate('/loading')
            
            setTimeout(() => {
                navigate('/success')
              }, 1000);
            
            
        }catch(err){
            setError(err.response.data.errors.plate)
        }
           

        
    }
    return (
        <Container>
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
            activeColor="purple"
            >
                CONFIRMAR SAIDA
            </ButtonContainer>
            
        </Container>
        
    )
}