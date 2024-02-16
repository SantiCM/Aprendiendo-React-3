import { useDispatch, useSelector } from "react-redux";
import { Link, Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { useForm } from "../hooks/useForm";
import { useMemo } from "react";
import { chekingGoogle, startLoginWithEmailPassword } from "../store/auth/thunks";
import "./css/Form.css"

//Esta variable es para que no haya problema con la renderizacion
const formData =  {

    email: "",

    password: ""

}

export const LoginPage = () => {

    // forma de anular los botones
    const {status, errorMessage} = useSelector(state => state.auth)

    // mandamos llamar el dispatch
    const dispatch = useDispatch()

    // aqui destucturamos email, password, onInputChanhge del formulario que recibe la data (renderizar exitoso)
    const {email, password, onInputChanhge}  = useForm(formData)

    // forma de anular los botones
    // useMemo para memorizar y una funcion del status si es igual al cheking
    // como dependencia el status
    const isAuthenticated =  useMemo(() => status === "cheking", [status])

    // El onsubmit en el form
    // Recibimos el evento
    const onSubmit = (event) => {
        // el evento que va a ser prevenido por defautl
        event.preventDefault()

        // dispatch de hacer que la cuenta pase recibiendo el email y password
        dispatch(startLoginWithEmailPassword({email, password}))
    
    }

    // Google 

    const onGoogleSingIn = (event) => {

        // el evento que va a ser prevenido por defautl
        //event.preventDefault()
        
        // dispatch de entrar con google 
        dispatch(chekingGoogle())
    
    }

  return (

    <div className="login">

        <form aria-label="submitForm" onSubmit={onSubmit}>

            <div className="container-form">

                <h1>Sing Up</h1>
       
                <div className="form-box">

                    <input className="inputs"
                        label="Correo"
                        type="email"
                        placeholder="correodegoogle@gmail.com"
                        name="email"
                        value={email}
                        onChange={onInputChanhge}
                    >

                    </input>

                    <input className="inputs"
                        label="Contraseña"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        name="password"
                        value={password}
                        onChange={onInputChanhge}
                    >   
                
                    </input>

                </div>

                <div className="form-box-2-alert" style={{display: !!errorMessage ? <p>{errorMessage}</p> : "none"}}></div>

                <div className="form-box-3-button">

                    <button className="form-button-login" type="submit">
                    
                        <p>Login</p>
                    
                    </button>

                    <button className="form-button-google" onClick={onGoogleSingIn} aria-label="google-btn">
                       
                        <Google style={{paddingTop: 5}}></Google>

                        <p>Google</p>
                    
                    </button>
                
                </div>


                <div className="form-box-3">

                    <Link style={{textDecoration: "none"}} color="inherit" to="/register">
                    
                        <p>Crea Tu Cuenta</p>
                    
                    </Link>
                
                </div>
        
            </div>
      
        </form>
    
    </div>

  
  );

};