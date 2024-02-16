import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

// Autenticacion Pagina
function AuthenticationPage() {

  // damos el form del auth
  return <AuthForm />;

}

export default AuthenticationPage;

// Damos la accion
export const Action = async ({request}) => {

  // nuevo url de la request del url que viene de los params 
  const searchParams = new URL(request.url).searchParams

  // el modo es de la buscada se le da el get del mode y el login
  const mode = searchParams.get("mode") || "login"

  // si el mode es diferente a login y el mode es diferente a singup
  if(mode !== "login" && mode !== "signup" ) {

    // damos el error 
    throw json ({message: "Unsopported mode."}, {status: 422})
  
  }

  // recojemos la data del await de la formData
  const data = await request.formData()

  // la data es 
  const authData = {
    
    // del email recojemos la data que viene del get del email
    email: data.get("email"),

    // del password recojemos la data que viene del get del password
    password: data.get("password")
  
  }

  // la respuesta es el fetch de la peticion mas el modde
  const response = await fetch("http://localhost:8080/" + mode, {

    //metodo posteo 
    method: "POST",

    // damos los headers clasicos
    headers: {
      
      "Content-Type": "application/json"
    
    },

    // el body es el json que se convierte en string de la data del email y el password
    body: JSON.stringify(authData)

  })

  // si la respuesta es 422 y 401 osea que salio todo bien
  if(response.status === 422 || response.status === 401) {
    
    // damos la respuesta
    return response
  
  }

  // si no es asi 
  if(!response.ok) {
    
    // damos el error con su status
    throw json ({message: "Could not authenticate user"}, {status: 500})
  
  }

  // de la dta damos el await del response
  const resData = await response.json()

  // recojemos el token de esa data que viene del token
  const token = resData.token;

  // y del local storage damos el dar item del token 
  localStorage.setItem('token', token);

  // creamos una nueva fecha
  const expiration = new Date()

  // establecer una hora en horas, y le damos una hora mas
  expiration.setHours(expiration.getDate.getHours() + 1)

  // lo damos el local storage y le damos el toISOString para dar una cadena estandarizada
  localStorage.setItem('expiration', expiration.toISOString());

  // cuando pase nos redireccionamos a la pagina por defecto
  return redirect("/")

}