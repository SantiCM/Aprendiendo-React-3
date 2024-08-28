import { useUsers } from "../hooks/useUsers"

export const Results = () => {
    const { users } = useUsers()

    return (
        <h2 className="text-xl font-extrabold mt-6">Total: {users.length}</h2>
    )
}