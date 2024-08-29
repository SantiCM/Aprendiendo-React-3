import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


export const JournalRoutes = () => {
  
    return (

        // Las rutas
    
        <Routes>
            
            <Route path="/" element={<JournalPage></JournalPage>}></Route>

            { // JournalPage es la base de la pagina
                // Ruta inexistente te redirecciona a el JournalPage
            }

            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>

        </Routes>

    )
}

