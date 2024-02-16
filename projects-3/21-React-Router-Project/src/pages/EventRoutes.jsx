import { Outlet } from "react-router-dom"
import EventsNavigation from "../components/EventsNavigation"

// Damos el evento de las rutas
export const EventRoutes = () => {
  
    return (

        <>      

            { /* Damos la navegacion de los eventos */ }

            <EventsNavigation></EventsNavigation>

            { /* Damos el outlet cerrando todo  */ }
            <Outlet></Outlet>
        
        </>
  
    )

}