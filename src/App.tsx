import BuildingPage from "./pages/Building"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { LogList } from "./pages/LogList"
import LogDetail from "./pages/LogDetail"
import Login from "./pages/admin/Login"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"

function App() {

  return (
    <Router>
      <Routes>

        {/* Rutas publicas */}
        <Route path="/" element={<BuildingPage />} />
        <Route path="/log" element={<LogList />} />
        <Route path="/log/:slug" element={<LogDetail />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          {/* Todas las rutas aquí dentro requieren estar logueado */}
          <Route path="/admin/new-log" element={<div>Formulario NewLog (Próximamente)</div>} />
          {/* Puedes agregar más como /admin/edit-log/:id aquí */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
