//import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';


// lista de los eventos
function EventsList({events}) {

  //const events = useLoaderData()
  
  return (
  
    <div className="events">
    
      <h1>All Events</h1>
    
      <ul className="list">

        {/*Damos el evento de arriba y lo mapemaos */}

        {events.map((event) => (

          // damos la key
          <li key={event.id} className="item">
            
            {/*Damos el link de el router con 
              de la url de los eventos damos el id de cada evento
            
            */}

            <Link to={`/events/${event.id}`}>
          
              <img src={event.image} alt={event.title} />
          
              <div className="content">
          
                <h2>{event.title}</h2>
          
                <time>{event.date}</time>
          
              </div>
          
            </Link>
          
          </li>
        
        ))}
      
      </ul>
    
    </div>
  
  );

}

export default EventsList;