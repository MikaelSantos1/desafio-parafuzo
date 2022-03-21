import { Container, TitleContainer, Card } from "./styles"
import Arrow from '../../assets/arrow.svg'
import { useEffect, useState } from "react"
import { api } from '../../service/api'
import { usePlate } from "../../hooks/Context/UserPlate"
import { useRegisterDetails } from "../../hooks/Context/RegisterDetails"
import { Link } from "react-router-dom"
export function Historic() {

    const [historic, setHistoric] = useState([])
    const { setRegisterDetails } = useRegisterDetails()
    const { plate } = usePlate()
    useEffect(() => {
        const fetchHistoricData = async () => {
            const { data } = await api.get(`parking/${plate}`)
            console.log(data)
            const formatedValues =
                data.map((data) => {
                    return {
                        placa: plate,
                        time: data.time
                            .replace('days', 'd')
                            .replace('hours', 'h')
                            .replace('minutes', 'min')
                            .replace('seconds', 's')
                            .replace(/ /g, ""),
                        payment: data.paid === true ? 'Pago' : '-',
                        status: data.left === true ? 'saiu' : 'estacionado'
                    }
                })
            setHistoric(formatedValues)
        }
        fetchHistoricData()
    }, [])



    return (
        <Container>
            <TitleContainer>
                <Link to='/out' >
                <img src={Arrow} alt="seta para esquerda" ></img>
                </Link>
                <h3>Placa {plate}</h3>
            </TitleContainer>
            {
                historic.map((data, i) =>

                    <Card key={i} onClick={() => { setRegisterDetails(data) }}>
                        <Link  className="container-link"to='/details' key={i}>
                            <div>
                                <span>Tempo atual</span>
                                <h4>{data.time}</h4>
                            </div>

                            <div>
                                <span>Pagamento</span>
                                <h4>{data.payment}</h4>
                            </div>
                        </Link>
                    </Card>
                )
            }


        </Container>
    )
}
