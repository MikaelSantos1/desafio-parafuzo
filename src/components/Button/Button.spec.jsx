import * as React from 'react';
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
    
    const button= screen.getByText('CONFIRMAR ENTRADA')
    expect(screen.getByText('CONFIRMAR ENTRADA')).toBeInTheDocument()
    expect(button).toHaveStyle('background-color:#28DD91')
    })
})