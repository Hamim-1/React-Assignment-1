import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import Incidents from "./components/Incidents/Incidents"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      {/* <Dashboard /> */}
      <Incidents />
    </BrowserRouter>
  )
}

export default App
