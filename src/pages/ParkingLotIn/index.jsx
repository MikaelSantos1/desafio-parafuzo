import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { InputPlate } from "../../components/InputPlate";
import { Container } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import {ButtonContainer} from '../../components/Button/styles'
import { LoadScreen } from "../../components/LoadScreen";
import { Checked } from "../../components/Checked";

export function ParkingLotIn() {

    const [input,setInput]= useState('')
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)

    const [done,setDone]=useState(false)
    const navigate= useNavigate()

    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }
        setError('')
        
    },[input])
    
    console.log(loading,done)
    const handleParkingLot=async()=>{
        try{
               setLoading(true)
               await api.post('parking',{
                plate:input
            })
            setTimeout(() => {
                setLoading(false)
                setDone(true)
              }, 1000);
              setTimeout(() => {
                setDone(false)
              }, 3000);
              
            
        }catch(err){
            setError(err.response.data.errors.plate)
        }
           

        
    }
    return (
        <Container>
           { 
           loading ===false && done===false?(
               <>
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
            </>)
            : loading===true && done===false ?<LoadScreen>Teste</LoadScreen>
            :<Checked/>
           }

           
           
            
        </Container>
        
    )
}