import { Await, defer, json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventList';
import { Suspense } from 'react';

// pagina de eventos
function EventsPages() {

    // de la data del loader recojemos los eventos 
    const {events} = useLoaderData()

    /*if(data.isError) {
    
        return (
            
            <p>{data.message}</p>   
            
        )
    
    }*/
    
    return (

        // retroce mientras esperamos otros datos
        <Suspense fallback={<p style={{textAlign: "center"}}>Loanding</p>}>

            {/* Damos el await el cual se utiliza para representar valores diferidos con manejo automático de errores
                y damos el resolve el cual acepta una promesa devuelta por un valor de cargador diferido para resolverla y representarla.
            */}

            <Await resolve={events}>

                {/*Damos una funcion donde damos la lista de los eventos y damos los eventos del loaded */}

                {(loadedEvents) => <EventsList events={loadedEvents} /> }
    
            </Await>

        </Suspense>

    );

}

export default EventsPages

// loader del event
const loaderEvent = async() => {

    // damos la peticion
    const response = await fetch('http://localhost:8080/events');

    // si el response no es ok
    if (!response.ok) {

       //return {isError: true, message: "Could not fecth events"}

       //throw new Response(JSON.stringify({message: "Could not fecth events"}), {status: 500})

       // damos el error y su status
        throw json({message: "Could not fecth events"}, {

            status: 500
    
        })

        // si pasa
    } else {
        
        // damos la data
        const resData = await response.json()

        // retornamos la data de los eventos
        return resData.events
      
    }

}

//loader
export const Loader = () => {

    // todas las diferentes peticiones
    return defer({
        
        // eventos del loaderEvent
        events: loaderEvent()
    
    })
    
}