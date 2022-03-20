import Modal from "react-modal/lib/components/Modal"
import { ButtonContainer } from "../Button/styles"
import { useNavigate } from "react-router-dom"
import { LoadScreen } from "../LoadScreen"
import { useState } from "react"
export function NewPaymentModal({ isOpen, onRequestClose, input }) {
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)

    function handleTeste() {
        
    }
    console.log(load)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            
            
        <p>Confima o pagamento da placa abaixo?</p>
            <h1>{input}</h1>

            <ButtonContainer 
            activeColor="purple"
            isButtonActive={true}
           
            >
                Pagamento
            </ButtonContainer>

            <ButtonContainer 
            onClick={handleTeste}
            isButtonActive={true}
            activeColor="white"
            style={{color:'#00BCD4'}}
            >
                SAÍDA
            </ButtonContainer>   
          
            
            





        </Modal>
    )
}