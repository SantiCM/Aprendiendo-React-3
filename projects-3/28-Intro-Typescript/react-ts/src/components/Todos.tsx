import React, { useContext } from "react"
import { TodoItem } from "./TodoItem"
import TodosContext from "../store/todos-context"

// React.FC: deja en claro que es una funcion que actua como componente funcional
//                   tipo de sintaxis generico
// se desbloquea una funcion de tipo FC, que fusionara cualquier tipo de objeto que se redefina
// con un tipo de objeto base con la propiedad de los children
const Todos: React.FC = () => {

    // damos el context
    const todosCtx = useContext(TodosContext)

    return (
        
        <ul className="todos">

            {/*mapeamos los items */}
            {todosCtx.items.map((item) => (
                
                // bind: vincular un metodo de js que permite 
                // preconfigurar una funcion para ejecucion futura 
                <TodoItem 

                    // damos la key
                    key={item.id} 

                    // damos el text del item
                    text={item.text} 

                    // lo removemos 
                    onRemove={todosCtx.removeTodo.bind(null, item.id)}
                
                >

                </TodoItem>
                
            ))}

        </ul>
        
    )

}

export default Todos