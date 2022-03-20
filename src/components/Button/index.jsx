import { ButtonContainer } from "./styles"

export function Button({children,...rest}){
    
    return(
        <ButtonContainer {...rest} >{children} </ButtonContainer>
    )
}