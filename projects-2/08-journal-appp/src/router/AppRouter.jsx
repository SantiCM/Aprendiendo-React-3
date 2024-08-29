import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { ChekingAuth } from "../ui/components/ChekingAuth"
import { useCheckAuth } from "../hooks"


export const AppRouter = () => {

  const status = useCheckAuth()
  
  if(status === "cheking") {
  
    return <ChekingAuth></ChekingAuth>
  
  }

  return (
  
  <Routes>

    {
    
      (status === "authenticed") 
      
      ? <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route> 
      
      : <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route> 
    
    }

    <Route path="/*" element={<Navigate to="/auth/login"></Navigate>}></Route>

    {/*Login y registro, se refiere que para ir al registro o login es con /auth/login o /auth/register */}

    {/*<Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>*/}

    {/*App, este es el por defecto de la pagina */ }

    {/*<Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>*/}

    </Routes>
  )
}
