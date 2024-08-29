import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({

  // nombre de el slice
  name: 'auth',
  
  // estado inical
  initialState:  {
    
    status: "cheking", // cheking, not-authenticed, aunthenticed
    
    uid: null,
    
    email: null,

    displayName: null,

    photoURL: null,

    errorMessage: null,

  },
  
  reducers: {
  
    login: (state, {payload}) => {
      
      state.status =  "authenticed", // cheking, not-authenticed, authenticed
    
      state.uid = payload.uid,
    
      state.email = payload.email,

      state.displayName = payload.displayName,

      state.photoURL = payload.photoURL,

      state.errorMessage = null
      
    },

    logout: (state , {payload}) => {
      
      state.status =  "not-authenticed", // cheking, not-authenticed, aunthenticed
    
      state.uid = null,
    
      state.email = null,

      state.displayName = null,

      state.photoURL = null,

      state.errorMessage = payload?.errorMessage
        
    },

    checkingCredencial: (state) => {
      
      state.status = "cheking"
    
    },

  }

})

export const { login, logout, checkingCredencial } = authSlice.actions