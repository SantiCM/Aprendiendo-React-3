import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

// Siempre los hooks se inicalizan por use
export function useCatFact(){

    // recojemos el estado del fact
    const [fact, setFact] = useState()

    // refrescar
    const refreshFact = () => {
        
        // es el getRandom (peticion), damos el then, damos un nuevo fact y damos el segundo estado
        // mostramos el nuevo fact
        getRandomFact().then(newFact => setFact(newFact))
    
    }

    // damos el efecto de refrescar
    // lo damos en un efecto sin el () =>, ya que sabemos que esa funcion pasa
    useEffect(refreshFact, [])

    // retornamos las propiedades que vamos a utilizar fuera
    return { fact, refreshFact }

}