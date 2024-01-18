import { useEffect, useState, useRef } from "react"

export function useSearch() {

    const [search, setSearch] = useState("")
  
    const [ error, setError ] = useState(null)

    const isFirstInput = useRef(true)
  
    useEffect(() => {

        if(isFirstInput.current) {
            
            isFirstInput.current === search === ""

            return
        
        }

        if(search === "") {
      
            setError("No se puede buscar una peli vacia")
  
            return
      
        }
  
        if(search.match(/^d+$/)) {
      
            setError("No se puede buscar una peli con numeros")
        
            return
      
        }
  
        if(search.length < 3) {
      
            setError("No existen pelis de solo 2 palabras o menos")
        
            return
      
        }
  
        setError(null)
      
    }, [search])
  
    return { search, setSearch, error }
    
}