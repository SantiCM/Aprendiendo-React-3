import { useReducer, useState } from "react"

// state = { contador : 0 }
// action = {type: string, payload: 1,string, obj y array}

const inicial = { contador: 0}
const reducer = (state, action) => {
    switch(action.type) {
        case "incrementar":
            return { contador: state.contador + 1 }
        case "decrementar" :
            return { contador: state.contador -1}
        case "set" :
            return { contador: state.payload}
        default: 
        return state
    }
} 


const App = () => {
    const [state, dispatch] = useReducer(reducer, inicial)
    const [valor, setValor] = useState(0)

    return (
        <div>
            Contador: {state.contador}
            <input value={valor} onChange={e => setValor (e.target.value)}></input>
            <button onClick={() => dispatch({ type: "incrementar" })}>Mas</button>
            <button onClick={() => dispatch({ type: "decrementar" })}>Menos</button>
            <button onClick={() => dispatch({ type: "set", payload: valor })}>Set</button>
        </div>    
    )
}

//export default App
