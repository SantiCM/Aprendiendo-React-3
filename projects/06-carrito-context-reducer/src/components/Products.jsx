import "./styles/Products.css"
import {AddToCartIcon, RemoveFromCartIcon} from "../components/Icons"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

// componente de los products
export function Products({products}) {

    // recojemos el context de el carrito y agarramos lo que necesitamos de ese contexto
    const {addToCart, cart , removeCart} = useContext(CartContext)

    // checar si hay un product en el cart, damos el product como funcion
    const checkProductInCart = product => {
        
        // retornamos el cart y damos el some
        // el cual es el que comprueba que al menos un elemento pasa
        // damos el item, y decimos si el item del id es igual al product del id
        return cart.some(item => item.id === product.id)
    
    }

    return (
        
        <main className="products">

            <ul>

                {/*hacemos que los productos se vean solo los primeros 10 y damos el mapeo */}
                {products.slice(0,10).map((product) => {

                    // y decimos que ya esta adentro el producto, damos la funcion donde 
                    // comprobamo si hay y damos el product 
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

                                    // si hay producto, damos un estilo y si no tambien
                                    style={{backgroundColor: isProductInCart ? "red" : "orange"}}

                                    // al hacer click, damos una funcion que si el producto esta, damos el remover y si no el agregarlo
                                    // dando el product en ambos
                                    onClick={() => isProductInCart ? removeCart(product) : addToCart(product)}
                                
                                >
                                    {/*Si hay producto damos un icono o otro  */}
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