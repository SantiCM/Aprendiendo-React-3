import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

// damos el modal
// le damos el children, el abrir, la clase como cadena vacia y el close
export const Modal = ( { children, open, className = "", onClose } ) => {

    // damos el ref del dialog
    const dialog = useRef()

    // mandamos un efecto
    useEffect(() => {

        // damos que el modal es igual al current del dialog
        const modal = dialog.current
        // si esta abierto
        if(open) {
            // el modal abre
            modal.showModal()
        }
        // retornamos la limpieza que el modal cierra
        return () => modal.close()

        // damos como dependencia el open
    }, [open])

    // damos el createPortal
    return createPortal (

        // damos el dialog, le damos su referencia, la clase dinamica y el cerrar

        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>

            {children}

        </dialog>,

        document.getElementById("modal")
    )
}