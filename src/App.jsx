import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Dashboard from "./components/dashboard/Dashboard"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Dashboard />
    </BrowserRouter>
  )
}

export default App
