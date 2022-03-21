import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, ContentContainer } from "./styles";
import Alert from '../../assets/ic_arlert.svg'
import { ParkingLotSelect } from "../../components/ParkingLotSelect";
import { NewPaymentModal } from "../../components/Modal/NewPaymentModal";
import { NewExitModal } from "../../components/Modal/NewExitModal";
import { InputPlate } from "../../components/InputPlate";
import  {usePlate} from '../../hooks/Context/UserPlate'
Modal.setAppElement('#root')

export function ParkingLotOut() {
    const{ plate,setPlate} = usePlate()
    
    const [activeButton, setActiveButton] = useState(false)
    const [error, setError] = useState()
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const [isExitModalOpen, setIsExitModalOpen] = useState(false)



    function handleOpenPaymentModal() {
        setIsPaymentModalOpen(true)
    }
    function handleClosePaymentModal() {
        setIsPaymentModalOpen(false)
    }

    function handleOpenExitModal() {
        setIsExitModalOpen(true)
    }
    function handleCloseExitModal() {
        setIsExitModalOpen(false)
    }


    useEffect(() => {
        if (plate.length === 8) {
            setActiveButton(true)
        }
        else {
            setActiveButton(false)
        }
        setError('')
    }, [plate])



    return (

        <Container>
            <ParkingLotSelect initialType={'output'} />
            <label>Número da placa:</label>
            <ContentContainer>



                <InputPlate
                    value={plate}
                    setInput={setPlate}
                    onChange={(e) => setPlate(e.target.value)}
                    type="text"
                    placeholder="AAA-0000"
                    style={error ? { color: 'red' } : {}}
                />

                {error ?
                    <div className="error"><img src={Alert} alt="alerta" />{error} </div>
                    : ''

                }
                <Button
                    onClick={handleOpenPaymentModal}
                    handleClosePaymentModal={handleClosePaymentModal}
                    isButtonActive={activeButton}
                    disabled={!activeButton}
                    activeColor="purple"
                >
                    Pagamento
                </Button>


                <Button
                    onClick={handleOpenExitModal}
                    disabled={!activeButton}
                    isButtonActive={true}
                    activeColor="white"
                    style={{ color: '#A769B2', border: '2px solid #A769B2' }}
                >
                    SAÍDA
                </Button>
                <Link to='/historic'>
                    <Button
                        disabled={!activeButton}
                        isButtonActive={true}
                        activeColor="white"
                        style={{ color: '#00BCD4' }}
                    >
                        Ver Histórico
                    </Button>
                </Link>

                <NewPaymentModal
                    input={plate}
                    isOpen={isPaymentModalOpen}
                    onRequestClose={handleClosePaymentModal}
                    text='Confima o pagamento da placa abaixo?'
                    buttonText="Confirmar"
                    error={error}
                    setError={setError}


                />

                <NewExitModal
                    input={plate}
                    isOpen={isExitModalOpen}
                    onRequestClose={handleCloseExitModal}
                    text='Confirma a saída do veiculo da placa abaixo?'
                    buttonText="Liberar Saída"
                    error={error}
                    setError={setError}
                />
            </ContentContainer>
        </Container>


    )
}