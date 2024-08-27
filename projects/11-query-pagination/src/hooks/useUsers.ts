import { type User } from '../types.d'

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";

export const useUsers = () => {
    const { data, isError, isLoading, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>({
        queryKey: ["users"],
        queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false,
        staleTime: 100 * 60 + 5,
    });
    return {
        users: ((data?.pages.flatMap(page => page.users))) ?? [],
        isError,
        isLoading,
        refetch,
        fetchNextPage,
        hasNextPage
    }
}