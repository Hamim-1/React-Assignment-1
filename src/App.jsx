import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"

import NewIncidentsStep1 from "./components/Incidents/NewIncidentsStep1"
import NewIncidentStep2 from './components/Incidents/NewIncidentStep2';
import NewIncidentStep3 from './components/Incidents/NewIncidentStep3';
import NewIncidentStep4 from './components/Incidents/NewIncidentStep4';
import Locations from './components/locations/Locations';
import Home from "./components/dashboard/Home.jsx";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/incidents" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/incidents/step1" element={<NewIncidentsStep1 />} />
        <Route path="/incidents/step2" element={<NewIncidentStep2 />} />
        <Route path="/incidents/step3" element={<NewIncidentStep3 />} />
        <Route path="/incidents/step3" element={<NewIncidentStep3 />} />
        <Route path="/incidents/step4" element={<NewIncidentStep4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
