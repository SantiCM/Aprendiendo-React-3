import { Navbar } from "../components/Navbar"
import { Calendar } from "react-big-calendar"
import { addHours } from "date-fns"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessagesES } from "../../helpers/getMessages"
import { CalendarEvent } from "../components/CalendarEvent"
import { useEffect, useState } from "react"
import { CalendarModal } from "../components/CalendarModal"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { FabAddNew } from "../components/FabAddNew"
import { FabDelete } from "../components/FabDelete"
import { useAuthStore } from "../../hooks/useAuthStore"


// el calendario
export const CalendarPage = () => {

  // mandamos llamar el user
  const {user} = useAuthStore()

  // abrir el modal
  const { openDateModal } = useUiStore()

  // los eventos, la nota activa y cargar los eventos 
  const { events, setActiveEvent, startLoandingEvents } = useCalendarStore()

  // un usesate de el localStorage del lastView o del week
  const [lastView, setLastView] = useState(localStorage.getItem("lastView")  || "week")
  
  // un evento 
  const eventStyleGetter = (event, start, end, isSelected) => {
    // si el user.uid es igual al del evento.user._id (token) y el user.uis es igual al event.user.uid
    const isMyEvent = (user.uid === event.user._id || (user.uid === event.user.uid) )

    // mandamos este estilo
    const style = {
      
      backgroundColor: isMyEvent ? "#347CF7" : "#465660",
      
      borderRadius: "0px",
      
      opacity: 0.9,
      
      color: "white"
    
    }

    return {
      
      style
    
    }
  
  }

  // hacer dobel click para abrir el modal en el evento seleccionado
  const hacerDobleClick = (event) => {

    openDateModal()
  
  }

  // seleccioanr un evento
  const seleccionarE = (event) => {

    setActiveEvent(event)

  }

  // cambiar la vista 
  const vistaCambia = (event) => {

    // localStrogae del setItem del lastView del event
    localStorage.setItem("lastView", event)

    setLastView(event)
  
  }

  // useEffects de cargar los eventos
  useEffect(() => {
    
    startLoandingEvents()

  }, [])
  
  
  return (
    
    <>
    
      <Navbar></Navbar>

      <Calendar

        culture="es"

        localizer={localizer}

        events={events}

        defaultView={lastView}
        
        startAccessor="start"
        
        endAccessor="end"
        
        style={{ height: "calc(100vh - 80px)" }}

        messages={getMessagesES()}

        eventPropGetter={eventStyleGetter}

        components={{
        
          event: CalendarEvent
        
        }}

        // hacer doble click
        onDoubleClickEvent={hacerDobleClick}

        // hacer click al evento
        onSelectEvent={seleccionarE}

        // ventanas disponibles
        onView={vistaCambia}
      
      />

      <CalendarModal></CalendarModal>

      <FabAddNew></FabAddNew>

      <FabDelete></FabDelete>

    </>
 
  )

}