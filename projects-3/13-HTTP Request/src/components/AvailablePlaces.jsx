import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fecthAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  // mandamos un estado del fetch como falso
  const [isFecthing, setIsFecthing] = useState(false)

  // estado donde estan viables los luagares como array vacio
  const [availablePlaces, setAvailablePlaces] = useState([])

  // estado para mostrar el error
  const [error, setError] = useState()

  // mandamos un useEffect
  useEffect(() => {
    
    // mandamos la variable asincrona 
    const fecthPlaces = async () => {

      // decimos que el fecth esta en true
      setIsFecthing(true)

      // si
      try {

        // mandamos variable de los luagres como el await de la peticion http
        const places = await fecthAvailablePlaces()

        // forma de pedir la ubicacion del usuario
        navigator.geolocation.getCurrentPosition((position) => {

          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
          
          // segundo estado de los viables precios sera igual a la ubicacion
          setAvailablePlaces(sortedPlaces)

          // segundo estado del fecth sera en falso
          setIsFecthing(false)
        
        })

        // si falla
      } catch (error) {

        // mandamos el segundo error que le damos objeto del message: el error que viene del mensaje y mostramos el mensaje
        setError({message: error.message || "Could not fetch palces, please try again later"})

      } 

      // damos el fecth en falso (ahi acabo la peticion)

      setIsFecthing(false)

    }

    // y damos la variable asincrona
    fecthPlaces()

  }, [])

  // si el error se presenta 
  if(error) {
    
    // damos el componente del error
    return <Error 
      
    title="An error ocurred" message={error.message}></Error>
  
  }
  
  
  return (
  
    <Places
  
      title="Available Places"
    
      places={availablePlaces}

      isLoanding={isFecthing}

      loandingText= "Fetching place data..."
      
      fallbackText="No places available."
      
      onSelectPlace={onSelectPlace}
    
    />
  
  );

}