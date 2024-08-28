import { useState } from "react"

// madanmos el initialName, el simbolo, isActive y el cambiar nombre
export const Player = ( { initialName, symbol, isActive, onChangeName } ) => {

    // estado del nombre del juador que recibe el initialName
    const [playerName, setPlayerName] = useState(initialName)

    // estado que recibe el editar en (false)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        
        // cuando actualizes el estado basandote en el valor 
        // anterior de este estado, debes pasar una funcion 
        // a esa funcion de actualizacion del estado en lugar

        setIsEditing((editing) => !editing)

        // si el `primer estado 
        if(isEditing) {
            
            // cambiamos el nombre que recibe el simbolo y el jugador
            onChangeName(symbol, playerName)
            
        }

    }  

    // Propiedad onChange
    const handleChange = (event) => {

        //event.preventDefault()
        
        setPlayerName(event.target.value)
        
    }

    // editar el nombre
    // mandamos el nombre del jugador
    let eitablePlayerName = <span className="player-name" onChange={handleChange}>{playerName}</span>

    //let btnCaption = "Edit"

    // si el primer estado
    if(isEditing) {
        
        // ese nombre no pasa
        eitablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>
    
    }

    //let btnCaption = "Save"

    return (
        
        /* si la clase activa es "active" pasa todo si no es undefined */
        <li className={isActive ? "active" :  undefined}>
            
            <span className="player">

                { /* Mandamos el nombre */ }
                {eitablePlayerName }

                <span className="player-symbol">{symbol}</span>

                { /* Al hacer click mandamos el editarlo y si es editable le damos en save y despues se puede editar  */ }
                <button onClick={ handleEditClick }>{ isEditing ? "Save" : "Edit" }</button>

            </span>
            
        </li>
        
    )

}