import BuildingPage from "./apps/blog/Building"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { LogList } from "./apps/blog/LogList"
import LogDetail from "./apps/blog/LogDetail"
import Login from "./apps/blog/admin/Login"
import { ProtectedRoute } from "./shared/components/auth/ProtectedRoute"
import  NewLog from "./apps/blog/admin/NewLog"

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
          <Route path="/admin/new-log" element={<NewLog />} />
          {/* Puedes agregar más como /admin/edit-log/:id aquí */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
