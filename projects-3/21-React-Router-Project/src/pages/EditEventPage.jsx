import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

// Editar evento
export const EditEventPage = () => {

    //damos el evento que viene del loader de la data del id: "event-detail",
    const data = useRouteLoaderData("event-detail")
     
    return (
        
        // le damos el evento del form que recibe el evento de la data del evento
        // y el metodo patch, El método HTTP PATCH aplica modificaciones parciales a un recurso, en ese caso a la actualizacion
        <EventForm event={data.event} method="patch"></EventForm>
 
    )

}