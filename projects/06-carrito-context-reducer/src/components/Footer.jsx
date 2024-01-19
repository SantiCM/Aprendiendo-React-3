import { useContext } from "react"
import "./Footer.css"
import { FiltersContext } from "../context/FiltersContext"

export function Footer() {

    const {filters} = useContext(FiltersContext)

    return (

        <footer className="footer">

            {JSON.stringify(filters, null, 2)}

            <span>React Shopping 06-useContext y useReducer</span>

        </footer>
        
    )

}