import BuildingPage from "./pages/Building"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import {LogList} from "./pages/LogList"

function App() {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<BuildingPage />} />
      <Route path="/log" element={<LogList />} />
    </Routes>
  </Router>
  )
}

export default App
