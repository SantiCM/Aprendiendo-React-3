import { useState } from "react"
import { useProjects } from "../services/queries"

export default function Projects() {

    const [page, setPage] = useState(1)

    const { data, isPending, error, isError, isPlaceholderData, isFetching } = useProjects(page)

    return (
        <div>
            {isPending ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error {error.message}</div>
            ) : (
                <div className="flex flex-col mx-auto w-full">
                    <div>
                        {data.map((project) => (
                            <p key={project.id}>{project.name}</p>
                        ))}
                    </div>
                    <span>Current Page: {page}</span>
                    <div className="flex gap-x-3 mt-4">
                        <button onClick={() => setPage(page - 1)}>Prev</button>
                        <button onClick={() => {
                            if (!isPlaceholderData) {
                                setPage(page + 1)
                            }
                        }}>Next</button>
                    </div>
                    {isFetching ? <span>Loading..</span> : null}
                </div>
            )}
        </div>
    )
}