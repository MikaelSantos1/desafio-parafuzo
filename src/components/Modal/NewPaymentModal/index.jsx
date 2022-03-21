import Modal from "react-modal/lib/components/Modal"

import { Button } from "../../Button"
import { Container } from "../styles"
import { LoadScreen } from "../../LoadScreen"
import { Checked } from '../../Checked'
import { useEffect, useState } from "react"
import { api } from "../../../service/api"

export function NewPaymentModal({
    isOpen,
    onRequestClose,
    input,
    text,
    buttonText,
    error,
    setError
}) {
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)
    const [isPayed,setIsPayed]=useState(false)
    useEffect(() => {
       
        if (error) {
            setLoading(false)
            onRequestClose()
        }
    }, [error])

    const handlePayment = async () => {
        try {
            setLoading(true)
            await api.post(`parking/${input}/pay`)

            setTimeout(() => {
                setLoading(false)
                setDone(true)
            }, 1000);
            setTimeout(() => {
                onRequestClose()
                setDone(false)
            }, 3000);
            setIsPayed(true)
        } catch (err) {
            setError(err.response.data.errors.plate)
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
                        </> : loading === true && done === false ? <LoadScreen>Confirmando...</LoadScreen>
                            : <Checked>PAGO!</Checked>
                }
            </Container>
        </Modal>
    )
}