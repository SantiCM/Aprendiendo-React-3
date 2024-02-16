import { useEffect, useState } from "react";

// Hook para la peticion

// damos el funcion de fectch y un initialValue que es para evitar el problema del warning y tambein porder mandar el array vacio a la hora de llamar este hook
export const useFetch = (fetchFn, initialValue) => {

    // damos el estado de el fecth
    const [isFetching, setIsFetching] = useState()

    // damos otro estado del error
    const [error, setError] = useState()

    // damos la data del fecth que recibe el initialValue
    const [fetchData, setFetchData] = useState(initialValue)
    
    // mandamos un efecto
    useEffect(() => {
        
        // es asincrono la funcion
        async function fetchData() {
            
            // damos el segundo estado en true
          setIsFetching(true);
            
          // si 
            try {
                
                // mandamos la data del await de la funcion del fecth
                const data = await fetchFn();
                
                // mandamos el segundo estado de la data y le damos la data
                setFetchData(data);
                
                // si falla
            } catch (error) {
                
                // damos el segundo error
                setError({ message: error.message || 'Failed to fetch data.' });
          
            }
            
            // damos el segundo estado en falso
            setIsFetching(false);
        
        }
        
        // damos el primer estado de la data 
        fetchData();
        
        // y damos como dependencia la funcion de el fetch
    }, [fetchFn]);

    // retornamos todos los primeros estados y el segundo estado del fectch de la data
    return {
    
        isFetching,

        fetchData,

        setFetchData,

        error
    
    }

}