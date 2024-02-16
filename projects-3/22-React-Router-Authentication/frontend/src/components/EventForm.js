import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect
} from 'react-router-dom';

import classes from './EventForm.module.css';
import { getAuthToken } from '../util/auth';

// el evento del form
function EventForm({ method, event }) {

  // damos la data que viene de la accion de la data
  const data = useActionData();
  
  // damos el navigate
  const navigate = useNavigate();

  // damos la navegacion
  const navigation = useNavigation();

  // si es submitting damos que de la navegacion del etado sea submit
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
  
    navigate('..');
  
  }

  return (
    
    // damos el form con el metodo que viene de arriba
    <Form method={method} className={classes.form}>
      
      {data && data.errors && (
    
        <ul>

          { /* Damos del objeto de los valores, damos la data de los error y lo mapeamos del err */ }
        
          {Object.values(data.errors).map((err) => (

            // y damos los errores
            <li key={err}>{err}</li>
          
          ))}
        
        </ul>
      
      )}
      
      <p>
      
        <label htmlFor="title">Title</label>
      
        <input
        
          id="title"
          
          type="text"
          
          name="title"
          
          required
          
          // si el valor por defecto es el evento si es asi damos su titulo sino vacio
          defaultValue={event ? event.title : ''}
        
        />

      </p>
      
      <p>
      
        <label htmlFor="image">Image</label>
      
        <input
      
          id="image"
          
          type="url"
          
          name="image"
          
          required
          
          defaultValue={event ? event.image : ''}
        
        />
      
      </p>
      
      <p>
      
        <label htmlFor="date">Date</label>
      
        <input
      
          id="date"
          
          type="date"
          
          name="date"
          
          required
          
          defaultValue={event ? event.date : ''}
        
        />
      
      </p>
      
      <p>
      
        <label htmlFor="description">Description</label>
      
        <textarea
      
          id="description"
          
          name="description"
          
          rows="5"
          
          required
          
          defaultValue={event ? event.description : ''}
        
        />
      
      </p>
      
      <div className={classes.actions}>
            
        { /* Damos un buton que al hacerle click lo cancelamos y se desabilita al hacer submit*/}

        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
      
          Cancel
      
        </button>
      
        <button disabled={isSubmitting}>

          { /* Al hacer submit y si es asi mostramos el submitting sino el save */ }
          {isSubmitting ? 'Submitting...' : 'Save'}
      
        </button>
      
      </div>
    
    </Form>
  
  );

}

export default EventForm;

// accion
export async function action({ request, params }) {

  // recojemos el metodo de la request
  const method = request.method;

  // la data del await de la form data
  const data = await request.formData();

  // la data del evento tiene el contenido del get
  const eventData = {

    title: data.get('title'),
    
    image: data.get('image'),
    
    date: data.get('date'),
    
    description: data.get('description'),
  
  };

  // la url es esta por defecto
  let url = 'http://localhost:8080/events';

  // si el metodod es patch
  if (method === 'PATCH') {

    // viene los params del evento del id
    const eventId = params.eventId;

    // la url sera la misma mas el id del evento
    url = 'http://localhost:8080/events/' + eventId;
  
  }

  // recojemos el token
  const token = getAuthToken()

  // la respuesta es el await del fectch, recojemos el url
  const response = await fetch(url, {

    // con su metodo 
    method: method,
    
    // damos los headers
    headers: {
    
      'Content-Type': 'application/json',
    
      "Authorization" : "Bearer " + token
    
    },

    // y el body clasico de la data
    body: JSON.stringify(eventData),
  
  });

  // si la respuesta da un estado 422 osea qye pasa 
  if (response.status === 422) {
    
    // damos la respuesta
    return response;
  
  }

  // si falla damos su error 
  if (!response.ok) {
  
    throw json({ message: 'Could not save event.' }, { status: 500 });
  
  }

  // si no retornamos, la redirrecion a los eventos
  return redirect('/events');

}