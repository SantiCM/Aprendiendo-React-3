import { Contador } from "./components/useState/Contador"
import { Login } from "./components/useReducer/Login"
import { Funciones } from "./Typescript/Funciones"
import { ObjetosLiterales } from "./Typescript/ObjetosLiterales"
import { TiposBasicos } from "./Typescript/TiposBasicos"
import { Usuarios } from "./components/PeticionesHTTP/Usuarios"
import { Formularios } from "./components/Formularios/Formularios"

const App = () => {

  return (
  
    <div className="mt-2">
      
      <p>Introduccion A TS React</p>

      <hr></hr>

      <TiposBasicos></TiposBasicos>

      <hr></hr>
      <hr></hr>

      <ObjetosLiterales></ObjetosLiterales>

      <hr></hr>
      <hr></hr>

      <Funciones></Funciones>

      <hr></hr>
      <hr></hr>

      <Contador></Contador>

      <hr></hr>
      <hr></hr>

      {/*<Login></Login>*/}

      <hr></hr>
      <hr></hr>

      <Usuarios></Usuarios>

      <hr></hr>
      <hr></hr>

      <Formularios></Formularios>

    </div>
  
  )

}

export default App