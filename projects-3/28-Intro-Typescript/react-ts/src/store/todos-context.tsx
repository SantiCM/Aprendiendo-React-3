import React, {createContext, useState } from "react"
import Todo from "../models/todo"

// damos un tipo
type TodosContextObj = {

    // damos los items del modelo del todo como array
    items: Todo[],

    // agregar recibe el texto que viene del string y damos el void, osea que no retorna nada
    addTodo: (text: string) => void,

    // agregar recibe el id que viene del string y damos el void, osea que no retorna nada
    removeTodo: (id: string) => void

}

// damos el crear contexto y damos el <> : poder crear un componente que pueda funcionar con una variedad de tipos en lugar de uno solo. 
export const TodosContext = createContext<TodosContextObj>({

    // damos los items como arreglo vacio
    items: [],

    // damos el agregar como funcion
    addTodo: () => {},

    // y lo mismo en eliminar pero damos el id que es string
    removeTodo: (id: string) => {}

})

// React.FC: da a entender que es un componente funcional
// damos el children que es el react node y las props
const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    // damos un estado de las todos y le damos el <>: poder crear un componente que pueda funcionar con una variedad de tipos en lugar de uno solo. 
    // y damos como array vacio
    const [todos, setTodos] = useState<Todo[]>([])

    // agregar damos el texto del string
    const addTodoHandler = (text: string) => {
        
        // nuevo todo es nuevo del todo del text
        const newTodo = new Todo(text)

        // el 2 estado damos la funcion
        setTodos((prevState) => {

            // retornamos la funcion de arriva
            //      concat, crea una nueva matriz le damos el nuevo todo
            return prevState.concat(newTodo)
    
        })

    }

    // remover, le damos el id del string
    const removeTodoHandler = (id: string) => {
        
        // damos el 2 estado de la funcin
        setTodos((prev) => {
            
            // retornamos la funcion damos el filter, meternos al array y le decimos que si el id es diferente al id fuera
            return prev.filter(todo => todo.id !== id)
      
        })
  
    }

    // damos el valor del context con el type de arriba
    const ctxValue: TodosContextObj = {
        
        // damos los items que son los todos
        items: todos,

        // agregar
        addTodo: addTodoHandler,

        /// eliminar
        removeTodo: removeTodoHandler
        
    }
  
    return (
        
        // damos el provider, el valor y el children
        <TodosContext.Provider value={ctxValue}>{props.children}</TodosContext.Provider>
  
    )

}

export default TodosContextProvider