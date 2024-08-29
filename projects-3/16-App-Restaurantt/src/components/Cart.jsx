import { useContext } from "react"
import {Modal} from "./UI/Modal"
import CartContex from "../store/CardContext"
import { formatting } from "../util/formatting"
import { Button } from "./UI/Button"
import userProgressContext from "../store/UserProggresContext"
import { CartItem } from "./CartItem"


export const Cart = () => {

    // mandamos el useContext que creamos de el cart
    const cardCtx = useContext(CartContex)

    // mandamos el useContext que creamos de progreso
    const userProgressCtx = useContext(userProgressContext)

    // damos el reduce del total del precio mas el item de la cantidad por el precio que empieza desde 0
    const cartTotal = cardCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price , 0 )

    // cerrar caja 
    const handleCloseCart = () => {
        
        // damos el context del progress y le damos cerrar caja
        userProgressCtx.hideCart()
    
    }   

    // abrir checkout
    const handleGoToCheckout = () => {
        
        // damos el context del progress y le damos abrir checkout
        userProgressCtx.showCheckout()
    
    } 
    
    return (
        
        //damos el modal
        
        <Modal 

            // damos como clase la carta
            className= "cart"

            // el open es el context de progress que viene del progreso que sea igual a cart
            open={userProgressCtx.progress === 'cart'}

            // el cerrar es el context de progress que viene del progreso que sea igual a cart si es asi, damos el cerrar la caja sino nulo
            onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
        
        >

            <h2>You Cart</h2>

            <ul>

                { /* Mapemaos el context del card que viene de los items y damos el componente */ }

                {cardCtx.items.map((item) => (
                
                    <CartItem 
                    
                        key={item.id} 
                        
                        name={item.name}
                        
                        quantity={item.quantity}

                        price={item.price}
                        
                        onIncrease={() => cardCtx.addItem(item) } 
                        
                        onDecrease={() => cardCtx.removeItem(item.id) }

                    >

                    </CartItem>
                
                ))}

            </ul>
            <p className="cart-total">{formatting.format(cartTotal)}</p>

            <p className="modal-actions">

                { /* Damos el boton personalizado y le damos el textOnly (clase de css) y le damos el CERRAR */ }

                <Button textOnly onClick={handleCloseCart}>Close</Button>

                { /* decimos que si los items son mayores a 0 damos el boton personalizado donde al hacer click empezamos el chek  */ }

                {cardCtx.items.length > 0 && ( <Button onClick={handleGoToCheckout}>Checkout</Button> )}
                
            </p>

        </Modal>
  
    )

}