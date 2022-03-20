import { Header } from "./components/Header";
import { ParkingLotIn } from "./pages/ParkingLotIn";
import { ParkingLotOut } from "./pages/ParkingLotOut";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checked } from "./components/Checked";
import {LoadScreen} from './components/LoadScreen'
import {ParkingLotSelect} from './components/ParkingLotSelect'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <ParkingLotSelect />
      <Routes>
        <Route path="/" exact element={<ParkingLotIn />}/>
        <Route path="/loading" exact element={<LoadScreen>Registrando...</LoadScreen>}/>
        <Route path="/in" exact element={<ParkingLotIn/>}/>
        <Route path="/out" exact element={<ParkingLotOut/>}/>
        <Route path="/success" exact element={<Checked>Registrado!</Checked>}/>
      
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
