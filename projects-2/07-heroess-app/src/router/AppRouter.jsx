import { Route, Routes } from "react-router-dom"

import { LoginPages } from "../auth/pages/LoginPages"

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="/login" element=
          {
        
            <PublicRoutes>

              <LoginPages></LoginPages>

            </PublicRoutes>
        
          }
        >

        

        </Route>
      
        {/*<Route path="login" element={<LoginPages></LoginPages>}></Route>*/}

        <Route path="/*" element=

          {

            <PrivateRouter>
          
              <HeroesRoutes></HeroesRoutes>
          
            </PrivateRouter>
          
          }
        
        >

        </Route>
       

      </Routes>
    
    </>
  )
}
