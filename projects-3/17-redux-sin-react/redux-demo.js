// Redux sin react

// Solicitamos el redux
const redux = require("redux")

// damos una variable del reducer donde da el estado que es el counter igual a 0 y la accion
const counterReducer = (state = {counter: 0}, action) => {

    // si la accion su tipo es incrementar
    if(action.type === "increment") {
        
        // retornamos
        return {
            
            // el counter del estado que viene del counter mas 1
            counter : state.counter + 1
        
        }

    }

    // si la accion su tipo es decrementar
    if(action.type === "decrement") {
        
        // retornamos
        return {
            
            // el counter del estado que viene del counter menos 1
            counter : state.counter - 1 
        
        }

    }

    // retornamos el estado
    return state

}

// creamos el store 
const store = redux.createStore(counterReducer)

// forma de darle estado al store
const counterSubscriber = () => {

    const latestState = store.getState()

    console.log(latestState)

}

store.subscribe(counterSubscriber)

// despachamos las dos acciones
store.dispatch({type: "increment"})

store.dispatch({type: "decrement"})