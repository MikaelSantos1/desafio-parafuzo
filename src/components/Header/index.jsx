import { Container } from "./styles"
import Logo from '../../assets/avatar_parking.svg'
export function Header(){
    return(
        <Container>
            <div><img src={Logo} alt="logo" /></div>
        </Container>
    )
}