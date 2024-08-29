import { parseISO } from "date-fns"

// convertir eventos en hora recibe los events = []
export const convertEventsToDate = (events = []) => {
    
    // retorno de los eventos que mapea
    // y callback el event y ese event
    // .start = cambia al event.start del parseIO de date-fns
    // .end = cambia al event.end del parseIO de date-fns
    return events.map(event => {
    
        event.start = parseISO(event.start)

        event.end = parseISO(event.end)

        // retornamos el evento
        return event

    
    })


}
