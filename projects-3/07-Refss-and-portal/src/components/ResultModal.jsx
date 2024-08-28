// Transmite una referencia de un componente a otro para que pueda utilizarse en otro componente 
import { forwardRef, useImperativeHandle, useRef} from "react"
import { createPortal } from "react-dom"

// para hacer la referencia mandamos el forwardRef y su sintaxis y recojemos los atributos targetTime, remainingTime, onReset
// y despues el ref
const ResultModal = forwardRef(function ResultModal( { targetTime, remainingTime, onReset}, ref) {

    // mandamos el ref del dialogo
    const dialog = useRef()
    
    // si pierde tiene que ser que el tiempo sea mayor o igual a 0
    const userLost = remainingTime <= 0

    // formatear el †iempo
    // le decimos que el tiempo es dividido entre 100 y le mandamos el toFixed para que muestre 2 digitos mas
    const formatteRemainingTime = (remainingTime / 1000).toFixed(2)

    // puntuacion
    // le decimos que el round sera 1 menos el tiempo dividido entre el tiempo multiplicado por 100 y despeus por 100
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    // hacer mas elegante la referencia que estamos haciendo
    useImperativeHandle(

      // mandamos la referencia
      ref,
    
      // funcion
      () => {

        return {
            
            // se llaama open
            open() {
                
                // recibe la referencia de en este caso el modal
                dialog.current.showModal()
            
            }
        
        }
        
      },

    )

    // para tener el modal en todo el cuerpo del HTML mandamos el createPortak
    return createPortal(
        
        // el dialog recibe la referencia y el cerrarlo con el reseteo
        <dialog ref={dialog} className="result-modal" onClose={onReset} >

            {
                // si pierde, mensaje de lost
                userLost && <h2>You Lost!!!</h2>
            
            }

            {

                // si gana, mensaje de winn
                !userLost && <h2>You Score: {score} </h2>
        
            }
            
            { /* Mandamos el tiempo */ }
            <p>Tge target time <strong>{targetTime} second</strong></p>

            { /* Mandamos el tiempor formateado */}
            <p>You stopped the timer with <strong>{formatteRemainingTime} second left</strong> </p>
            
            { /*Mandamos un form que es adecuado para el dialog dandole ese mismo metodo y el onSubmit que lo resetea*/ }
            <form method="dialog" onSubmit={onReset}>

                <button>Close</button>

            </form>

        </dialog>,
        
        // mandamos el id del modal que viene del html
        document.getElementById("modal")
    
    )

})

export default ResultModal