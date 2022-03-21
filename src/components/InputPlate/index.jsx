import { InputParkingLot } from "./styles"
import { usePlate } from "../../hooks/Context/UserPlate"
export function InputPlate({error,setError,...rest}) {
   const {plate,setPlate}=usePlate()
    return (
        <>
          
            <InputParkingLot
                 value={plate}
                 onChange={(e) => setPlate(e.target.value)}
                 type="text"
                 placeholder="AAA-0000"
                 style={error ? { color: 'red' } : {}}
            />
            
        </>
    )
}