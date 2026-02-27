
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { LogList } from "./apps/blog/LogList"
import LogDetail from "./apps/blog/LogDetail"
import Login from "./apps/blog/admin/Login"
import { ProtectedRoute } from "./shared/components/auth/ProtectedRoute"
import NewLog from "./apps/blog/admin/NewLog"
import LogPage from "./apps/blog/LogPage"
import PortfolioLanding from "./apps/portfolio/PortfolioLanding"
import FranklinApp from "./apps/franklin/FranklinApp"
import { Navbar } from "./shared/components/layout/Navbar"

function App() {

  return (
    <Router>
      <Navbar />
      <div className="pt-16">

        <Routes>

          {/* SECCION DE RUTAS PARA EL PORTFOLIO */}
          <Route path='/' element={<PortfolioLanding />} />

          {/* SECCION DE RUTAS PARA EL LOG */}
          <Route path='/log'>
            <Route index element={<LogPage />} />
            <Route path='logs' element={<LogList />} />
            <Route path=":slug" element={<LogDetail />} />
          </Route>

          <Route path='/franklin'>
            <Route index element={<FranklinApp />} />

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
      </div>
    </Router>
  )
}

export default App
