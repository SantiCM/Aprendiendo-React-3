import { RouterProvider, createBrowserRouter } from "react-router-dom"
import  HomePage  from "./pages/HomePage"
import  EventDetailPage,  {Loader as eventDetailLoader, Action as deleteEventAction} from "./pages/EventDetailPage"
import NewEventPage  from "./pages/NewEventPage"
import { EditEventPage } from "./pages/EditEventPage"
import { RootLayout } from "./pages/Root"
import { EventRoutes } from "./pages/EventRoutes"
import  EventsPages, {Loader as eventsLoader} from "./pages/Event"
import { Error } from "./pages/Error"
import {Action as manipulateEventAction} from "./components/EventForm"
import NewsletterPage, {Action as newsletterAction} from "./components/Newsletter"

// Damos el crear router
const router = createBrowserRouter([

  {

    // damos el path que es la de por defecto
    path: "/", 

    // damos el elemento que es el root layout
    element:<RootLayout></RootLayout>, 

    // damos el componente del error
    errorElement: <Error></Error>,

    // y damos los hijos que va a recibir
    children: [
      
      // en este caso no ponemos el path, porque por defecto sera esta
      // entonces ponemos el index en true
      {index: true, element: <HomePage></HomePage>},

      {
        // damos el path de los events
        path: "events", 

        // damos el elemento de las routes de los eventos
        element: <EventRoutes></EventRoutes>,

        // damos los hijos
        children: [
          
          // por defecto en true
          {
            
            index: true ,   

            // damos la pagina de los eventos
            element: <EventsPages></EventsPages>, 

            // damos el loader el cual es un cargador para proporcionar datos de un elemento antes que se represente
            loader: eventsLoader,
        
          },

          {

            // damos el path de los eventos
            // y en este caso el path es el evento que viene del id
            // pero ponemos el ":" para dar a entender que es lo que sigue de la ruta de arriba
            path: ":eventId",

            // damos el id 
            id: "event-detail",

            // damos el loader
            loader: eventDetailLoader,

            // damos sus hijos los cuales son
            children: [
              
              // por defecto el detalles de eventos y le damos una accion la cual
              // son las lecturas del cargador de rutas
              // mutaciones
              {index: true, element: <EventDetailPage></EventDetailPage>, action: deleteEventAction},

              // damos el path de edit, y damos el element de editar el evento de la pagina, con su accion
              {path: "edit", element: <EditEventPage></EditEventPage>, action: manipulateEventAction},
            
            ]
          
          },

          // fuera de los hijos damos el nuevo evento con su accion
          {path: "new", element: <NewEventPage></NewEventPage>, action: manipulateEventAction },          
        ]
      
      },

      // fuera de todo damos el boletin con su accion
      {path: "newsletter", element: <NewsletterPage></NewsletterPage>,  action: newsletterAction}
  
    ]
  
  }

])


const App = () => {

  return (
    
    <RouterProvider router={router}></RouterProvider>

  )
  
}

export default App
