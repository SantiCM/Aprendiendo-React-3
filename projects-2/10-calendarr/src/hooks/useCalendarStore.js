import {  useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"
import calendarApi from "../api/calendarApi"
import { convertEventsToDate } from "../helpers/convertEventsToDate"
import Swal from "sweetalert2"

// eventos del calendario
export const useCalendarStore = () => {

    // mandamos el dispacth
    const dispatch = useDispatch()

    // del store del calendar mandamos los eventos y el eventoActivo
    const {events, activeEvent} = useSelector(state => state.calendar)

    // del store del auth mandamos llamar el user
    const {user} = useSelector(state => state.auth)

    // el estado activo reccibimos el calendarEvent
    const setActiveEvent = (calendarEvent) => { 
        
        dispatch(onSetActiveEvent(calendarEvent))
    
    }

    // iniciar un nuevo evento el cual es asincrono y recibimos el calendarEvent
    const startSavingEvent = async(calendarEvent) => {

        // si 
        try {

            // si el calendarEvent.id es
            if(calendarEvent.id) {
            
                // actualizando

                // calendarApi del put del url de events/con su id
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
                
                // dispatch de actuazlizar el evento de la copia del evento y el user
                dispatch(onUpdateEvent({...calendarEvent, user}))
                
                return
    
            } 
            
            // madamos la data del calendarApi.post del url del "/events"
            const {data} = await calendarApi.post("/events", calendarEvent)
                
            // creando
            dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user} ) )
        
            // si no
        } catch (error) {

            // error de swal de error al guardar
            // y el error viene del personalizado del backend
            Swal.fire("Error Al Guardar", error.response.data?.msg, "error")
            
        }

    
    }

    // eliminar eventos asyncrono
    const startDeletingEvent = async() => {

        // si 
        try {
            
            // viende del calendarApi.delete (eliminar)
            // del url /events/del evento activo del id
            await calendarApi.delete(`/events/${activeEvent.id}`)

            // lo eliminamos
            dispatch(onDeleteEvent())
        
            // si no
        } catch (error) {

            // error de swal de error al eliminar
            // y el error viene del personalizado del backend

            Swal.fire("Error Al Eliminar", error.response.data?.msg, "error")
            
        }
    
        
    
    }

    // cargar eventos asincrono
    const startLoandingEvents = async() => {
            
        // si 
        try {

            // mandamos la data del await de calendarApi.get que viene del events
            const {data} = await calendarApi.get("/events")

            // los eventos viene de convertir eventos de la hora y recibe la data de los eventos 
            const events = convertEventsToDate( data.eventos)

            // dispaatch del la carga que recibe los eventos
            dispatch(onLoadEvents(events))

            // si no
        } catch (error) {

            console.log(error)
            
        }
    
    } 

    return {
    
        // Propiedades
        events, 
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Metodos
        setActiveEvent,

        startSavingEvent,
        
        startDeletingEvent,
        
        startLoandingEvents,
    
    }


}
