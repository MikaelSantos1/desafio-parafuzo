import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { InputPlate } from "../../components/InputPlate";
import { Container } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import {ButtonContainer} from '../../components/Button/styles'

export function ParkingLotIn() {

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
            <InputPlate 
            input={input} 
            setInput={setInput}
            error={error}
            setError={setError}
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