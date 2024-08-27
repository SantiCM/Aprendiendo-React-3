import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query"
import { getProjects, getTodo, getTodosIds } from "./api"

export function useTodosIds() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds,
    })
}

export function useTodos(ids: (number | undefined)[] | undefined) {
    return useQueries({
        queries: (ids ?? []).map((id) => {
            return {
                queryKey: ["todo", { id }],
                queryFn: () => getTodo(id!)
            }
        })
    })
}
export function useProjects(page: number) {
    return useQuery({
        queryKey: ["projects", { page }],
        queryFn: () => getProjects(page),
        placeholderData: keepPreviousData
    })
}