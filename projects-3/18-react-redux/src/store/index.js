import { createStore } from "@reduxjs/toolkit"

// Damos una variable para idemtificar la clave
export const INCREMENENT = "increment"

// el estado inicial es un objeto del counter en 0, y el showCounter en true
const initialState = {counter: 0, showCounter: true}

// reducer del counter
// damos el estado que es el initialState y la accion
const counterReducer = (state = initialState, action) => {

    // si la accion que viene del tipo es la clave 
    if(action.type === INCREMENENT) {
        
        // retornamos
        return {
            
            // el counter viene del estado del counter mas 1
            counter: state.counter + 1,

            // damos el counter del estado del showCounter
            showCounter: state.showCounter
        
        }
    
    }

    // si la accion que viene de la clave incrementar de tanto en tanto
    if(action.type === "increase") {
    
        return {
            
            // el counter viene del estado mas la accion del amount
            counter: state.counter + action.amount,

            // el show counter viene del estado del showCounter
            showCounter: state.showCounter
        
        }
    
    }

    // si la accion que viene del tipo es la clave decrementar
    if(action.type === "decrement") {
    
        return {
            
            // el counter viene del estado del counter menos 1
            counter: state.counter - 1,

            // el show counter viene del estado del showCounter
            showCounter: state.showCounter
        
        }
    
    }

    // si la accion que viene del tipo es la clave reset
    if(action.type === "reset") {
    
        return {
            
            // el show counter que no exista el estado del showCounter
            showCounter: !state.showCounter,

            // el counter viene del estado del counter 
            counter: state.counter
        
        }
    
    }

    // retornamos el estado
    return state

}

// damos el store
const store = createStore(counterReducer)

export default store