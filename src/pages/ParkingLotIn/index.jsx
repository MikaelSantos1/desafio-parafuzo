import { useEffect, useState } from "react";
import { usePlate } from "../../hooks/Context/UserPlate";
import { InputPlate } from "../../components/InputPlate";
import { Container,ContentContainer} from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import {Button} from '../../components/Button'
import { LoadScreen } from "../../components/LoadScreen";
import { Checked } from "../../components/Checked";
import { ParkingLotSelect } from "../../components/ParkingLotSelect";

export function ParkingLotIn() {
    const {plate,setPlate}=usePlate()
  
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    const [loading,setLoading]=useState(false)
   
    const [done,setDone]=useState(false)
  
    
    useEffect(()=>{
        if(plate.length===8){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
        setError('')
        
    },[plate])
    
    useEffect(()=>{
        if(error){
            setLoading(false)
        }
        
    },[error])
  
    
    const handleParkingLot=async()=>{
       
        try{
               setLoading(true)
               await api.post('parking',{
                plate:plate
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
        <Container  >
              <ParkingLotSelect initialType="input"/>
           { 
           loading ===false && done===false?(
               <>
            <label>Número da placa:</label>
               <ContentContainer>
                  
           <InputPlate 
             value={plate}
            error={error}
            setError={setError}
            setInput={setPlate}
            />
          
            {error?
                <div className="error"><img src={Alert} alt="alerta" />{error} </div>
                :''
                 
            } 
            <Button 
            isButtonActive={activeButton}
            activeColor="green"
            disabled={!activeButton}
            onClick={handleParkingLot}
            >
                CONFIRMAR ENTRADA
            </Button>
            </ContentContainer>
            </>)
            : loading===true && done===false ?<LoadScreen>Registrando...</LoadScreen>
            :<Checked>Registrado!</Checked>
           }

           
           
            
        </Container >
        
    )
}