import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: "auth",

    initialState: {
        
        status: "cheking",

        uid: null,

        email: null,

        displayName: null,

        errorMessage: undefined,
    
    },
    
    reducers: {
    
        onCheking: (state) => {
            
            state.status = "cheking"
        },

        onLogin: (state, {payload}) => {
            
            state.status = "authenticed",

            state.uid = null

            state.email = payload.email

            state.displayName = payload.displayName,

            state.errorMessage = null
        
        },

        onLogout: (state, {payload}) => {
            
            state.status = "not-authenticed",

            state.uid = null

            state.email = null

            state.displayName = null,

            state.errorMessage = payload?.errorMessage
        
        }
    
    }

})


export const {onCheking, onLogin, onLogout} = authSlice.actions