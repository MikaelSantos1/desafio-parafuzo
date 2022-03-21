import Modal from "react-modal/lib/components/Modal"
import { Container } from "../styles"
import { LoadScreen } from "../../LoadScreen"
import {Button} from '../../Button'
import {useState } from "react"
import { api } from "../../../service/api"
import { Checked } from "../../Checked"
import {usePlate} from '../../../hooks/Context/UserPlate'
export function NewExitModal({ 
    isOpen, 
    onRequestClose, 
    
    text,
    buttonText,
    error,
    setError
}) {
   
    const {plate} = usePlate()
    const [loading, setLoading] = useState(false)
    const [isPaid,setIsPaid]=useState(false)
    const [done,setDone]=useState(false)
    const handleExit=async() =>{
        
     const {data}= await api.get(`parking/${plate}`)
     if(data[data.length -1].paid){
        setIsPaid(true)
     }
    
     if(isPaid){
        setLoading(true)
        try{
            await api.post(`parking/${plate}/out`)
            setTimeout(() => {
                setLoading(false)
                setDone(true)
            }, 1000);
            setTimeout(() => {
                onRequestClose()
                setDone(false)
            }, 3000);
            setError('')
        }catch(err){
            setError(err.response.data.errors.plate)

        } 
     }else{
         setError('Você precisa pagar primeiro!')
         onRequestClose()
     }
    }
   
  
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}
        >
        <Container>
           {
                 loading === false && done === false ?
                 <>
        <p className="exit-modal">{text}</p>
        <h1>{plate}</h1>

        <Button 
        activeColor="purple"
        isButtonActive={true}
        onClick={handleExit}
        
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
        </>: loading === true && done === false ? <LoadScreen>Confirmando...</LoadScreen> 
           : <Checked>Saida liberada!</Checked>
           } 


            </Container>




        </Modal>
    )
}