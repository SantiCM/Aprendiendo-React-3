import { Form, useNavigate, useNavigation, useActionData, json, redirect } from 'react-router-dom';

// form del evento
function EventForm({ method, event }) {

  // damos la data que viene del useActionData
  // el cual da el valor devuelto del resultado de la accion anterior
  const data = useActionData()
  
  // el useNavigate da navegar en diferentes lados
  const navigate = useNavigate();

  // indicadores de navegacion
  const navigation = useNavigation()

  // es submit damos que la navegacion del estado sea el submit
  const isSubmitting = navigation.state === "submitting"
  
  function cancelHandler() {}

  return (
    
    // Damos el form el cual recibe el method de arriba
    <Form method={method} className="form">

      {/*de la data si pasa la data de los errores y si pasa damos un objeto con sus valores que recibe la data de los 
        errores del map que recibe el err y damos una lista de los errores

      */}

      {data && data.errors && <ul>

        {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}  
        
        </ul>
        
      }
    
      <p>
    
        <label htmlFor="title">Title</label>

        {/*En este caso damos que el valor por defecto es el evento si esta damos el title si no nada */}

        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ""}/>
    
      </p>
    
      <p>
    
        <label htmlFor="image">Image</label>
    
        <input id="image" type="url" name="image" required defaultValue={event ? event.title : ""}/>
    
      </p>
    
      <p>
    
        <label htmlFor="date">Date</label>
    
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ""}/>
    
      </p>
    
      <p>
    
        <label htmlFor="description">Description</label>
    
        <textarea id="description" name="description" rows="5" required  defaultValue={event ? event.description : ""}/>
    
      </p>
    
      <div className="actions">

        {/*Damos un boton que lo desabilitamos cuando haga el submit*/}

        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
    
          Cancel
    
        </button>
    
        <button disabled={isSubmitting ? "Submitting" : "Save"}>Save</button>
    
      </div>
    
    </Form>
  
  );

}

export default EventForm;


// Damos la accion
export const Action = async(request, params) => {

  // recibimos el metodo que viene de la request del metodo
  const method = request.method

  // damos la data que es el formData
  const data = await request.formData()

  // damos el evento de la data
  const eventData = {
  
    title: data.get("title"),

    image: data.get("image"),

    date: data.get("date"),

    description: data.get("description")
  
  } 

  // tomamos la url
  let url = 'http://localhost:8080/events'

  // decimos si el metodo es patch
  if(method === "PATCH") {

    // damos el evento del id de los params
    const eventId = params.eventId

    // le damos el evento mas el id
    url = 'http://localhost:8080/events/' + eventId
  
  }

  // damos la respuesta del await de la url
  const response = await fetch(url, {

    method: method,

    headers: {
          
      "Content-Type": 'application/json'
      
    },

    // con su cuerpo de el evento de la data
    body: JSON.stringify(eventData)

  })

  // si el status es 422
  if(response.status === 422) {

    // damos la respuesta
    return response
  
  }

  // si no hay response 
  if(!response.ok) {

    // damos el error
    throw json({message: "Could not save event"}, {status: 500})
  
  } 

  // si hay nos vamos a la pagina de eventos
  return redirect("/events")

}