import { useEffect } from "react"
import { useState } from "react"

// mover el pointer
export function PointerMove() {

    // estado en false
    const [enabled, setEnabled] = useState(false)

    // estado de la posicion, "x" y "y" en cero
    const [position, setPosition] = useState( { x: 0, y: 0 } )
    
    // efecto
    useEffect(() => {
        
        // si se mueve, recibimos el ev
        const handleMove = (ev) => {
        
            const {clientX, clientY} = ev
            
            // la segunda posicion es el valor del ev de arriba
            setPosition( { x: clientX, y: clientY } )
  
        }
        
        // si lo activa, damos el window, damos el evento de mover el pointer y lo movemos
        if(enabled) {
        
            window.addEventListener("pointermove", handleMove)
      
        }
        
        // si no retornamos que se remueva 
        return () => {
        
            window.removeEventListener("pointermove", handleMove)
      
        }
        
        // le damos la dependencia del valor si se desmonta o no
        // porque justo eso, si se monta damos esto y si se desmonta igual
    }, [enabled])

    // efecto igual de arriba por estilos
    useEffect(() => {

        document.body.classList.toggle("no-cursor", enabled)

        return () => {
        
            document.body.classList.remove("no-cursor")
          
        }
      
    }, [enabled])
    
  
    return (
      
      <>
      
        <div style={{
  
        position: "absolute",
        backgroundColor: '#09f',
        //border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}></div>
  
      <button 
  
        onClick={() => setEnabled(!enabled)}
  
      >   {enabled ? "Desactivar" : "Activar"} seguir puntero
  
      </button>
      
      </>
      
    )

}