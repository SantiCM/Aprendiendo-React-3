import { addHours } from "date-fns"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"

// Crear nuevo evento 
export const FabAddNew = () => {

    // dessutruramos el open del store
    const { openDateModal } = useUiStore()

    // y la nota activa
    const {setActiveEvent} = useCalendarStore()

    // en el click 
    const handleClickNew = () => {

        // la nota activa tiene que tener todo esto
        setActiveEvent({
            
            title: "",
          
            notes: "",
            
            start: new Date(),
            
            end: addHours(new Date(), 2),
          
            bgColor: "#fafafa",
          
            user: {
              
              _id: "1212",
          
              name: "Santiago"
            
            }
        
        })

        // se abre el modal 
        openDateModal()
    
    }

    return (
        
        <button className='btn btn-primary fab' onClick={handleClickNew}>

            <i className='fas fa-plus'></i>

        </button>
    
    )

}