import { createSlice } from "@reduxjs/toolkit"
import { addHours } from "date-fns"

/*const tempEvent = {

    id: new Date().getTime(),

    title: "Cumpleaños",
  
    notes: "Hay que comprar",
    
    start: new Date(),
    
    end: addHours(new Date(), 2),
  
    bgColor: "#fafafa",
  
    user: {
      
      _id: "1212",
  
      name: "Santiago"
    
    }
  
}*/

export const calendarSlice = createSlice({

    // nombre de el slice
    name: 'calendar',
    
    // estado inical
    initialState:  {

        isLoandingEvents: true , 
        
        events: [
            
            //tempEvent
        
        ],
       
        activeEvent: null

    },
    
    reducers: {
        
        // nota activa 
        onSetActiveEvent: (state, { payload } ) => {

            state.activeEvent = payload
        
        },

        // nueva nota que recibe el state y el payload
        onAddNewEvent: (state, { payload } ) => {
            
            // el estado de los eventos que le damos el push del payload
            state.events.push(payload)

            // el estado de nota acitva en null
            state.activeEvent = null
        
        },

        // actualizar las notas
        onUpdateEvent:  (state, { payload } ) => {
            
            // el estado de las notas es igual a 
            // el estado que mapea el evento
            // si el evento.id es igual a la accion del id retorna y entra 
            state.events = state.events.map(event => {

                if(event.id === payload.id) {
                
                    return payload
                
                }
                
                // si no retorna el evento
                return event
            
            })
        
        },

        // eliminar evento
        onDeleteEvent: (state ) => {

            // si el estado de la nota activa 
            if(state.activeEvent) {
                
                // el estado de los eventos hace el metodo filter que es
                // crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
                // del callback que si el evento.id es difrente al estado de la nota activa del .id
                state.events = state.events.filter(event => event.id !== state.activeEvent.id)
                
                // la nota activa en null
                state.activeEvent = null
            
            }

        },

        // carga de eventos que recibe el state y el payload como array vacio
        onLoadEvents: (state, {payload = []}) => {
            
            // la carga esta en falso
            state.isLoandingEvents = false

            //state.events = payload

            payload.forEach(event => {
                
                // constante si existe viene de la propiedad some
                // comprueba si al menos un elemento del array 
                //cumple con la condición implementada por la función proporcionada
                // si es asi el id tiene que ser igual al id del evento del id
                const exist = state.events.some( dbEvent => dbEvent.id === event.id )

                // si no existe
                if(!exist) {
                    
                    // el push le enviamos el evento
                    state.events.push(event)
                
                }
   
            })            
        
        },

        // carga del calendario
        onLogoutCalendar: (state) => {
            
            // carga en true
            state.isLoandingEvents = true , 
            
            // no hay eventos
            state.events = [
                
                //tempEvent
            
            ],
            
            // nada activo
            state.activeEvent = null
        
        }

    }
  
})

// acciones
export const {onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar} = calendarSlice.actions