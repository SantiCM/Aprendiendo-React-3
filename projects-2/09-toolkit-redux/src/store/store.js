import { configureStore } from '@reduxjs/toolkit'
import { counterSlice  } from "./slices/counter/counterSlice"
import { pokemonSlice } from './slices/pokemon/PokemonSlice'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)

})