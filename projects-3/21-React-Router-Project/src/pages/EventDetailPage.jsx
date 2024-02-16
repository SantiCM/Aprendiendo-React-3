import { Await, json,  redirect,  useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventList"
import { Suspense } from "react"

// detalles de los eventos 
const EventDetailPage = () => {

    //const params = useParams()

    // de la data del loader recojemos el id "event-detail"
    const {event, events} = useRouteLoaderData("event-detail")
  
    return (

        <>
            {/* retroce mientras esperamos otros datos */}

            <Suspense fallback={<p style={{textAlign: "center"}}>Loanding</p>}>

                {/* Damos el await el cual se utiliza para representar valores diferidos con manejo automático de errores
                y damos el resolve el cual acepta una promesa devuelta por un valor de cargador diferido para resolverla y representarla.
                */}

                <Await resolve={event}>

                    {/*Damos una funcion donde damos el item y damos los eventos del loaded */}

                    {(loadedEvent => <EventItem event={loadedEvent}></EventItem>) }

                </Await>

                <Await resolve={events}>

                    {/*Damos una funcion donde damos la lista de los eventos y damos los eventos del loaded */}

                    {(loadedEvents => <EventsList event={loadedEvents}></EventsList>) }

                </Await>

            </Suspense>

        </>

    )

}

export default EventDetailPage

// load del event damos el id
const loadEvent = async(id) => {

    // damos la peticion mas el id del event-detail
    const response = await fetch('http://localhost:8080/events/' + id);

    // si la respuesta no es okay 
    if (!response.ok) {

       //return {isError: true, message: "Could not fecth events"}

       //throw new Response(JSON.stringify({message: "Could not fecth events"}), {status: 500})

       // damos el error
        throw json({message: "Could not fecth events"}, {

            status: 500
    
        })
        
        // si es asi 
    } else {
        
        // Damos la data del await y damos el retorno de la data del evento
        const resData = await response.json()

        return resData.event
      
    }


}

// load de los eventos
const loadEvents = async() => {

    // respueta de la peticion
    const response = await fetch('http://localhost:8080/events');

    // si no hay respuesta
    if (!response.ok) {

       //return {isError: true, message: "Could not fecth events"}

       //throw new Response(JSON.stringify({message: "Could not fecth events"}), {status: 500})

       // damos el error
        throw json({message: "Could not fecth events"}, {

            status: 500
    
        })

        // si no 
    } else {
        
        // Damos la data del await y damos el retorno de la data del evento
        const resData = await response.json()

        return resData.events
      
    }

}

// damos el loader,recibe los params y el request
export async function Loader({ request, params }) {

    // damos el id que viene del id por defecto
    // justo para eso son los params para cuando se da esto path: ":eventId", id: "event-detail",
    const id = params.eventId;
    
    // damos el defer, el cual diferir los valores devueltos por los cargadores pasando promesas en lugar de valores resueltos.
    return defer({

        // damos el event del await del load del event con su id 
        event: await loadEvent(id),

        // damos los eventos del load de los eventos 
        events: loadEvents(),
    
    });
  
}

// La accion, le damos el params y la request
export const Action = async({params, request}) => {

    // damos los params porque necesitamos el id pero en este caso la id por defecto, path: ":eventId"
    const eventId = params.eventId

    // damos la respuesta del await del fetch de la peticion mas el id
    const response = await fetch("http://localhost:8080/events/" + eventId, {

        // damos el metodo de la request del metodo
        method: request.method

    })

    // si no hay respuesta
    if(!response.ok) {  
        
        // damos el error
        throw json({message: "Could not delete event"}, {
        
            status: 500
        
        })
    
    } 

    // si es asi redireccionamos a la pagina de eventos
    return redirect("/events")

}