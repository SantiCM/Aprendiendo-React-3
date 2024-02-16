import { createSlice } from "@reduxjs/toolkit";

// Creando el slice del cart
const cartSlice = createSlice({

    // damos el nombre 
    name: "cart",

    // damos el estado inicial
    initialState: {
        
        // los items como arreglo vacio
        items: [],

        // el total de cantidad en 0
        totalQuantity: 0,

        // total tambien en 0
        totalAmount: 0
    
    },

    // damos los reducers
    reducers: {

        // la funcion de agregar item a la carta
        // damos el estado y la accion
        addItemToCart(state,action) {
            
            // nuevo item es igual a la accion que viene del payload 
            const newItem = action.payload

            // si existe el item es igual  al estado que viene de los items, le aplicamos el metodo find que recibe
            // una funcion que da esa funcion que viene del id que sea igual a nuevo item que viene del id
            const exisitingItem = state.items.find(item => item.id === newItem.id)

            // el estado que viene del total mas 1
            state.totalQuantity + 1

            // si existe el item
            if(!exisitingItem) {
                
                // decimos que el estado que viene de los items le pusheamos
                state.items.push({
                    
                    // el id, que es el nuevo item
                    itemId: newItem,

                    // el precio que es el nuevo item del precio
                    price: newItem.price,

                    // la cantidad que es de 1
                    quantity: 1,

                    // el total, es el nuevo item que viene del precio
                    totalPrice: newItem.price,

                    // el nombre, es el nuevo item que viene del titulo
                    name: newItem.title
                
                })
                
                // si no
            } else {
                
                // el item que existe de la cantidad es igual a ese item que viene de la cantidad se le suma 1
                exisitingItem.quantity = exisitingItem.quantity + 1

                // el item que existe de la cantidad es igual a ese item que viene del total del precio mas el nuevo item del precio
                exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price
            
            }
        
        },

        // remover el item
        // recibe el estado y la accion
        removeItemToCart(state, action) {
            
            // el id viene de la accion del payload
            const id = action.payload

            // si existe el item es igual  al estado que viene de los items, le aplicamos el metodo find que recibe
            // una funcion que da esa funcion que viene del id que sea igual al id
            const existingItem = state.items.find(item => item.id === id)

            // el estado que viene del total menos 1
            state.totalQuantity - 1

            // si el item existente de la cantidad es igual a 1
            if(existingItem.quantity === 1) {
                
                // decimos que el estado que viene de los item, le damos el filter
                // le damos funcion, esa funcion que viene del id que sea diferente al id
                state.items = state.items.filter(item => item.id !== id)

                // si no
            } else {
                
                // ese item existente menos 1
                existingItem.quantity - 1

                // ese item existente que viene del total del precio sea igual
                // al item existente del total del precio menos el item existente del precio
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            
            }
        
        }
        
    }

})

// damos las acciones
export const cartActions = cartSlice.actions

export default cartSlice