
import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  value: 0,

}

export const pokemonSlice = createSlice({

    name: 'pokemon',
  
    initialState: {
        
        page: 0,
        
        pokemons: [],
        
        isLoanding: false
    
    },

    reducers: {

        startLoandingPokemons: (state, /*action*/ ) => {
      
            state.isLoanding = true
    
        },

        setPokemons: (state, action) => {
            
            state.isLoanding = false

            state.page = action.payload.page

            state.pokemons = action.payload.pokemons
        
        }
    
    },

})

export const { startLoandingPokemons, setPokemons } = pokemonSlice.actions