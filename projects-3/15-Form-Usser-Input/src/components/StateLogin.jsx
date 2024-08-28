import { useState } from "react";
import { Input } from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {

  // damos una variable donde desustruramos las propiedades y las renombramos
  const {
      
    value: emailValue, 
    handleInputChange: handleEmailChange,
    handleInputBur: handleEmailBlur, 
    hasError: emailHasError

    // viene del hook, recibe una cadena vacia
    // y el valor como argumento da el email que recibe el valor si es true damos el isNotEmpty y su valor
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value))

  const {
    
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBur: handlePasswordBlur, 
    hasError: passwordHasError

    // viene del hook, recibe una cadena vacia
    // y el valor como argumento que da e minLength que recibe el valor y el minimo sera 6 
  } = useInput("", (value) => hasMinLength(value, 6 ))

  // se da una variable para el submit del formulario, dando el evento
  const handleSubmit = (event) => {

    // evita el evento por defecto
    event.preventDefault()

    // si el email da el error y el password tambien
    if(emailHasError || passwordHasError) {
      
      // lo retornamos
      return
    
    }
  
  }

  return (

    // damos el onSubmit 
    <form onSubmit={handleSubmit}>
      
      <h2>Login</h2>

      <div className="control-row">

        <Input 
          
          label="Email" 
          
          id="email" 
          
          name="email"

          onBlur={handleEmailBlur}
          
          onChange={handleEmailChange} 
          
          value={emailValue}

          error={emailHasError && "Please enter a valid email"}
          
        >

        </Input>

        <Input 
          
          label="Password" 
          
          id="password" 
          
          name="password"

          onBlur={handlePasswordBlur}
          
          onChange={handlePasswordChange} 
          
          value={passwordValue}

          error={passwordHasError && "Please enter a valid password"}
          
        >

        </Input>
        
    
      </div>

      <p className="form-actions">
        
        <button className="button button-flat">Reset</button>
        
        <button className="button" onClick={handleSubmit}>Login</button>
      
      </p>
    
    </form>
  
  );

}