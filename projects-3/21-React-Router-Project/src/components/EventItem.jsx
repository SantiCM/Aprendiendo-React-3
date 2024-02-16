import { Link, useSubmit } from 'react-router-dom';

// item del evento
function EventItem({ event }) {

  // damos el submit que es como un form que da enviar el formulario 
  const submit = useSubmit()
  
  // eliminar todo
  function startDeleteHandler() {

    // damos el window de si se confirma el eliminar
    const proceed = window.confirm("Are you sure?")

    // si es aso
    if(proceed) {

      // damos el submit en nulo y el damos el metodo de eliminar
      submit(null, {
      
        method: "delete",

      } )
    
    }
  
  }

  return (
  
    <article className="event">
    
      <img src={event.image} alt={event.title} />
    
      <h1>{event.title}</h1>
    
      <time>{event.date}</time>
    
      <p>{event.description}</p>
    
      <menu className="actions">
    
        <Link to="edit">Edit</Link>

        <button onClick={startDeleteHandler}>Delete</button>
    
      </menu>
    
    </article>
  
  );

}

export default EventItem;
