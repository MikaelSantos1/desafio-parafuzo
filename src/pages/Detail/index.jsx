import { useRegisterDetails } from "../../hooks/Context/RegisterDetails"
import { Container } from "./styles"
import Arrow from '../../assets/arrow.svg'
import { Link } from "react-router-dom"
export function Detail() {
    const { registerDetails } = useRegisterDetails()
    const{ placa,time,status}=registerDetails
   
    return (
        <Container>
            <Link to ='/historic'>
            <img src={Arrow} alt="seta-para-esquerda" />
            </Link>
            <div>
                <span>placa:</span>
                <h1>{placa}</h1>
                <span>status</span>
                <h4>{status}</h4>
                <span>Tempo atual</span>
                <h4>{time}</h4>
            </div>

        </Container>
    )
}