import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import NewIncidentsStep1 from "./components/Incidents/NewIncidentsStep1"
import NewIncidentStep2 from './components/Incidents/NewIncidentStep2';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incidents" element={<Dashboard />} />
        <Route path="incidents/step1" element={<NewIncidentsStep1 />} />

        <Route path="incidents/step2" element={<NewIncidentStep2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
