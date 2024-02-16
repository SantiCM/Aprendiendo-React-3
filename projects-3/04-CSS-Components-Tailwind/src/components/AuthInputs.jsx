import { useState } from 'react';
import styled from 'styled-components';
import  CustomInput  from './Input';
import { Button } from './Button';


export default function AuthInputs() {

  const [enteredEmail, setEnteredEmail] = useState('');
  
  const [enteredPassword, setEnteredPassword] = useState('');
  
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
  
    if (identifier === 'email') {
  
      setEnteredEmail(value);
  
    } else {
  
      setEnteredPassword(value);
  
    }
  
  }

  function handleLogin() {
  
    setSubmitted(true);
  
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');

  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (

    <div id='auth-inputs' className='w-full max-w-md p-8 rounded shadow-md bg-gradient-to-b from-green-300 to-green-300 mx-auto'>

      <div className="flex flex-col gap-2 mb-6">

        { /* NOTA: Aqui para evitar el warning de el style-components se le pone un signo

            de interrogacion a los accesorios que desean utilizar,

            al igual se le tiene que poner ese signo a la hora de hacer la funcion
          
            */ 
        }

        <CustomInput
                  
          invalid={emailNotValid}

          label="Email"

          type="email"
          
          onChange={(event) => handleInputChange('email', event.target.value)}
        
        />

        <CustomInput
            
          invalid={passwordNotValid}
          
          label="Password"
          
          type="password"
          
          onChange={(event) => handleInputChange('password', event.target.value)}
          
        />

      </div>

      <div className="flex justify-end gap-4">
      
        <Button $click={handleLogin} type="button" className="text-black-500 hover:text-green-900" >
      
          Create a new account
      
        </Button>
      
        <Button onClick={handleLogin}>Sign In</Button>
      
      </div>
    
    </div>
  
  );

}