import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemones } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {

    const dispatch = useDispatch()
    
    const {isLoanding, pokemons, page} = useSelector(state => state.pokemons)

    useEffect(() => {
      
        dispatch(getPokemones())

    }, [])
    

    return (

        <>
            <h1>Pokemon App</h1>

            <span>{isLoanding ?  "True" : "False"}</span>

            <ul>

                {
                
                    pokemons.map(({name})=> (
                    
                        <li key={name}>{name}</li>

                    ))
                    
                }

            </ul>

            <button
            
                disabled={isLoanding}

                onClick={() => dispatch(getPokemones(page))}>

                Next

            </button>
    
        </>

    )

}