import Modal from "react-modal/lib/components/Modal"
import { ButtonContainer } from "../../Button/styles"
import { Container } from "../styles"
import { LoadScreen } from "../../LoadScreen"
import {Button} from '../../Button'
import { useState } from "react"
import { api } from "../../../service/api"
export function NewExitModal({ isOpen, onRequestClose, input ,text,buttonText}) {
   
    const [load, setLoad] = useState(false)

    function handleExit() {
        api.post(`parking/${input}/out`)
    }
    console.log(load)
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}
        >
        <Container>
            
        <p className="exit-modal">{text}</p>
            <h1>{input}</h1>

            <Button 
            activeColor="purple"
            isButtonActive={true}
           
            >
                {buttonText}
            </Button>

            <Button 
            onClick={onRequestClose}
            isButtonActive={true}
            activeColor="white"
            style={{color:'#00BCD4'}}
            >
               Voltar
            </Button>   
            </Container>




        </Modal>
    )
}