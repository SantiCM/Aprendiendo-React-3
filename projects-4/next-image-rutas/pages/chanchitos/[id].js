import useIsMounted from "../hooks/useIsMounted"
import { useRouter } from "next/router"

const ChanchitoDinamico = () => {
    const useMounted = useIsMounted()
    const router = useRouter()
    if(!useMounted) {
        return null
    }
    console.log({router}, router.query.id)
    return (
        <div>
            <p>Chanchito dinamico</p>
        </div>
    )
}

export default ChanchitoDinamico