import BuildingPage from "./pages/Building"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import {LogList} from "./pages/LogList"
import LogDetail from "./pages/LogDetail"

function App() {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<BuildingPage />} />
      <Route path="/log" element={<LogList />} />
      <Route path="/log/:slug" element={<LogDetail />} />
    </Routes>
  </Router>
  )
}

export default App
