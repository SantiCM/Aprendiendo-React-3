import axios from "axios"
import { Todo } from "../types/todo"
import { Project } from "../types/project"

const BASE_URL = "http://localhost:8080"
const axiosIstance = axios.create({ baseURL: BASE_URL })

export const getTodosIds = async () => {
    return (await axiosIstance.get<Todo[]>('todos')).data.map((item) => item.id)
}

export const getTodo = async (id: number) => {
    return (await axiosIstance.get<Todo>(`todos/${id}`)).data
}

export const createTodo = async (data: Todo) => {
    await axiosIstance.post("todos", data)
}

export const updateTodo = async (data: Todo) => {
    await axiosIstance.put(`todos/${data.id}`, data)
}

export const delteTodo = async (id: number) => {
    await axiosIstance.delete(`todos/${id}`)
}

export const getProjects = async (pageParam = 1) => {
    return (await axiosIstance.get<Project[]>(`projects?_page=${pageParam}&_limit=3`)).data
}