import "./styles/Products.css"
import {AddToCartIcon, RemoveFromCartIcon} from "../components/Icons"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function Products({products}) {

    const {addToCart, cart , removeCart} = useContext(CartContext)

    const checkProductInCart = product => {
    
        return cart.some(item => item.id === product.id)
    
    }

    return (
        
        <main className="products">

            <ul>

                {products.slice(0,10).map((product) => {

                    const isProductInCart = checkProductInCart(product)

                    return (
                        
                        <li key={product.id}>

                            <img src={product.thumbnail} alt={product.title}></img>

                            <div>

                                <h3>{product.title}</h3>

                                <span>${product.price}</span>

                                <span>{product.descriptions}</span>

                            </div>

                            <div>

                                <button 

                                    style={{backgroundColor: isProductInCart ? "red" : "orange"}}
                                
                                    onClick={() => isProductInCart ? removeCart(product) : addToCart(product)}
                                
                                >
                                    { isProductInCart ? <RemoveFromCartIcon></RemoveFromCartIcon> : <AddToCartIcon></AddToCartIcon> }
                                     
                                </button>

                            </div>

                        </li>   
                        
                    )
                        
                })}

            </ul>

        </main>
        
    )

}