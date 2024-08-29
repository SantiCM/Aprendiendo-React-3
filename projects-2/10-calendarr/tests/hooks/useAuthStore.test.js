import { configureStore } from "@reduxjs/toolkit"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { authSlice } from "../../src/store/auth/authSlice"
import { renderHook, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import {notAuthenticedState, initialState} from "../fixtures/auth-states"
import { act } from "react-dom/test-utils"
import { testUserCredencials } from "../fixtures/testUser"
import {calendarApi} from "../../src/api/calendarApi"

// mock del reducer especifico
// en este caso el auth 
const getMockStore = ( initialState ) => {

    return configureStore({
    
        reducer : {
            
            auth: authSlice.reducer
    
        },

        preloadedState: {
            
            auth: {...initialState}
            
        }
    
    })

}

describe('Pruebas en useAuthStore', () => { 

    // limpiar el localStorage
    beforeEach(() => localStorage.clear)

    test('debe regresar los valores por defectos', () => { 
        
        // mock de el mismo mock en propiedades status: "cheking", user: {},  errorMessage : undefined
        const mockStore = getMockStore({ status: "cheking", user: {},  errorMessage : undefined})
        
        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // esperamos qeu su resultado sea igual a esto
        expect(result.current).toEqual({
        
            status: 'cheking',

            user: {},

            errorMessage: undefined,

            checkAuthToken: expect.any(Function),

            startLogin: expect.any(Function),

            startRegister: expect.any(Function),

            startLogout: expect.any(Function)
        
        })

    })

    test('startLogin debe de realizar el login correctamente', async() => { 


        // mock de en este caso la copia del fixtures de no auntenticado
        const mockStore = getMockStore({...notAuthenticedState})


        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act asincrono
        await act(async() => {
            
            // del await del resultado del reducer que utilizamos y le mandamos un fixture configurado
            await result.current.startLogin( testUserCredencials )
        
        })

        // llamamos todo del resutado
        const {errorMessage, status, user} = result.current

        // esperamosq que eso mismo sea exactamente asi
        expect({errorMessage, status, user}).toEqual({
        
            status: 'authenticed',

            // prevencion
            user: { name: expect.any(String) , uid: expect.any(String) },
            
            errorMessage: undefined,
        
        })

        // espero que los token sean exactos
        // any.String (cualquier token)
        expect(localStorage.getItem("token")).toEqual(expect.any(String))

        expect(localStorage.getItem("token-init-date")).toEqual(expect.any(String))

    
    })

    test('startLogin debe fallar la autenticacion', async() => { 
        
        // mock de en este caso la copia del fixtures de no auntenticado
        const mockStore = getMockStore({...notAuthenticedState})


        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act asincrono
        await act(async() => {
            
            // resultado del reducer que recibimos el email y password
            await result.current.startLogin( {email: "alfdf@gmail.com", password: "121212"} )
        
        })

        // mandamos llamar todo del resultado
        const {errorMessage, status, user} = result.current

        // espero que el token no exista
        expect(localStorage.getItem("token")).toBe(null)

        // y esperemos que de este objeto
        expect({errorMessage, status, user}).toEqual({
        
            errorMessage: expect.any(String),
            
            status: 'not-authenticed',
            
            user: {}

        })

        // espera que pase y lo ejecuta

        waitFor(
            
            () => expect(result.current.errorMessage).toBe(undefined)

        )

    })

    test('startRegister debe de crear un usuario', async() => { 

        // creando un usuario fictisio 
        const newUser = {
        
            email: "alfdf@gmail.com", 
            
            password: 121212, 
            
            name: "Test User-2"
        
        }
        
        // mock de en este caso la copia del fixtures de no auntenticado
        const mockStore = getMockStore({...notAuthenticedState})

        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // espia 
        
        const spy = jest.spyOn( calendarApi, "post" ).mockReturnValue({

            data: {
            
                ok: true,
               
                uid: "121212",
               
                name: "Test User",
               
                token: "ESTO-ESTOKEN"
            
            }

        });

        // await del act
        await act(async() => {
            
            // el reducer del nuevoUsuario
            await result.current.startRegister(newUser)
        
        })

        //llamamos todo 
        const {errorMessage, status, user} = result.current

        // esperamos ese objeto
        expect({errorMessage, status, user}).toEqual({
            
            errorMessage: undefined,

            status: "authenticed",

            user: {name: "Test User-2", uid: "1263781293"}
        
        })

        // OBLIGATORIO
        spy.mockRestore();


    
    })

    test('startRegister debe fallar la creacion', async() => { 
    
        // mock de en este caso la copia del fixtures de no auntenticado
        const mockStore = getMockStore({...notAuthenticedState})

        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // await del act
        await act(async() => {
            
            // el resultado del reducer que viene del fixture configurado
            await result.current.startRegister(testUserCredencials)
        
        })

        //llamamos todo 
        const {errorMessage, status, user} = result.current

        // esperamos este objeto
        expect({errorMessage, status, user}).toEqual({
            
            errorMessage: "Un usuario ya existe con este correo",
            
            status: "not-authenticed",
            
            user: {},
        
        })
    
    })

    test('checkAuthToken debe de fallar si no hay token ', async() => { 
        
        // mock de en este caso la copia del fixtures de initialState
        const mockStore = getMockStore({...initialState})

        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act await
        await act(async() => {
            
            // resultado del reducer sin recibir nada
            await result.current.checkAuthToken()
        
        })

        //llamamos todo 
        const {errorMessage, status, user} = result.current

        // esperamos este objeto
        expect({errorMessage, status, user}).toEqual({
            
            errorMessage: undefined,
            
            status: "not-authenticed",
            
            user: {},
            
        
        })

    })

    test('checkAuthToken debe de autenticar al usuario si hay token', async() => { 
        
        // recibimos la data del await que viene del post del /auth que recibe un fixture configurado
        const { data } = await calendarApi.post("/auth", testUserCredencials)

        // de ahi el localStorage recibe un token
        localStorage.setItem("token", data.token)

        // mock de en este caso la copia del fixtures de initialState
        const mockStore = getMockStore({...initialState})

        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useAuthStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act await
        await act(async() => {
            
            // resultado del reducer
            await result.current.checkAuthToken()
        
        })
        
        //llamamos todo 
        const {errorMessage, status, user} = result.current
    
        // esperamos este objeto
        expect({errorMessage, status, user}).toEqual({
            
            errorMessage: undefined,
            
            status: "authenticed",
            
            user: {name: "Test User", uid: "654c0d458f54c087b47a71ab"},
            
        
        })
    
    })

})