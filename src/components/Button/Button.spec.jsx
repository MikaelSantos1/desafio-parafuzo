import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '.'
describe('Button component', () => {
    it('should be to render a button correctly', () => {
        render(
            <Button
                isButtonActive={true}
                activeColor="green">
                CONFIRMAR ENTRADA
            </Button>)
    
    expect(screen.getByText('CONFIRMAR ENTRADA')).toBeInTheDocument()
    
    })
})