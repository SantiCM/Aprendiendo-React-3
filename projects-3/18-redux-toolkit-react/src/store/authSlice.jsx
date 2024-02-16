import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({

    name: "authentication",
 
    initialState: {isAuthentication: false},

    reducers: {
    
        login(state) {
        
            state.isAuthentication = true
    
        },


        logout(state) {
        
            state.isAuthentication = false
        
        }
    
    }

})

export const authActions = authSlice.actions

export default authSlice