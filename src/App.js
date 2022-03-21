import { Header } from "./components/Header";
import { ParkingLotIn } from "./pages/ParkingLotIn";
import { ParkingLotOut } from "./pages/ParkingLotOut";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ParkingLotSelect } from './components/ParkingLotSelect'
import { Historic } from "./pages/Historic";
import UserPlateProvider from "./hooks/Context/UserPlate";
import RegisterDetailsProvider from "./hooks/Context/RegisterDetails";
import { Detail } from "./pages/Detail";

function App() {

  return (
    <UserPlateProvider>
      <RegisterDetailsProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<ParkingLotIn />} />

          <Route path="/in" element={<ParkingLotIn />} />
          <Route path="/out" element={<ParkingLotOut />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/details" element={<Detail />} />


        </Routes>
      </BrowserRouter>
      </RegisterDetailsProvider>
    </UserPlateProvider>
  );
}

export default App;
