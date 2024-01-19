import { useEffect, useState, useRef } from "react"

// buscar 
export function useSearch() {

    // recojemos el estado de actualizar el search como arreglo vacio
    const [updateSearch, setUpdateSearch] = useState("")
    
    // el error en nulo
    const [ error, setError ] = useState(null)

    // y damos un ref, en true
    const isFirstInput = useRef(true)
    
    // efecto
    useEffect(() => {

        // si el valor del ref (current)
        if(isFirstInput.current) {
            
            // ese ref del current tiene que ser igual al valor del input y igual a ""
            // esto para que hasta que no haya una busqueda del usuario no aparezcan errores
            isFirstInput.current === updateSearch === ""

            // lo retornamos
            return
        
        }

        // si hay una busqueda con "" cadena vacia
        if(updateSearch === "") {
            
            // damos el error y lo retornamos
            setError("No se puede buscar una peli vacia")
  
            return
      
        }
        
        // si hace match con estos parametros, error y lo retornamos
        if(updateSearch.match(/^d+$/)) {
      
            setError("No se puede buscar una peli con numeros")
        
            return
      
        }
        
        // si el valor es menor a 3 damos el error y lo retornamos
        if(updateSearch.length < 3) {
      
            setError("No existen pelis de solo 2 palabras o menos")
        
            return
      
        }
        
        // damos el estado en nulo, ya acabo
        setError(null)
        
        // como dependencia es la busqueda
        // ya que por cada vez que se actualize el valor del input, este efectado sera ejecutado
    }, [updateSearch])
  
    return { updateSearch, setUpdateSearch, error }
    
}