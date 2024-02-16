import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./uiSlice";
import cartSlice from "./cartSlice";

// damos el store, y lo configuramos
const store = configureStore({

    // damos los reducers
    reducer: {
        
        // del ui
        ui: uiSlice.reducer,

        // del cart
        cart: cartSlice.reducer,
    
    }

})

export default store