import '@testing-library/jest-dom'
import { render, screen ,getElementByRole} from '@testing-library/react'
import UserPlateProvider, { usePlate } from '../../hooks/Context/UserPlate'
import userEvent from '@testing-library/user-event'
import {InputPlate} from './index'

describe('InputPlate component',()=>{

    const plate=''
    it('Should be able to set a new plate',()=>{
       
        render(
            <UserPlateProvider>
            <InputPlate 
            plate={plate}
           

           />
            </UserPlateProvider>
        )
       
        const inputEl=screen.getByPlaceholderText('AAA-0000')
        userEvent.type(inputEl, "ABC-1234");

        expect(inputEl.value).toEqual('ABC-1234');
        expect(inputEl).toBeInTheDocument()
    })
})