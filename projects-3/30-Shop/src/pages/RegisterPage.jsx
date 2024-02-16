import { Link} from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingEmailPassword } from "../store/auth/thunks";
import "./css/Form.css"

//Esta variable es para que no haya problema con la renderizacion
const formData = {

  email: "" ,
  
  password: "",

  displayName: ""

}

// Las validaciones
const formValidations = {

  // Si el email, su valor es valor que no incluye el @, dice esto
  email: [ ( value)  => value.includes("@"), "El correo debe tener un @ "],

  // Si el password,su valor es valor que incluye que el valor.length es menor a 6 no pasa, dices estooo....
  password: [ ( value)  => value.length >= 6, "La contraseña tiene que tener mas de 6 letras o caracteres"],

  // Si el displayName su valor es valor que incluye que el valor.length es menor a 1 no pasa, dices estooo....
  displayName: [ ( value)  => value.length >= 1, "El nombre es OBLIGATORIO"],

}

export const RegisterPage = () => {

  //mandamos llamar el dispatch
  const dispatch = useDispatch()

  //mandamos llamar un usestate en falso
  const [formSubmitted, setFormSubmitted] = useState(false)

  //desctucturamos el estado y el error con el useSelector del auth
  const {status, errorMessage} = useSelector(state => state.auth)

  // forma de anular los botones
  // useMemo para memorizar y una funcion del status si es igual al cheking
  // como dependencia el status
  const isCheckingAuthenticade = useMemo(() => status === "checking", [status])

  const {

    // mandamos todas las propiedades del auth y del useForm (hook)

    displayName, email, password, onInputChanhge, formState, 
    
    isFormValid, displayNameValid, emailValid, passwordValid 
  
  }  = useForm(formData, formValidations) // que recibe la renderizacion (formData) y las validaciones del formulario (formValidations)


  // El onsubmit en el form
  // Recibimos el evento
  const onSubmit = (event) => {
    
    // el evento que va a ser prevenido por defautl
    event.preventDefault()

    // si no existe el valid retorna
    if(!isFormValid) return

    // el otro estado del useState va a estar en true ahora
    setFormSubmitted(true)
    
    // dispatch de creacion de los campos, mandando el estado inicial de el hook useForm
    dispatch(startCreatingEmailPassword(formState))

  }

  return (

    <div className="register">

      <form onClick={onSubmit}>
        
        <div className="container-form-register">

          <h1>Login Up</h1>

          <div className="form-box">
            
            <input
              className="inputs-register"
              label="Nombre Completo"
              type="text"
              placeholder="Ingresa Tu Nombre Completo"
              name="displayName"
              value= {displayName}
              onChange={onInputChanhge}
              onError={!!displayNameValid && formSubmitted}
            /> 

            {displayNameValid && <span className="valid-p">{formValidations.displayName}</span>}

            <input
              className="inputs-register"
              label="Correo"
              type="email"
              placeholder="correodegoogle@gmail.com"
              fullWidth
              name="email"
              value= {email}
              onChange={onInputChanhge}
              onError={!!emailValid && formSubmitted} 

            />

            {emailValid && <span className="valid-p">{formValidations.email}</span>}

            <input
              className="inputs-register"
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              name="password"
              value= {password}
              onChange={onInputChanhge}
              onError={!!passwordValid && formSubmitted }
              //helperText={passwordValid}
            >

            </input> 

            {passwordValid && <span className="valid-p">{formValidations.password}</span>}
      
          </div>

          <div className="form-box-2-alert" style={{display: !!errorMessage ? <p>{errorMessage}</p> : "none"}}></div>

          <div className="form-box-3-button">

            <button className="form-button-singup" disabled={isCheckingAuthenticade} type="submit">          
                
              <p>Crear Cuenta</p>
          
            </button>
          
          </div>

          <div className="form-box-3">
            
            <p>¿Ya tienes una cuenta?</p>
            
            <Link style={{textDecoration: "none"}} to="/login">

              <p>Ingresar</p>
            
            </Link>
          
          </div>
   
        </div>
        
      </form>
    
    </div>
  
  );

};