import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";


// la creacion del context
export const CartContext = createContext({

  // los items como array vacio
  items: [],

  // y las otras 2 propiedades como una funcion

  addItemToCart: () => {},

  updatedItemQuantity: () => {},

});

// Tarjeta de compras 
// recibe el state y la accion
const shoppingCardReducer = (state, action) => {

    // si el tipo es ADD_ITEM
    if(action.type === "ADD_ITEM") {
            
        // mandamos una variable de actualizar los productos
        // hacemos el array de la copia del state que viene de los items
        const updatedItems = [...state.items];
        
        // si existe el carrito recibe la copia anterior con el metodo findIndex,
        //  Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada
        // y mandamos una funcion que hace flecha, de esa funcion que viene del id es igual a la accion que viene del payload

        const existingCartItemIndex = updatedItems.findIndex(
            
            (cartItem) => cartItem.id === action.payload
          
        );
        
        // si existe la cart en el items, mandamos la copia del state que viene de los items
        // y recibe como array la variable anterior
        const existingCartItem = updatedItems[existingCartItemIndex];
            
        // si existe
        if (existingCartItem) {
            
            // actualizar el item
            const updatedItem = {
                
                // hacemos copia de que existe
                ...existingCartItem,
                
                // y la cantidad sera si existe que viene de la cantidad mas 1
                quantity: existingCartItem.quantity + 1,
            
            };
            
            // mandamos el actualizar con el array del index que sea igual a esa actualizacion
            updatedItems[existingCartItemIndex] = updatedItem;
        
            // si no 
        } else {
            
            // mandamos la variable de los productos
            // viene de el archivo de js y le aplicamos el metodo find, que crea un nuevo array del mismo array
            // y le mandamos una funcion que esa misma funcion que viene del id sea igual a la accion que viene del payload

            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);

            // lo actualizado, lo mandamos
            updatedItems.push({
                
                // mandamos lo que queremos que se muestre del producto
                id: action.payload,
    
                name: product.title,
    
                price: product.price,
    
                quantity: 1,
            
            })
        }
        
        // retornamos
        return {

            ...state, // se ocupa

            // los items, seran los productos actualizados
            items: updatedItems,
          
        };

    }

    // si el tipo es UPDATE_ITEM
    if(action.type === "UPDATE_ITEM") {

        // mandamos una variable de actualizar los productos
        // hacemos el array de la copia del state que viene de los items
        const updatedItems = [...state.items];

        // si existe el carrito recibe la copia anterior con el metodo findIndex,
        //  Retorna el índice del primer elemento de un array que cumpla con la función de prueba proporcionada
        // y mandamos una funcion que hace flecha, de esa funcion que viene del id es igual a la accion que viene del payload que viene del producto de su id

        const updatedItemIndex = updatedItems.findIndex(
    
            (item) => item.id === action.payload.productId
  
        );

        // actualizar el item
        const updatedItem = {
            
            // hacemos copia de que existe con el array del index de actualizar
            ...updatedItems[updatedItemIndex],

        };

        // y que se item actualizado que viene de la cantidad sea masigual a la accion que viene del payload, que viene de el mount
        updatedItem.quantity += action.payload.amount;

        // si la actualizacion del item que viene de la cantidad es menor o igual a 0 
        if (updatedItem.quantity <= 0) {
            
            // decimos que los items actualizados con el metodo splice 
            //  cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
            // y le mandamos el item actualiazdo del index en 1
            updatedItems.splice(updatedItemIndex, 1);
            
            // si no
        } else {
            
            // mandamos los item actualizados que le damos el array del index que sea igual al item actualizado
            updatedItems[updatedItemIndex] = updatedItem;
  
        }

        // retornamos 
        return {
            
            // la copia del state
            ...state,

            // y los items seran esos items actualizados
            items: updatedItems,

        };
    
    }

    // retornamos el state
    return state

}

// mandamos el contexto del provider que recibe el children
export const CartContextProvider = ({ children }) => {

    // mandamos el useReducer que recibe el reducer creado y como objeto los items como arreglo vacio
    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(shoppingCardReducer, {items: []})
    
    // el item de la carta recibe el id
    function handleAddItemToCart(id) {

        // mandamos el dispatch del reducer
        shoppingCartDispatch({
            
            // type su clave
            type: "ADD_ITEM" ,// add-item

            // su payload es el id
            payload: id
            
        })
    
    }

    // mandamos el useReducer que recibe el reducer creado y como objeto el producto con su id, y el amount
    function handleUpdateCartItemQuantity(productId, amount) {

        // mandamos el dispatch del reducer
        shoppingCartDispatch({
            
            // type su clave
            type: "UPDATE_ITEM" ,// update-item

            // su payload, mandamos el objeto y ahi mandamos el producto con su id, y el amount
            payload: {
                
                productId,

                amount
            
            }
            
        })
    
    }    

    // los valores del context
    const ctxValue = {
        
        // los items son el primer estado del reducer que viene de los items
        items: shoppingCartState.items,

        // el que este la carta viene de la funcion que si esta
        addItemToCart: handleAddItemToCart,

        // el que este actualizado viene de la funcion que si esta actualizado
        updatedItemQuantity: handleUpdateCartItemQuantity,

    };

    return (

        // mandamos el Context que viene del provider 
        // le damos su value obligatorio que son los valores del context
        // y el children para mostrarlos
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    
    );

};
