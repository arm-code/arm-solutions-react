
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { LogList } from "./apps/blog/LogList"
import LogDetail from "./apps/blog/LogDetail"
import Login from "./apps/blog/admin/Login"
import { ProtectedRoute } from "./shared/components/auth/ProtectedRoute"
import NewLog from "./apps/blog/admin/NewLog"
import LogPage from "./apps/blog/LogPage"
import PortfolioLanding from "./apps/portfolio/PortfolioLanding"

function App() {

  return (
    <Router>
      <Routes>

        {/* SECCION DE RUTAS PARA EL PORTFOLIO */}
        <Route path='/' element={<PortfolioLanding/>} />

        {/* SECCION DE RUTAS PARA EL LOG */}
        <Route path='/log'>
          <Route index element={<LogPage />} />
          <Route path='logs' element={<LogList />} />
          <Route path=":slug" element={<LogDetail />} />
        </Route>

        {/* SECCION DE RUTAS PARA LA PARTE DE AUTENTICACION */}
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
