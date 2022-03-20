import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useNavigate } from "react-router-dom";

import { Container, InputParkingLot } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import { ButtonContainer } from "../../components/Button/styles";
import { NewPaymentModal } from "../../components/NewPaymentModal";
Modal.setAppElement('#root')

export function ParkingLotOut() {

    const [input,setInput]= useState('')
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    const [isPaymentModalOpen,setIsPaymentModalOpen]=useState(false)

    function handleOpenPaymentModal(){
        setIsPaymentModalOpen(true)
    }
    function handleClosePaymentModal(){
        setIsPaymentModalOpen(false)
    }


    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }else{
            setActiveButton(false)
        }
        setError('')
    },[input])
    
    
    
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
            onClick={handleOpenPaymentModal}
            isButtonActive={activeButton}
            activeColor="purple"
            >
                Pagamento
            </ButtonContainer>


            <ButtonContainer 
            onClick={handleOpenPaymentModal}
            isButtonActive={true}
            activeColor="white"
            style={{color:'#A769B2',border:'2px solid #A769B2'}}
            >
                SAÍDA
            </ButtonContainer>
           <NewPaymentModal 
           input={input}
           isOpen={isPaymentModalOpen}
           onRequestClose={handleClosePaymentModal}
           
           />
        </Container>
        
    )
}