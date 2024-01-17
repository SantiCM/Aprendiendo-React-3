import { useEffect } from "react"
import { useState } from "react"

// mover el pointer
export function PointerMove() {

    // estado 
    const [enabled, setEnabled] = useState(false)

    const [position, setPosition] = useState( { x: 0, y: 0 } )
  
    useEffect(() => {
  
        const handleMove = (ev) => {
        
            const {clientX, clientY} = ev
  
            setPosition( { x: clientX, y: clientY } )
  
        }
  
        if(enabled) {
        
            window.addEventListener("pointermove", handleMove)
      
        }
  
        return () => {
        
            window.removeEventListener("pointermove", handleMove)
      
        }
    
    }, [enabled])

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