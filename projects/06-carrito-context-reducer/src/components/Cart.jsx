import { useId } from "react"
import { ClearCartIcon, CartIcon } from "./Icons"
import {useCart} from "../hooks/useCart"
import "./styles/Cart.css"
import { CartItem } from "./CartItem"

// carrito
export function Cart() {

    // id unicooo
    const cartId = useId()

    // recojemos lo que ocupamos del hook
    const { cart, addToCart, clearCart} = useCart()

    return (
        
        <>

            {/*Damos el id unico */}
            <label htmlFor={cartId} className="cart-button"><CartIcon></CartIcon></label>

            {/*Damos el id (del label) */}
            <input id={cartId} type="checkbox" hidden></input>

            <aside className="cart">

                <ul>

                    {/*mapeamos lo del cart */}
                    {cart.map((product) => (

                        // damos el componente donde tenemos todo lo que se va a ver en el carrito
                        <CartItem 
                            // id de key, el agregar es una funcion que damos el agregar y damos el product y la copia
                            // entera del product
                            key={product.id}  addToCart={() => addToCart(product)} {...product}
                        />

                    ))}

                </ul>

                {/*Al hacer click en el boton, lo eliminamos todo de golpe */}
                <button onClick={clearCart}><ClearCartIcon></ClearCartIcon></button>

            </aside>

        </>
        
    )

}