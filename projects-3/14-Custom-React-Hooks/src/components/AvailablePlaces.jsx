import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/UseFetch.js';

// sortear los lugares por su ubi, asincrono
const fetchSortedPlaces = async() => {

  // damos los lugares del await de la peticion http
  const places = await fetchAvailablePlaces()

  // retornamos una nueva promesa que da el resolve
  return new Promise((resolve) => {
    
    // hacemos la forma de pedir la ubicacion del usuario
    navigator.geolocation.getCurrentPosition((position) => {
    
      const sortedPlaces = sortPlacesByDistance(
        
        places,
        
        position.coords.latitude,
        
        position.coords.longitude
      
      );
        
      // damos el resolve y le damos la funcion de las cordenadas 
      resolve(sortedPlaces)
    
    });
    
  })

}

export default function AvailablePlaces({ onSelectPlace }) {
  
  // damos el hook del fecth y le damos la variable para sortear los lugares por su ubi y el array vacio
  const {isFetching, error, fetchData: availablePlaces} = useFetch(fetchSortedPlaces, [])

  if (error) {
  
  
    return <Error title="An error occurred!" message={error.message} />;
  
  }

  return (
    
    <Places
      
      title="Available Places"
      
      places={availablePlaces}
      
      isLoading={isFetching}
        
      loadingText="Fetching place data..."
      
      fallbackText="No places available."
      
      onSelectPlace={onSelectPlace}
    
    />
  
  );

}