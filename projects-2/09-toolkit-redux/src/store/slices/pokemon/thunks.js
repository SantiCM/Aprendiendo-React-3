import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoandingPokemons } from "./PokemonSlice"

export const getPokemones = ( page = 0 ) => {

    return async (dispatch, getState) => {
        
        dispatch(startLoandingPokemons())

       //const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)

       //const data = await response.json()

       const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
       
       dispatch(setPokemons({pokemons: data.results, page: page + 1 }))

    }

}