import { createSlice } from "@reduxjs/toolkit"

// Creando slice del ui
export const uiSlice = createSlice({

    // damos su nombre
    name: "ui",

    // el estado inicial es que la carta sea visible empieza en falso
    initialState: {
    
        cartIsVisible: false
    
    },

    // los reducers
    reducers: {
        
        // la funcion, recibe el estado
        toggle(state) {
            
            // el estado de la carta visible es igual a que la carta visible no existe
            state.cartIsVisible = !state.cartIsVisible
        
        }

    }

})

// mandamos las acciones
export const uiActions = uiSlice.actions