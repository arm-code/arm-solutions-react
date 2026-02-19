import BuildingPage from "./pages/Building"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import {LogList} from "./pages/LogList"
import LogDetail from "./pages/LogDetail"
import Login from "./pages/admin/Login"

function App() {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<BuildingPage />} />
      <Route path="/log" element={<LogList />} />
      <Route path="/log/:slug" element={<LogDetail />} />
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  </Router>
  )
}

export default App
