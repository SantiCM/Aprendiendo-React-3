import { useEffect } from "react"
import { useState } from "react"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { EVENT } from "../const"


export function App () {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        
        // change de la location
        const onLocationChange = () => { setCurrentPath(window.location.pathname) }

        // se da cuando se da un evento de la navegacion y el change
        window.addEventListener(EVENT.PUSHSTATE, onLocationChange)

        // evento del popstate = es cuando en el navegador haces para atras
        // osea a la pagina que anteriormente se visito
        window.addEventListener(EVENT.POPSTATE, onLocationChange)

        // lo limpiamos (remover el listener)
        return () => { 
            
            window.removeEventListener(EVENT.PUSHSTATE, onLocationChange) 
            
            // remover el evento
            window.removeEventListener(EVENT.POPSTATE, onLocationChange) 
        
        }

    }, [])
    

    return (
        
        <main>
            
            {currentPath === "/" && <HomePage></HomePage>}   

            {currentPath === "/about" && <AboutPage></AboutPage>}

        </main>
        
    )

}