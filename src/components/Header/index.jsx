import Hamburger from 'hamburger-react'
import { Container, MenuBurger } from "./styles"
import Logo from '../../assets/avatar_parking.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export function Header() {
    const [isOpen, setOpen] = useState(true)

    return (
        <Container>
            <div><img src={Logo} alt="logo" /></div>
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFF" />

            <MenuBurger show={isOpen}>
                <Link to='in' onClick={()=>{setOpen(false)}}>Entrada</Link>
                <Link to='out' onClick={()=>{setOpen(false)}}>Saida</Link>

            </MenuBurger>



        </Container>
    )
}