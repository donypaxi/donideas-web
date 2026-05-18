import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages"
import { EmpadronadosPage } from "../pages/EmpadronadosPage";
import { DelegadosPage } from "../pages/DelegadosPage";
import { ComunicadosPage } from "../pages/ComunicadosPage"
import { EmpadronamientoPage } from "../pages/EmpadronamientoPage";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/"  element={<HomePage/>}/>
            <Route path="/comunicados"  element={<ComunicadosPage/>}/>
            <Route path="/padron" element={<EmpadronadosPage />} />
            <Route path="/delegados" element={<DelegadosPage />} />
            <Route path="/empadronamiento" element={<EmpadronamientoPage />} />
        </Routes>
    </>
  )
}
