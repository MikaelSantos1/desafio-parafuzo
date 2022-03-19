import { InputParkingLot } from "./styles"
export function InputPlate({input,setInput,error,setError}) {
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