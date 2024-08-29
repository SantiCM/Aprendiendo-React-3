import { createSlice } from "@reduxjs/toolkit"

export const uiSlice = createSlice({

    // nombre de el slice
    name: 'ui',
    
    // estado inical
    initialState:  {
      
        isDateModalOpen: false,

    },
    
    reducers: {
        // abrir el modal 
        onOpenDateModal: (state) => {
            
            // abierto
            state.isDateModalOpen = true

            /*

                return {
                    
                    ...state,

                    isDateModalOpen: true
                }
            
            */ 
    
        },

        // cerrar el modal 
        onCloseDateModalOpen: (state) => {
            
            // en falso
            state.isDateModalOpen = false
    
        },



  
    }
  
})

// acciones
export const {onOpenDateModal, onCloseDateModalOpen} = uiSlice.actions