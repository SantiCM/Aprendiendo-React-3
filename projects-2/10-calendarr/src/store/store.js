import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
import { calendarSlice } from "./calendar/calendarSlice";
import { authSlice } from "./auth/authSlice";

// obligatorio

export const store = configureStore({

    reducer: {

        auth: authSlice.reducer,

        calendar: calendarSlice.reducer,
        
        ui: uiSlice.reducer,
    
    },
    
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    
        // configuaracion para que las fechas no las serialize
        serializableCheck: false
    
    })



})