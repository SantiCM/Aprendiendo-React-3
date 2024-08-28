import { useRef, useState } from "react";

export default function Login() {

  //damos un estado para la validacion del email en falso
  const [emailIsInvalid, setEmailIsInvalid] = useState(false)

  // damos las ref
  const email = useRef()

  const password = useRef()

  // se da una variable para el submit del formulario, dando el evento
  const handleSubmit = (event) => {

    // evita el evento por defecto
    event.preventDefault()
    
    // damos el email con su current y su valor
    const enteredEmail = email.current.value

    // damos el password con su current y su valor
    const enteredPassword= password.current.value

    // si el email es valido eas igual a que el email sea falso y que incluya el arroba
    const emailIsValid = !enteredEmail.includes("@")

    // si es no esta
    if(!emailIsValid) {

      // damos el segundo estado en true
      setEmailIsInvalid(true)

      // lo retornamos
      return
    
    }

    // damos el segundo esyado en falso
    setEmailIsInvalid(false)

    // Forma no tan correcta de resetear con refs

    //email.current.value = ""

    //password.current.value = ""
  
  }
  
  return (

    // damos el onSubmit 
    <form onSubmit={handleSubmit}>
      
      <h2>Login</h2>

      <div className="control-row">
        
        <div className="control no-margin">
          
          <label htmlFor="email">Email</label>
          
          <input id="email" type="email" name="email" ref={email}/>

          <div className="control-error">
            
            {/*Si el email no es valido damos el mensaje de error */}

            {emailIsInvalid && <p>Please email address</p>}

          </div>
        
        </div>

        <div className="control no-margin">
          
          <label htmlFor="password">Password</label>
          
          <input id="password" type="password" name="password" ref={password}/>
        
        </div>
      
      </div>

      <p className="form-actions">
        
        <button className="button button-flat">Reset</button>
        
        <button className="button" onClick={handleSubmit}>Login</button>
      
      </p>
    
    </form>
  
  );

}