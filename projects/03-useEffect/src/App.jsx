import { useState } from "react"
import "./App.css"
import { PointerMove } from "./components/PointerMove"

// app
function App() {

  // estado de montar en true
  const [mounted, setMounted] = useState(true)

  return (

    <main style={{display: "flex", flexDirection: "column", gap: "8px"}}>

      {/* si hay montado damos el componente */}
      {mounted && <PointerMove></PointerMove>}

      <button 

        // al hacer click decimos que el segundo estado reciba que no existe el primer estado
        // activar y desactivar
        onClick={() => setMounted(!mounted)}
        
      > 

        {mounted ? "Desmontar el seguir puntero, si no es de tu agrado" 
         
         : "Recuperar el seguir puntero, por si cambiaste de opinion"

        }
      
      </button>
    
    </main>
    
  )
  
}

export default App