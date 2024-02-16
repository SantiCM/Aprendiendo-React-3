import PropTypes from "prop-types"
import { useState } from "react";

const CounterApp = ({value}) => {
    
    const [counter, setCounter ] = useState(value)

    const handleAddSuma = () => {
       // setCounter(counter + 1)
       // O
        setCounter((c) => c + 1)
    }

    const handleAddResta = () => {
        setCounter(counter - 1)
    }

    const handleAddReset = () => {
        setCounter(value)
    }

    return ( 
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>   
            <button onClick={ handleAddSuma }>+1</button>
            <button onClick={ handleAddResta }>-1</button>
            <button aria-label="btn-reset" onClick={handleAddReset}>Reset</button>
        </> 
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp