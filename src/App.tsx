
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/app.router"

function App() {

  return (
    // <Router>
    //   <Navbar />
    //   <div className="pt-16">

    //     <Routes>

    //       {/* SECCION DE RUTAS PARA EL PORTFOLIO */}
    //       <Route path='/' element={<PortfolioLanding />} />

    //       {/* SECCION DE RUTAS PARA EL LOG */}
    //       <Route path='/log'>
    //         <Route index element={<LogPage />} />
    //         <Route path='logs' element={<LogList />} />
    //         <Route path=":slug" element={<LogDetail />} />
    //       </Route>

    //       <Route path='/franklin'>
    //         <Route index element={<FranklinApp />} />

    //       </Route>

    //       {/* SECCION DE RUTAS PARA LA PARTE DE AUTENTICACION */}
    //       <Route path="/login" element={<Login />} />

    //       {/* Rutas protegidas */}
    //       <Route element={<ProtectedRoute />}>
    //         {/* Todas las rutas aquí dentro requieren estar logueado */}            
    //         {/* Puedes agregar más como /admin/edit-log/:id aquí */}
    //         <Route path="/admin/new-log" element={<NewLog />} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
