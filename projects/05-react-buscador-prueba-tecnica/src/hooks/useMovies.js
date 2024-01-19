import {useRef, useState, useMemo, useCallback} from "react"
import { searchMovies } from "../services/movies"

// movies, le damos el search y el sort
export function useMovies({search, sort}) {

    // recojemos el estado de las movies como array vacio
    const [movies, setMovies] = useState([])

    // damos el loanding en false
    const [loanding, setLoanding] = useState(false)

    // damos el error en nulo
    const [error, setError] = useState(null)

    // damos la ref de el search que es la busqueda
    const previousSearch = useRef(search)

    // damos la funcion donde damos la peticion
    // pero lo damos con useCallback, esto para memorizar la funcion y que no tenga que volver a ejecutarla

    // damos el async y en este caso damos el parametro de search para que la funcion sea unica
    const getMovies = useCallback( async ( { search } ) => {

        // si el search es igual al anterior busqueda del current, lo retornamos, no se busca mas de una vez
        // lo que ya escribio el usuario
        if(search === previousSearch.current) return
        
        // damos un try
        try {
            
            // el loanding en true del estado
            setLoanding(true)
            
            // el error en nulo
            setError(null)
            
            // y el ref de prevenir debe de ser el search
            previousSearch.current = search
            
            // las movies vienen del await de el servicio donde se hace la peticion y le damos la busqueda
            const newMovies = await searchMovies({search})
            
            // damos el estado del array vacio, le metemos todas las movies 
            setMovies(newMovies)

            // si falla, damos el error
        } catch (error) {
    
            setError(error.message)
                
            // finally, pasa con el try and catch
        } finally {

            // damos el cargar en falso
            setLoanding(false)
            
        }
        
        // en este caos no damos dependecia porque ya damos un parametro unico
    }, [])

    // damos el que se ordene alfabeticamente, damos el useMemo, 
    // para que memorize su valor y se ejecute cuando se nesecite o cuando ocupe las dependencias
    const sortedMovies = useMemo(() => {

        // retornamos el sort de arriba y decimos si hay sort
        return sort 

            // hacemos la copia de las movies y damos el sort el cual
            // ordena los elementos de a y b, damos una funcion y decimos
            // si la poscion a del titulo es localeCompare, osea
            // los ordena con sus acentos y le damos el b del titulo
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 

            // si no retornamos las movies por defecto
            : movies
        
            // dependemos del sort, osea de la busqueda y de las movies
            // entonces esto hara la memorizacion, solo una vez que pase el sort y las moviess
    }, [sort, movies])
    
    return { movies: sortedMovies, sortedMovies, getMovies, loanding  }

}