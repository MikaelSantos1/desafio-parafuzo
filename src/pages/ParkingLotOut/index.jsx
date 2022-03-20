import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, InputParkingLot } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { api } from "../../service/api";
import { ButtonContainer } from "../../components/Button/styles";
import { NewPaymentModal } from "../../components/Modal/NewPaymentModal";
import { NewExitModal } from "../../components/Modal/NewExitModal";
Modal.setAppElement('#root')

export function ParkingLotOut() {

    const [input,setInput]= useState('')
    const [activeButton,setActiveButton]=useState(false)
    const [error,setError]=useState()
    const [isPaymentModalOpen,setIsPaymentModalOpen]=useState(false)
    const [isExitModalOpen,setIsExitModalOpen]=useState(false)
    const [done,setDone]=useState(false)

   
    function handleOpenPaymentModal(){
        setIsPaymentModalOpen(true)
    }
    function handleClosePaymentModal(){
        setIsPaymentModalOpen(false)
    }

    function handleOpenExitModal(){
        setIsExitModalOpen(true)
    }
    function handleCloseExitModal(){
        setIsExitModalOpen(false)
    }
useEffect(()=>{
    if(done===true){
        setIsExitModalOpen(true)
        setIsPaymentModalOpen(false)
    }  
},[done])
    

    useEffect(()=>{
        if(input.length===8){
            setActiveButton(true)
        }
        else{
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
            <Button 
            onClick={handleOpenPaymentModal}
            handleClosePaymentModal={handleClosePaymentModal}
            isButtonActive={activeButton}
            activeColor="purple"
            >
                Pagamento
            </Button>


            <Button 
            onClick={handleOpenExitModal}
            
            isButtonActive={true}
            activeColor="white"
            style={{color:'#A769B2',border:'2px solid #A769B2'}}
            >
                SAÍDA
            </Button>

           <NewPaymentModal 
           input={input}
           isOpen={isPaymentModalOpen}
           onRequestClose={handleClosePaymentModal}
           text='Confima o pagamento da placa abaixo?'
           buttonText="Confirmar"
           done={done}
           setDone={setDone}
          
           />

        <NewExitModal 
           input={input}
           isOpen={isExitModalOpen}
           onRequestClose={handleCloseExitModal}
           text='Confirma a saída do veiculo da placa abaixo?'
           buttonText="Liberar Saída"
          
           />

        </Container>
        
    )
}