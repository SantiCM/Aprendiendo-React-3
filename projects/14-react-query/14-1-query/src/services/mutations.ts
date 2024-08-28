import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todo";
import { createTodo, delteTodo, updateTodo } from "./api";

export function useCreateTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: Todo) => createTodo(data),
        onMutate: () => {
            console.log("haciendo la mutación");
        },
        onError: (error) => {
            console.log(error, "fallo todo");
        },
        onSuccess: () => {
            console.log("se logró");
        },
        onSettled: async (error) => {
            console.log(error);
            if (!error) {
                await queryClient.invalidateQueries({
                    queryKey: ["todos"]
                })
            }
        }
    })
}

export function useUpdateTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: Todo) => updateTodo(data),
        onError: (error) => {
            console.log(error, "fallo todo");
        },
        onSettled: async (_, error, variables) => {
            if (!error) {
                await queryClient.invalidateQueries({ queryKey: ["todos"] })
                await queryClient.invalidateQueries({ queryKey: ["todo", { id: variables.id }] })
            }
        }
    })
}

export function useDeleteTodo() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => delteTodo(id),
        onError: (error) => {
            console.log(error, "fallo todo");
        },
        onSettled: async (_, error) => {
            if (!error) {
                await queryClient.invalidateQueries({ queryKey: ["todos"] })
            }
        }
    })
}