import { createContext, useReducer } from "react"

// damos el crear context 
const CartContex = createContext({

    // donde damos los items como arreglo vacio
    items: [],

    // el agregar item, le damos una funcion donde recibe el item
    addItem: (item) => {},

    // el remover item, le damos una funcion donde recibe el id
    removeItem: (id) => {},

    // el eliminar el carrito , le damos una funcion 

    clearCart: () => {},

})

// reducer, damos el estado y la accion
const cartReducer = (state, action) => {

    // si la accion es de tipo (la clave de agregar item)
    if(action.type === "ADD_ITEM") {
    
        // ...update de state
        // Nunca se debe de mutar el estado de manera inicial, porque push editara el array de los items existentes, almacenando en memoria
        //state.items.push(action.item)

        // damos que si existe, damos el estado que viene de los items que le damos la propiedad del findIndex
        // y le damos una funcion que da que si el item que viene del id sea igual a la accion que
        // viene del item del id
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        // actualizamos los items con array y le damos copia del estado que viene de los items
        const updateItems = [...state.items]
 
        // damos el menos 1, porque el findIndex si encuentra el array dara un -1
        if(existingCartItemIndex > - 1) {

            // si existe el item, le damos el estado de los items y como arreglo el existe del index
            const existingItem = state.items[existingCartItemIndex]
            
            // item actualizadp
            const updateItem = {

                // copia del item existente
                ...existingItem,

                // y la cantidad que sea el item existente que viene de la cantidad mas 1
                quantity: existingItem.quantity + 1

            } 

            // y los items actualizados le damos array del index que si existe que sea igual a el item actualizado
            updateItems[existingCartItemIndex] = updateItem
            
            // si no 
        } else {
            
            // los item actualizados le damos el push y un objeto de la copia de la accion del item y la cantidad sera de 1
            updateItems.push({...action.item, quantity: 1})
        
        }

        // retornamos 
        return {
            
            // la copia del estado
            ...state,

            // los items seran los items actualizados
            items: updateItems
        
        }
    
    }

    // si la accion es de tipo (la clave de remover el item)
    if(action.type === "REMOVE_ITEM") {
    
        // ...remover el state

        // damos que si existe, damos el estado que viene de los items que le damos la propiedad del findIndex
        // y le damos una funcion que da que si el item que viene del id sea igual a la accion que
        // viene del item del id
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

        // si existe el item, le damos el estado de los items y como arreglo el existe del index
        const existingCartItem = state.items[existingCartItemIndex]

        // actualizar el item es la copia del estado de los items
        const updateItems = [...state.items]

        // si existe el item en la caja y su cantidad es igual a 1
        if(existingCartItem.quantity === 1) {
        
            // toma un indice el del cart del index,
            // el numero de articulos que debe aplicarse el metodo splice, osea eliminados
            updateItems.splice(existingCartItemIndex, 1)
            
            // si no 
        } else {
            
            // actualizar item
            const updateItem = {
                
                // damos la copia que si existe 
                ...existingCartItem, 

                // la cantidad es que si existe la caja en el item que viene de la cantidad menos 1
                quantity: existingCartItem.quantity - 1
            
            }

            // y los items actualizados le damos array del index que si existe que sea igual a el item actualizado

            updateItems[existingCartItemIndex] = updateItem
        
        }

        // retornamos 
        return {
            
            // la copia del estado
            ...state,

            // los items seran los items actualizados
            items: updateItems
        
        }
    
    }

    // si la accion es de tipo (la clave de eliminar la caja)
    if(action.type === "CLEAR_CART") {
        
        // retornamos la copia del estado, y los items como array vacio
        return {...state, items: []}
    
    }

    // SIEMPRE RETORNAMOS EL ESTADO
    return state

}

// damos el context que reicibe el children
export const CardContextProvider = ({children}) => {

    // mandamos el reducer donde le damos la variable hecha y como objeto los items como arreglo vacio
    const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    // dar el item, le damos como argumento el item
    const addItem = (item) =>   {
        
        // el segundo estado dara objeto que el type sea la clave y damos el item
        dispatchCartAction({type: "ADD_ITEM", item})

    }

    // remover el item, le damos como argumento el id
    const removeItem = (id) =>   {

        // el segundo estado dara objeto que el type sea la clave y damos el id
        dispatchCartAction({type: "REMOVE_ITEM", id})
        
    }

    // eliminar la caja
    const clearCart = () =>   {

        // el segundo estado dara objeto que el type sea la clave
        dispatchCartAction({type: "CLEAR_CART"})
        
    }   

    // damos el context, todas las variables
    // y damos que los items seran el primer estado que viene de los items
    const cartContext = {
    
        items : cartState.items,

        addItem,

        removeItem,

        clearCart
    
    }

    return (
        
        // damos el context del provider con su valor y el children        

        <CartContex.Provider 
    
            value={cartContext} 
        
        >
            {children}
        
        </CartContex.Provider>

    )
    
}

export default CartContex