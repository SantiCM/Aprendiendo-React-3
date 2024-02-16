import React from "react"

// item del todo, le decimos que es comoponente funcional
// damos el texto de string y el remover de el evento del mouse como void, no retorna
export const TodoItem: React.FC<{text: string, onRemove: (event: React.MouseEvent) => void}> = (props) => {
  
    return (
  
        <li onClick={props.onRemove} className="item">{props.text}</li>
  
    )

}