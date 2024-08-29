import { authSlice, clearErrorMessage, onCheking, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticedState, initialState } from "../../fixtures/auth-states"
import { testUserCredencials } from "../../fixtures/testUser"

describe('Pruebas en authSlice', () => { 

    test('debe de regresar el estado inicial', () => { 
        
        // esperamos que el auth regrese el estado inicial y sea igual al estadoInical
        expect(authSlice.getInitialState()).toEqual(initialState)
    
    
    })

    // TEST BASICOS DE FORMULARIO
    test('debe de realizar el cheking', () => { 
        
        const state = authSlice.reducer(initialState, onCheking())

        expect(state).toEqual({
        
            status : "cheking",

            user : {},

            errorMessage : undefined

            
        })
    
    
    })

    test('debe de realizar un login', () => { 
    
        const state = authSlice.reducer(initialState, onLogin(testUserCredencials))

        
        expect(state).toEqual({
        
            status: 'authenticed',
            user: testUserCredencials,
            errorMessage: undefined
        
        })

    })

    test('debe de realizar un logout', () => { 
    
        const state = authSlice.reducer(authenticedState, onLogout())

        expect(state).toEqual({

            status : "not-authenticed",

            user : {},

            errorMessage : undefined
        
        
        })

    })

    test('debe de realizar un logout mostrando el mensaje de error', () => { 

        const errorMessage = "Credenciales no validas"
    
        const state = authSlice.reducer(authenticedState, onLogout(errorMessage))

        expect(state).toEqual({

            status : "not-authenticed",

            user : {},

            errorMessage : errorMessage
        
        
        })

    })

    test("debe de limpiar el mensaje de erro", () => { 
    
        const errorMessage = "Credenciales no validas"
    
        const state = authSlice.reducer(authenticedState, onLogout(errorMessage))

        const newState = authSlice.reducer(state, clearErrorMessage)

        expect(newState.errorMessage).toBe(undefined)
    
    })

})