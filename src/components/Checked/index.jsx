import DoneImg from '../../assets/round-done-button.png'
import { Container } from '../LoadScreen/styles'
export function Checked ({children}){
    return (
        <Container>
            <img src={DoneImg} alt="Done icon" />
            <p>{children}</p>
        </Container>
    )
}