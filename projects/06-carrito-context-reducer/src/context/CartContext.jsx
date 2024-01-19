import { createContext  } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const { state, addToCart, removeCart, clearCart } = useCartReducer()

    return (
        
        <CartContext.Provider value={ { cart: state, addToCart, clearCart, removeCart } }> 
        
            {children}
        
        </CartContext.Provider>    
        
    )

}