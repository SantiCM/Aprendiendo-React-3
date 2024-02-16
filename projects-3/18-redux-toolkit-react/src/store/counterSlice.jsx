import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",

    initialState: {counter: 0, showCounter: true},

    reducers:{
    
        increment(state) {
        
            state.counter++
        
        },

        decrement(state) {
            
            state.counter--
        
        },

        increase(state, action) {
        
            state.counter = state.counter + action.payload
        
        },

        reset(state) {
        
            state.counter = !state.showCounter
        
        },
        
    }

})

export const counterActions = counterSlice.actions

export default counterSlice