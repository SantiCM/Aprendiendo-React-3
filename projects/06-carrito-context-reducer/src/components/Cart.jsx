import { useId } from "react"
import { ClearCartIcon, CartIcon } from "./Icons"
import {useCart} from "../hooks/useCart"
import "./styles/Cart.css"
import { CartItem } from "./CartItem"

export function Cart() {

    const cartId = useId()

    const { cart, addToCart, clearCart} = useCart()

    return (
        
        <>
    
            <label htmlFor={cartId} className="cart-button"><CartIcon></CartIcon></label>

            <input id={cartId} type="checkbox" hidden></input>

            <aside className="cart">

                <ul>

                    {cart.map((product) => (
                        
                        <CartItem 
                        
                            key={product.id}  addToCart={() => addToCart(product)} {...product}
                        />

                    ))}

                </ul>

                <button onClick={clearCart}><ClearCartIcon></ClearCartIcon></button>

            </aside>

        </>
        
    )

}