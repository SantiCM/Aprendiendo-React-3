import { useEffect, useReducer } from "react"

// creamos una interface del state del auth
interface AuthState {

  // validar es valor boolean
  validando: boolean

  // el token puede ser string o nulo
  token: string | null
  
  // el username y el nombre como string
  username: string
  
  nombre: string

}

// damos un estado inicial que se guia de la interface de arriba
const initialState: AuthState = {

  // damos el validando en true 
  validando : true,

  // el token en nulo
  token: null,

  // el user no lo sabemos ni el nombre
  username: "",

  nombre: ""

}

// damos una type que es la accion del payload
type LoginActionPayload = { 

  // donde el username sera un string
  username: string

  // el nombre tambien
  nombre: string

}

// dampos el auth de la action
// recibe el tipo del logout y el tipo del login que tambien tiene el payload que es el type de arriba
type AuthAction = | { type: "logout" } | {type: "login", payload: LoginActionPayload}

// reducr, damos el estado que es la interface y la accion que son los tipos de ariba
const authReducer = ( state: AuthState, action: AuthAction ):AuthState => {

  // damos un switch donde si la accion que viene del type
  switch (action.type) {

    // es logout
    case "logout":

      // retornamos
      return {

        // que el validando sera falso
        validando: false,

        // el token nulo porque esta fuera
        token: null,

        // el nombre nada al igual que el username
        nombre: "",

        username: ""
      
      }

      // en el caso del login
    case "login": {

      // recojemos de la accion el nombre y el username
      const {nombre, username} = action.payload
      
      return {

        // valindando en false
        validando: false,

        // token fictisio
        token: "abc121",

        // damos el nombre y el username de arriba
        nombre,

        username
      
      }

    }
  
    default:

    // por default damos el estado
      return state
  
  }

}

export const Login = () => {

  // damos el reducer del auth y del estado inicial y recojemos todo
  const [ { validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

  // damos un efecto
  useEffect(() => {

    // donde por 1.5 segundos 
    setTimeout(() => {

      // se dara el dispatch del logout
      dispatch( { type: "logout" } )
      
    }, 1500);
  
  }, [])

  // Del login 
  const login = () => {

    // el dispatch
    dispatch({ 

      // del tipo login
      type: "login",

      // el payload
      payload: {

        // damos el nombre
        nombre: "Santiago",

        // el usuario
        username: "STRIDER" 
      
      } 
    
    })
  
  }

  // el logout es el type
  const logout = () => {
    
    dispatch({ 
      
      type: "logout",
        
    })
  
  } 

  // si valindando se da, damos el texto de VALIDANDOOOO
  if(validando) {
  
    return (
      
      <>

        <div className="alert alert-info">Validandooo....</div>

      </>

    )
  
  }
  
  return (
  
    <>

      <h3>Login</h3>      

      {

        // si el token pasa 
        (token) 

        // damos el auth
        ? <div className="alert alert-success">Autenticado como {nombre}</div> 

        // si no damos este mensaje
        : <div className="alert alert-danger">NO Autenticado....</div>
      
      }

      {

        // si el token pasa 
        (token) 

        // damos el boton de logout
        ? <button className="btn btn-danger mt-2" onClick={logout}>Logout</button>

        // si no damos el login 
        : <button className="btn btn-primary mt-2" onClick={login}>Login</button>
      
      }
    
    </>
  
  )

}