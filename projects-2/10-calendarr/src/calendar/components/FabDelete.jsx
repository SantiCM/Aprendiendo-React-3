import { useCalendarStore } from "../../hooks/useCalendarStore"

// Eliminar el evento
export const FabDelete = () => {
    // llamamos el fin del evento y al seleccionar el evento 
    const {startDeletingEvent, hasEventSelected} = useCalendarStore()

    // lo eliminamos 
    const handleDelete = () => {

        startDeletingEvent()

    }

    return (
        
        <button 
            
            aria-label="btn-delete"
            className='btn btn-danger fab-delete' 
            onClick={handleDelete}
            // el estilo dice que el display depende si esta seleccionado el evento que se quiere eliminar sale el boton si no no aparece
            style={{
            
                display : hasEventSelected ? "" : "none"
            
            }}
        
        >

            <i className='fas fa-trash-alt'></i>

        </button>
    
    )

}