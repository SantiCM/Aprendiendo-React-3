import { createContext, useState } from "react"

// damos la variable de crear el context
const userProgressContext = createContext({

    // el progreso como cadena vacia
    progress: "" , // "cart" o "checkout"
    
    // abrir caja 
    showCart: () => {}, 

    // cerrar caja 
    hideCart: () => {}, 

    // abrir Checkout
    showCheckout: () => {}, 

    // cerrar Checkout
    hideCheckout: () => {}, 

})

// damos el context que reicibe el children
export const UserProggresContextProvider = ( { children } ) => {

    // damos el estado que recibe cadena vacia 
    const [userProgress, setUserProgress] = useState("")

    // damos la variable de abrir cart
    const showCart = () => {
        
        // damos el segundo estado como cart
        setUserProgress("cart")
    
    }

    // damos la variable de cerrar cart
    const hideCart = () => {
        
        // damos el segundo estado como cadena vacia
        setUserProgress("")
    
    }

    // damos la variable de abrir Checkout
    const showCheckout = () => {
        
        // damos el segundo estado como checkout
        setUserProgress("checkout")
    
    }

    // damos la variable de cerrar Checkout
    const hideCheckout = () => {
        
        // damos el segundo estado como cadena vacia
        setUserProgress("")
    
    }

    // damos el context, todas las variables
    // y el progress sera el primer estado
    const userProgressCtx = {
    
        progress: userProgress,

        showCart,
        
        hideCart,
        
        showCheckout,
        
        hideCheckout,

    }
  
    return (

        // damos el context del provider con su valor y el children     
        
        <userProgressContext.Provider 
        
            value={userProgressCtx}
            
        >
            { children }
            
        </userProgressContext.Provider>

    )

}

export default userProgressContext