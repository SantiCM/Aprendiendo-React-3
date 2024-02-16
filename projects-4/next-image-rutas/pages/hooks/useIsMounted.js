import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const useIsMounted = () => {
    const [loaded,setLoaded] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if(router.isReady) {
            setLoaded(true)
        }
    }, [router.isReady])
    
    console.log({router}, router.query.id)

    return loaded
}

export default useIsMounted