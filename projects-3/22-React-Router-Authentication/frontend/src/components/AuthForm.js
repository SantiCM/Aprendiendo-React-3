
import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

// form del auth
function AuthForm() {

  // recojemos la data de la accion
  const data = useActionData()

  // la navegacion
  const navigation = useNavigation()

  // damos el searh params de los searchs de la pages de autenticacion
  const [searchParams] = useSearchParams()

  // islogin es la busqueda de los params del get del mode que sea igual al login
  const isLogin = searchParams.get("mode") === "login"

  // y que se haga submit que venga de la navegacion del estado que sea igual al submit
  const isSubmiting = navigation.state === "submitting"

  return (
   
    <>

      { /* Damos el form con su metodo post */ }

      <Form method="post" className={classes.form}>

        { /* Si es login, mostramos el texto de isLogin sino el crear un nuevo usuario */ }

        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>

        { /* Damos la data de la accion, y si es asi damos la data de los errores */ }

        {data && data.errors && <ul>

          { /* Damos del objeto de los valores, damos la data de los error y lo mapeamos del err */ }

          {Object.values(data.errors).map((err) => (
            
            // y damos los errores
            <li key={err}>{err}</li>
          
          ))}  
          
        </ul>}

        { /* Damos la data de la accion, y si es asi damos la data de los mensajes y lo mostramos */ }     
        {data && data.message && <p>{data.message}</p>}

        <p>
    
          <label htmlFor="email">Email</label>
    
          <input id="email" type="email" name="email" required />
    
        </p>
    
        <p>
    
          <label htmlFor="image">Password</label>
    
          <input id="password" type="password" name="password" required />
    
        </p>
    
        <div className={classes.actions}>
          
          { /* Damos el link del router y si el ?mode es igual al login si es asi damos el singup sino el login */ }

          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            
            { /* Si es login damos el crear nuevo usario sino el login */ }

            {isLogin ? 'Create new user' : 'Login'}
    
          </Link>
            
          { /* Damos un buton que lo desabilitamos a la hora de hacer submit y si es asi mostramos el submitting sino el save */ }

          <button disabled={isSubmiting}>{isSubmiting ? "Submitting..." : "Save"}</button>
    
        </div>
    
      </Form>
    
    </>
  
  );

}

export default AuthForm;