import { InputParkingLot,Form } from "./styles"
import { useForm } from "react-hook-form";
export function InputPlate({input,setInput,error,setError,...rest}) {
   
    return (
        <>
            <label>Número da placa:</label>
            <InputParkingLot
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 type="text"
                 placeholder="AAA-0000"
                 style={error ? { color: 'red' } : {}}
            />
            
        </>
    )
}