import { useState } from "react"
import "./App.css"
import { PointerMove } from "./components/PointerMove"

function App() {

  const [mounted, setMounted] = useState(true)

  return (

    <main style={{display: "flex", flexDirection: "column", gap: "8px"}}>

      {mounted && <PointerMove></PointerMove>}

      <button 
      
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