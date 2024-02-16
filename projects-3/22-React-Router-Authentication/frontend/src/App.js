import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import AuthenticationPage, {Action as authAction} from './pages/Authentication';
import {Action as logoutAction} from "./pages/Logout"
import {checkAuthLoader, loaderToken} from "./util/auth"

// Damos el crear router




const router = createBrowserRouter([
  
  {

    // damos el path que es la de por defecto
    path: '/',

    // damos el elemento que es el root layout
    element: <RootLayout />,

    // damos el componente del error
    errorElement: <ErrorPage />,

    // damos el id del root
    id: "root",

    // y damos el token que depende de todo 
    loader: loaderToken,

    // y damos los hijos que va a recibir
    children: [

      // en este caso no ponemos el path, porque por defecto sera esta
      // entonces ponemos el index en true
      { index: true, element: <HomePage /> },
      
      {

        // damos el path de los events
        path: 'events',

        // damos el elemento de las routes de los eventos
        element: <EventsRootLayout />,
      
        // damos los hijos
        children: [

          {
            // por defecto en true
            index: true,

            // damos la pagina de los eventos
            element: <EventsPage />,

            // damos el loader el cual es un cargador para proporcionar datos de un elemento antes que se represente
            loader: eventsLoader,

          },

          {
            // damos el path de los eventos
            // y en este caso el path es el evento que viene del id
            // pero ponemos el ":" para dar a entender que es lo que sigue de la ruta de arriba
            path: ':eventId',

            // damos el id 
            id: 'event-detail',

            // damos el loader  
            loader: eventDetailLoader,

            // damos sus hijos los cuales son
            children: [

              { 
                // por defecto el detalles de eventos y le damos una accion la cual
                // son las lecturas del cargador de rutas
                // mutaciones
                index: true,

                element: <EventDetailPage />,

                action: deleteEventAction,

              },

              {
                // damos el path de edit, y damos el element de editar el evento de la pagina, con su accion y el loader
                path: 'edit',

                element: <EditEventPage />,

                action: manipulateEventAction,
                
                loader: checkAuthLoader

              },

            ],

          },
          
          {
            // fuera de los hijos damos el nuevo evento con su accion y el loader
            path: 'new',
            
            element: <NewEventPage />,
            
            action: manipulateEventAction,
            
            loader: checkAuthLoader
          
          },
        
        ],
      
      },

      {
        
        // el path es del auth,damos su elemento con su accion 
        path: "auth",

        element: <AuthenticationPage></AuthenticationPage>,

        action: authAction
      
      },

      {
        
        // damos el path del nuevo boletin, con su elemento y la accion
        path: 'newsletter',
      
        element: <NewsletterPage />,
      
        action: newsletterAction,
      
      },

      {
        
        // damos el logout con su accion
        path: 'logout',
      
        action: logoutAction,
      
      },

    ],
  
  },

]);

function App() {

  return <RouterProvider router={router} />;

}

export default App;