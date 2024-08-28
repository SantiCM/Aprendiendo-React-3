import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import { Button } from "./Button"

// El modal

// que en este caso ocuapmos la referencia en otro componente por lo cual ocupamos el forwardRef y le damos sus propiedades y la ref
// eslint-disable-next-line react/prop-types
const Modal = forwardRef( function Modal ( { children, buttonCaption} , ref) {

    // mandamos la referencia con el useRef
    const dialog = useRef()

    // y en este caso como utilizamos la propiedad del modal 
    // ocupamos el useImperativeHandle

    useImperativeHandle(
        
        // mandamos la referencia y una funcion
        ref, () => {
            
            // retornamos 
            return {
                
                // abrirlo 
                open() {
                    
                    // damos la referencia del modal y le damos el showModal
                    dialog.current.showModal()
                
                }
            
            }

        }

        
    )
        
    // retornamos el createPortal 
    // esto se hace para que sea todo mas flexible 

    return createPortal(

        // le damos la referencia del dialog
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-10 rounded-md shadow-md">

            { /* Damos el children */ }

            {children}

            { /* Mandamos el form con el metodo de dialogo */ }
            <form method="dialog" className="text-right mt-4">

                { /* Mandamos el boton personalizado y le damos el boton dee cerrar*/ }
                <Button>{buttonCaption}</Button>

            </form>
            
        </dialog>, 

        // basico para utilizar el createPortal
        document.getElementById("modal-root")
  
    )

})

// lo exportamos de esta manera
export default Modal