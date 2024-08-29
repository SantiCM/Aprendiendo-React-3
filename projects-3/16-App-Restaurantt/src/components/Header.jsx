import { useContext } from "react"
import logo from "../assets/logo.jpg"
import { Button } from "./UI/Button"
import CartContex from "../store/CardContext"
import userProgressContext from "../store/UserProggresContext"

// Componente del Header
export const Header = () => {

    // mandamos el useContext que creamos de el cart
    const cartCtx = useContext(CartContex)

    // mandamos el useContext que creamos de progreso
    const userProgressCtx = useContext(userProgressContext)

    //total de los productos solicitados
    // damos el context que viene de los items y le aplicamos el reduce el cual siempre recibe dos argumentos
    const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
        
        // retornamos el total y le suamamos la cantidad
        return totalNumber + item.quantity
        
        // damos que inicia desde 0
    }, 0)

    // mostrar la carta
    const handleShowCart = () => {
        
        // agarramos el context del progress y lo abrimos con su metodo
        userProgressCtx.showCart()
    
    }
  
    return (
  
        <header id="main-header">

            <div id="title">

                <img src={logo} alt="Logo Restaurant"></img>

                <h1>ReactFood</h1>

            </div>

            <nav>

                { /* Damos el boton personalizado y le damos el textOnly (clase de css) y le damos el total*/ }

                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>

            </nav>

        </header> 
  
    )

}