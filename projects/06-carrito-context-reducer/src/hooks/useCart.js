import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {

    const cart = useContext(CartContext)

    if(cart === undefined) {
    
        throw new Error("Estas utilizando un hook en un stio que no se puede, porque no esta envuelta en un provider")
    
    }
    
    return cart

}