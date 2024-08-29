import { Route, Routes } from "react-router";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {
  //const authStatus = "not-authenticated" // authenticated, not-authenticated

  // llamamos el status y el cheking del token del store del auth
  const { status, checkAuthToken } = useAuthStore();

  // efecto de ese token 
  useEffect(() => {

    checkAuthToken();
  
  }, []);

  // si el status es "cheking" retorna....
  if (status === "cheking") {
  
    return <h3>Cargandooo.....</h3>;
  
  }

  return (
  
    <Routes>
    
      {
        // si NO autenticado
        
        //(status === "not-authenticed")
        
        // me lleva a la pagina de autenticacion
        
        // ? <Route path="/auth/*" element={<LoginPage></LoginPage>} ></Route>
        
        // si lo estoy me manda a la pagina
        
        //: <Route path="/*" element={<CalendarPage></CalendarPage>}></Route>
     
     }

      {
     
        //si NO autenticado
        
        status === "not-authenticed" ? (
        
          // me lleva a la pagina de autenticacion
        
          <>
          
            <Route path="/auth/*" element={<LoginPage></LoginPage>}></Route>

            {/*Si el link no esta nos redirecciona al login*/}
          
            <Route
          
              path="/*"
              element={<Navigate to="/auth/login"></Navigate>}
            
            ></Route>
          
          </>
        ) 
        : (
        
          //si lo estoy me manda a la pagina
        
          <>
          
            <Route path="/" element={<CalendarPage></CalendarPage>}></Route>

            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
          
          </>
        
        )
     
      }
    
    </Routes>
  
  );

};