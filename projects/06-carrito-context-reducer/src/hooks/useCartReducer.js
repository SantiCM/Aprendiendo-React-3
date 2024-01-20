import { useReducer } from "react"
import { CART_ACTION_TYPES, cartReducer, initialState } from "../reducers/cart"

// hook del reducer de cart
export function useCartReducer() {

    // recojemos el state y el dispatch, y damos su reducer creado y el estado inicial
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // el agregar, damos el product y damos el dispatch de tipo agregar y damos el payload que es el product
    const addToCart = product => dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product })

    // el agregar, damos el product y damos el dispatch de tipo remover y damos el payload que es el product
    const removeCart = product => dispatch({ type: CART_ACTION_TYPES.REMOVE_CART, payload: product })

    // el agregar, damos el product y damos el dispatch de tipo eliminar de golpe
    const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

    // retornamos lo que ocupamos
    return { state, addToCart, removeCart, clearCart }

}