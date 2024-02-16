import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import authSlice from "./authSlice"

const store = configureStore({

    reducer:{
    
        counter: counterSlice.reducer,

        auth: authSlice.reducer
        
    }
    
})


export default store