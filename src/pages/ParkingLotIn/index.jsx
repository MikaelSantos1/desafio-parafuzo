import { useEffect, useState } from "react";

import { InputPlate } from "../../components/InputPlate";
import { Container } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import {ButtonContainer} from '../../components/Button/styles'
import { LoadScreen } from "../../components/LoadScreen";
import { Checked } from "../../components/Checked";


export function ParkingLotIn() {
    
  
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)
    const [input,setInput]=useState('')
    const [done,setDone]=useState(false)
  
    
    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
        setError('')
        
    },[input])
    
    useEffect(()=>{
        if(error){
            setLoading(false)
        }
        
    },[error])
  
    
    const handleParkingLot=async(data)=>{
        
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
    console.log(activeButton)
    return (
        <Container  >
           { 
           loading ===false && done===false?(
               <>
           <InputPlate 
             value={input}
             
            error={error}
            setError={setError}
            setInput={setInput}
            />
          
            {error?
                <div className="error"><img src={Alert} alt="alerta" />{error} </div>
                :''
                 
            } 
            <ButtonContainer 
            isButtonActive={activeButton}
            activeColor="green"
            disabled={!activeButton}
            onClick={()=>{console.log('cliquei')}}
            >
                CONFIRMAR ENTRADA
            </ButtonContainer>
            </>)
            : loading===true && done===false ?<LoadScreen>Teste</LoadScreen>
            :<Checked/>
           }

           
           
            
        </Container >
        
    )
}