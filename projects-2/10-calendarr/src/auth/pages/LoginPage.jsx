import { useEffect } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import "../pages/LoginPages.css";
import Swal from "sweetalert2";

// Para que no se renderize el formulario constantemente
// mandamos un variable del formulario de login
const loginFormFields = {

  loginEmail: "",

  loginPassword: "",

}

// y el registro 
const registerFormFields = {

  registerName: "",

  registerEmail: "",

  registerPassword: "",

  registerPassword2: "",

}

export const LoginPage = () => {

  // Del useAuthStor (reducer), tomamos el startLogin, errorMessage, startRegister
  const { startLogin, errorMessage, startRegister } = useAuthStore()

  // Del hook del useForm agarramos el 
  // loginEmail, loginPassword, 
  // onInputChanhge: onLoginInputChange  (lo renombramos )
  // y le mandamos la varibale 
  /*
    const loginFormFields = {
      loginEmail: "",
      loginPassword: "",
    }
  */
  const { loginEmail, loginPassword, onInputChanhge: onLoginInputChange } = useForm( loginFormFields )
  
  // NOTA: En este caso estamos haciendo el login y el register en la misma hoja
  // mandamos llamar registerName, registerEmail, registerPassword, registerPassword2, onInputChanhge: onRegisterInputChange
  // que viene del hook de useForm y le mandamos el 
  /*
    const registerFormFields = {
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerPassword2: "",
    }
  */ 
  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChanhge: onRegisterInputChange  } = useForm( registerFormFields )
  
  // Para el submit del login le mandamos el evento 
  // le decimos que ese evento este prevenido
  // y le mandamos el store de el startLogin que recibe el email y el password
  // que viene de la anterior variable 
  // email: loginEmail, password: loginPassword
  
  const loginSubmit = (event) => {
    
    event.preventDefault()

    startLogin({ email: loginEmail, password: loginPassword})

  }

  // Para el submit del register le mandamos el evento 
  // le decimos que ese evento este prevenido
  // y le mandamos una validacion 
  // Que si el password1 es diferente a el password 2 
  // le mandamos una alerta con Swal que no pasa y lo retornamos 
  // y le mandamos el store de el startRegister que recibe el email y el password y el name
  // que viene de la anterior variable 
  // email: loginEmail, password: loginPassword, registerName, 

  const registerSubmit = (event) => {
  
    event.preventDefault()

    if(registerPassword !== registerPassword2) {
      
      Swal.fire("Error en registro", "Contraseñas no son iguales", "error")

      return

        
    }

    startRegister(

      {
        name: registerName, 

        email: registerEmail,

        password: registerPassword,
      
      }
    
    )
  
  }

  // Mandamos un useEffect del errorMessage que 
  // Si el error es diferente de undefined
  // Mandamos el Swal que hay un error en la autenticacion

  useEffect(() => {
    
    if(errorMessage !== undefined) {
    
      Swal.fire("Error en la autenticacion", errorMessage, "error")
    
    }

    // mandamos como dependecia el error
  }, [errorMessage])
  

  // Aqui es un HTML basico de un formulario mandando cada uno de los campos: 
  // <form onSubmit={loginSubmit}>
  // name="loginEmail"
  // value={loginEmail}
  // onChange={onLoginInputChange}
  // y asi cambia sucesivamente 
  
  return (
  
    <div className="container login-container">
      
      <div className="row">
      
        <div className="col-md-6 login-form-1">
      
          <h3>Ingreso</h3>
      
          <form onSubmit={loginSubmit}>
      
            <div className="form-group mb-2">
      
              <input
      
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
             
              />
            
            </div>
            
            <div className="form-group mb-2">
            
              <input
            
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              
              />
            
            </div>
            
            <div className="d-grid gap-2">
            
              <input type="submit" className="btnSubmit" value="Login" />
            
            </div>
          
          </form>
        
        </div>

        <div className="col-md-6 login-form-2">
        
          <h3>Registro</h3>
        
          <form onSubmit={registerSubmit}>
        
            <div className="form-group mb-2">
        
              <input
        
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              
              />
            
            </div>
            
            <div className="form-group mb-2">
            
              <input
            
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              
              />
            
            </div>
            
            <div className="form-group mb-2">
            
              <input
              
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
              
              />
            
            </div>

            <div className="form-group mb-2">
            
              <input
            
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              
              />
            
            </div>

            <div className="d-grid gap-2">
            
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            
            </div>
          
          </form>
        
        </div>
      
      </div>
    
    </div>
  
  );

};