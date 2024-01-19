import { useContext } from "react"
import "./styles/Footer.css"
import { FiltersContext } from "../context/FiltersContext"
//import { useCart } from "../hooks/useCart"

export function Footer() {

    const {filters} = useContext(FiltersContext)

    //const {cart} = useCart()

    return (

        <footer className="footer">

            {JSON.stringify(filters, null, 2)}

            {/*JSON.stringify(cart, null, 2)*/}

            <span>React Shopping 06-useContext y useReducer</span>

        </footer>
        
    )

}