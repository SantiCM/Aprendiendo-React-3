import { createContext  } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

// creamos el contexto del carrito
export const CartContext = createContext()

// provider que recibe el children
export const CartContextProvider = ({children}) => {

    // recojemos todo lo que ocupamos del hook donde esta el reducer
    const { state, addToCart, removeCart, clearCart } = useCartReducer()

    return (

        // le damos el provider y los valores
        <CartContext.Provider value={ { cart: state, addToCart, clearCart, removeCart } }> 
        
            {children}  {/*Damos el children */}
        
        </CartContext.Provider>    
        
    )

}