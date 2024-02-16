import React, { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
    
    const [todoId, setTodoId] = useState(1)

    const { data: todo, isLoading } = useGetTodoQuery(todoId)

    const nextTodo = () => {
    
        setTodoId(todoId + 1)

    }

    const previewTodo = () => {
    
        setTodoId(todoId - 1)

    }
    
    return (

        <>
        
            <h1>Todos - RTK Query</h1>

            <hr></hr>

            <h4>isLoanding: {isLoading ? "True" : "False"}</h4>

            <pre>{JSON.stringify(todo)}</pre>


           {/* <ul>

                {
                    todos.map(todo => (
                        
                        <li key={todo.id}>{todo.title}</li>
                        
                    ))
                
                }

            </ul>*/}

            <button className='btn-ip' onClick={previewTodo}>

                Preview Todo

            </button>
            
            <button className='btn-ip' onClick={nextTodo}>

                Next todo

            </button>
        
        </>

    )

}