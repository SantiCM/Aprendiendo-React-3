import { useId } from "react"
import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./Icons"


export function Cart() {

    const cartId = useId()

    return (
        
        <>
    
            <label htmlFor={cartId}><CartIcon></CartIcon></label>

            <input id={cartId} type="checkbox" hidden></input>

        </>
        
    )

}