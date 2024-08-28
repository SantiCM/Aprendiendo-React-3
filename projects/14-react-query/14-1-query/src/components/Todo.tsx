//import { useIsFetching } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from "../services/mutations"
import { useTodos, useTodosIds } from "../services/queries"
import { Todo } from "../types/todo"

export default function Todos() {

    const { data } = useTodosIds()
    const todos = useTodos(data)
    const { register, handleSubmit } = useForm<Todo>()
    const createTodoMutation = useCreateTodo()
    const updateTodoMutation = useUpdateTodo()
    const deleteTodo = useDeleteTodo()

    const handleCreateSubmit: SubmitHandler<Todo> = (data) => {
        createTodoMutation.mutate(data)
    }

    const handleMarkAsSubmit = (data: Todo | undefined) => {
        if (data) {
            updateTodoMutation.mutate({ ...data, checked: true })
        }
    }

    const handleDeleTodo = (id: number) => {
        deleteTodo.mutate(id)
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleCreateSubmit)} className="max-w-sm mx-auto">
                <h4>New todo:</h4>
                <div className="mb-5">
                    <label htmlFor="title">Title</label>
                    <input placeholder="Title" {...register("title")} />
                </div>
                <div className="mb-5">
                    <label htmlFor="description">Description</label>
                    <input placeholder="Desc" {...register("description")} />
                </div>
                <button className={createTodoMutation.isPending ? "bg-red-200" : "bg-blue-700"} type="submit" disabled={createTodoMutation.isPending}>
                    {createTodoMutation.isPending ? "Create" : "Create Todo"}
                </button>
            </form>
            <div className="mt-10 flex justify-center items-center">
                {data?.map((id) => (
                    <span key={id}>{id}</span>
                ))}
            </div>
            <ul className="max-w-md mx-auto mt-10 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {todos?.map(({ data }) => {
                    return (
                        <li key={data?.id}>
                            <div>
                                <span>
                                    <strong>Id: {data?.id}</strong>
                                    <strong>Title: {data?.title}</strong>
                                    <strong>Desc: {data?.description}</strong>
                                </span>
                                <div className="flex gap-x-3">
                                    <button disabled={data?.checked} onClick={() => handleMarkAsSubmit(data)}>
                                        {data?.checked ? "Done" : "Mark as done"}
                                    </button>
                                    {data?.id && (
                                        <button onClick={() => handleDeleTodo(data?.id)}>
                                            Delete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}