import { authSlice, checkingCredencial, login, logout } from "../../../src/store/auth/authSlice"
import { aunthenticedState, demoUser, initialState } from "../../fixtures/authFixtures"


describe('Pruebas en authSlice', () => { 

    test('debe de regresar el estado inicial y llamar al slice', () => { 

        // Esto es para ver si el estado inicial el nombre del slice es el correcto
    
        expect(authSlice.name).toBe('auth')

        // una variable que dice
        // que el slice.reducer va a recibir el estado inicial
        /*
        status: "cheking", // cheking, not-authenticed, aunthenticed
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,

        (sin ninguna accion)
    
        */
    
        const state = authSlice.reducer(initialState, {})

        // esperamos que ese estado va a toEqual =  
        // Comprueba recursivamente cada campo de un objeto o array.
        // Del estado inicial
        expect(state).toEqual(initialState)
    
    })

    test('debe de realizar la autenticacion', () => { 


        // una variable que dice
        // que el slice.reducer va a recibir el estado inicial
        // con una accion que va a ser el login del demouser ya creado
        /*
            login: 
            login: (state, {payload}) => {
      
            state.status =  "authenticed", // cheking, not-authenticed, authenticed
    
            state.uid = payload.uid,
    
            state.email = payload.email,

            state.displayName = payload.displayName,

            state.photoURL = payload.photoURL,

            state.errorMessage = null

            demouser: 

            export const aunthenticedState = {

            status: "authenticed", // cheking, not-authenticed, authenticed
    
            uid: "1223asas",
    
            email: "santiagocano15@gmail.com",

            displayName: "Demo User",

            photoURL: "https://demo.jpg",

            errorMessage: null,
        }*/
          
        const state = authSlice.reducer(initialState, login(demoUser))

        // esperamos que ese estado va a toEqual =  
        // Comprueba recursivamente cada campo de un objeto o array.
        // Del estado inicial

        expect(state).toEqual({
            
            status: "authenticed", // cheking, not-authenticed, aunthenticed
    
            uid: demoUser.uid,
    
            email: demoUser.email,

            displayName: demoUser.displayName,

            photoURL: demoUser.photoURL,

            errorMessage: null,
        
        })

    
    })

    test('debe de realizar el logout sin argumentos', () => { 

        // una variable del estado del slice del autenticado osea el logout
        /*

            export const aunthenticedState = {
            status: "authenticed", // cheking, not-authenticed, authenticed
            uid: "1223asas",
            email: "santiagocano15@gmail.com",
            displayName: "Demo User",
            photoURL: "https://demo.jpg",
            errorMessage: null,

        */
        
        const state = authSlice.reducer(aunthenticedState, logout())

        // esperando que sea igual a eso

        expect(state).toEqual({
            
            status: 'not-authenticed',
            
            uid: null,
            
            email: null,
            
            displayName: null,
            
            photoURL: null,
            
            errorMessage: undefined
        
        })
    
    
    })

    test('debe de realizar el logout con argumentos', () => { 

        // error del mensaje

        const errorMessage = "Credenciales no correctas"

        // una variable del estado del slice del autenticado osea el logout pero en este caso recibe una accion que es el errorMessage
        /*

            checkingCredencial: (state) => {
      
                state.status = "cheking"
    
            },

        */
        
        const state = authSlice.reducer(aunthenticedState, logout({errorMessage}))

        expect(state).toEqual({
            
            status: 'not-authenticed',
            
            uid: null,
            
            email: null,
            
            displayName: null,
            
            photoURL: null,
            
            errorMessage: errorMessage
            
        
        })
    
    
    })


    test('debe de cambia el estado a cheking', () => { 

        // una variable del estado del slice del autenticado pero con las crendeciales
    
        const state = authSlice.reducer(aunthenticedState, checkingCredencial())

        // esperando que el estado su estados sea pasado

        expect(state.status).toBe("cheking")
    
    
    })


})