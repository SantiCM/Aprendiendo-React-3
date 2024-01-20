// initial state, es el json, que le damos el parse y lo guardamos en el local storage
// damos el nombre y si no un array vacio
export const initialState = JSON.parse(window.localStorage.getItem("cart")) || []

// tipos 
export const CART_ACTION_TYPES = {

    "ADD_TO_CART": "ADD_TO_CART", 
    
    "REMOVE_CART": "REMOVE_CART",

    "CLEAR_CART": "CLEAR_CART",

}

// actualizar el localStorage, recibe el state
export const updateLocalStorage = state => {

    // hacemos un window del localStorage, y en el cart damos el estado y lo volvemos string
    window.localStorage.setItem("cart", JSON.stringify(state))

}

// reducer, tiene state y action
export const cartReducer = (state, action) => {

    // el type y el payload lo recojemos de la action
    const {type: actionType, payload: actionPayload} = action

    // damos el switch de el type
    switch (actionType) {

        // caso de agregar 
        case CART_ACTION_TYPES.ADD_TO_CART : {

            // recojemos el id de el payload
            const { id } = actionPayload

            // vemos el index del product,
            // decimos si el state del findIndex, osea que el primer indice del primer elemento
            // es igual al id 
            const productInCartIndex = state.findIndex(item => item.id === id)

            // si el producto del index es mayor o igual a 0
            if(productInCartIndex >= 0) {

                // el nuevo estado es el structuredClone
                // osea la clonacion identica del state
                const newState = structuredClone(state)
                
                // ese nuevo estado, le damos el index y la cantidad que siempre sea mas 1
                newState[productInCartIndex].quantity += 1
                
                // retornamos ese estado
                return newState
                
            }

            // si no el estado sera la copia, la accion del payload y la cantidad siempre sera 1
            const newState =  [ ...state, { ...actionPayload, quantity: 1 } ]

            // actualizamos el localStorage del nuevo estado
            updateLocalStorage(newState)

            // retornamos el nuevo estado
            return newState

        }   

        // caso, remover
        case CART_ACTION_TYPES.REMOVE_CART : {
            
            // recojemos el id
            const { id } = actionPayload

            // el nuevo estado
            // decimos que el state, lo filtramos
            // buscamos los que pasen
            // y decimos que el item, su id tiene que ser diferente o igual al id
            const newState =  state.filter(item => item.id !== id)

            // actualizamos el localStorage del nuevo estado
            updateLocalStorage(newState)

            // retornamos el nuevo estado
            return newState
        
        }

        // caso de borrar todo
        case CART_ACTION_TYPES.CLEAR_CART : { 

            // actualizamos el local
            updateLocalStorage(initialState) 

            // retornamos el initial por defecto
            return initialState
        
        }
    
    }

    // retornamos SIEMPRE el state
    return state

}