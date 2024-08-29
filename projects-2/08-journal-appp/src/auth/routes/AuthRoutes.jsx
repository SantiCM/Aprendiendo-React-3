
import { Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage} from '../pages/LoginPage'


export const AuthRoutes = () => {
  return (
    <Routes>
      
      {/*Route que va al login que da el LoginPage */}
      <Route path='login' element={<LoginPage></LoginPage>}></Route>

      {/*Route que va al register que da el RegisterPage */}
      <Route path='register' element={<RegisterPage></RegisterPage>}></Route>

      {/*Ruta que lleva al path por defecto que va a ser un Navigate a la ruta 
        /auth/login que es la de que ya tienes una cuenta
      
      */}
      <Route path='/*' element={<Navigate to="/auth/login"></Navigate>}></Route>

    </Routes>
  )
}

// Path login en el componente Login Page

// Path register en el componente RegisterPage

// Si es una ruta no existente te lleva al login