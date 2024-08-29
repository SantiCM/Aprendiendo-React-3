
import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({

    // nombre de el slice
    name: 'auth',
    
    // estado inical
    initialState:  {
      
        status: "cheking", // authenticed // not-authenticed

        user: {}, // objeto vacio 

        errorMessage : undefined, // error en undefined
        

    },
    
    reducers: {

        // este sirve para verificar cada uno de los campos del input
        onCheking: (state) => {
            
            // estado del status en "cheking"
            state.status = "cheking",

            // no hay ningun usuario activo
            state.user = {},

            // ningun error porque no hay nada
            state.errorMessage = undefined
        
        },

        // quiere hacer el login de su cuenta recibe el state y la accion especificamente del payload
        onLogin: (state, {payload}) => {
            
            // el estado esque esta "authenticed"
            state.status = "authenticed"

            // existe un usuario
            state.user = payload

            // no hay ningun error de mensaje porque es valida la autenticacion
            state.errorMessage = undefined
        
        },

        // no es valida la autenticacion recibe el state y la accion especificamente del payload
        onLogout: (state, {payload}) => {
            
            // el estado de su status es ""not-authenticed"
            state.status = "not-authenticed"

            // no hay ningun usuario 
            state.user = {}

            // el error viene del payload
            state.errorMessage = payload
        
        },

        //limpia el mensaje de error
        clearErrorMessage: (state) => {
            
            // su estado del error es indefinido 
            state.errorMessage = undefined
        
        }
    
    
    }
    
        
})

// mandamos las acciones
export const { onCheking , onLogin, onLogout, clearErrorMessage  } = authSlice.actions