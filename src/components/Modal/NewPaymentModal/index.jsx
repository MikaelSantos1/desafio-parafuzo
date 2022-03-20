import Modal from "react-modal/lib/components/Modal"
import { ButtonContainer } from "../../Button/styles"
import { Button } from "../../Button"
import { Container } from "../styles"
import { LoadScreen } from "../../LoadScreen"
import { Checked } from '../../Checked'
import { useState } from "react"
import { api } from "../../../service/api"
export function NewPaymentModal({
    isOpen,
    onRequestClose,
    input,
    text,
    buttonText,



}) {
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)

    const handlePayment = async () => {
        try {
            setLoading(true)
            await api.post(`parking/${input}/pay`)

            setTimeout(() => {
                setLoading(false)
                setDone(true)
            }, 1000);
            setTimeout(() => {
                setDone(false)
            }, 3000);
        } catch (error) {
            console.log(error)
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
                            <p className="payment-modal">{text}</p>
                            <h1>{input}</h1>

                            <Button
                                activeColor="purple"
                                isButtonActive={true}
                                onClick={handlePayment}
                            >
                                {buttonText}
                            </Button>

                            <Button
                                onClick={onRequestClose}
                                isButtonActive={true}
                                activeColor="white"
                                style={{ color: '#00BCD4' }}
                            >
                                Voltar
                            </Button>
                        </> : loading === true && done === false ? <LoadScreen>Teste</LoadScreen>
                            : <Checked />
                }



            </Container>




        </Modal>
    )
}