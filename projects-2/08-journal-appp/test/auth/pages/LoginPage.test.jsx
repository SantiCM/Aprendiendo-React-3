import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { Provider, useDispatch } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../../src/store/auth/authSlice"
import { MemoryRouter } from "react-router-dom"
import { notAuthenticedState } from "../../fixtures/authFixtures"


// mock para llegar
const mockChekingGoggle = jest.fn()

// mock del formulario
const mockstartLoginWithEmailPassword = jest.fn()

jest.mock("../../../src/store/auth/thunks", () => ({

    // google
    chekingGoggle: () => mockChekingGoggle,

    // email y password
    startLoginWithEmailPassword: ({email, password}) => {
        
        // retorna el mock que recibe los argumentos
        return () => mockstartLoginWithEmailPassword({email, password})
    
    },

}))

// Cuando utilizamos una propiedad del redux la podemos importar de esta manera
jest.mock("react-redux", () => ({

    ...jest.requireActual("react-redux"),

    // cuando alguien llame el dispatch regresa el valor de la funcion
    // funcion que reibe el llamado de la funcion

    useDispatch: () => (fn) => fn()

}))

// mandamos llamar el store 
const store = configureStore({
    // el reducer
    reducer: {
        // el que ocupamos
        auth: authSlice.reducer
    
    },
    
    // darle un estado dependiendo de lo que necesites
    preloadedState: {
        
        auth: notAuthenticedState
    
    }

})


describe('Pruebas en <LoginPage></LoginPage>', () => { 

    beforeEach(() => jest.clearAllMocks)

    test('debe de mostrar el componente correctamente (renderizado)', () => { 
        
        render(
            // mandamos el provider mandando el store que recibe el store que proporcionamos
            <Provider store={store}>

                {/*MemoryRouter Obligatorio*/}
                <MemoryRouter>

                    <LoginPage></LoginPage>

                </MemoryRouter>

            </Provider>
            
        )

        //screen.debug()

        // esperando que la pantalla tenga el texto con .length que sea mayor o igual a 1
        expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1)

    })

    test('boton de google debe llamar el chekingGoggle', () => { 
    
        render(

            // mandamos el provider mandando el store que recibe el store que proporcionamos
            <Provider store={store}>

                {/*MemoryRouter Obligatorio*/}
                <MemoryRouter>

                    <LoginPage></LoginPage>

                </MemoryRouter>

            </Provider>
            
        )
        
       // variable de google, que agarre el boton
       const googleBTN = screen.getByLabelText("google-btn")
        
       // mandamos el evento del click
       fireEvent.click(googleBTN)
        
       // esperando que el mock sea 
       // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
       expect(mockChekingGoggle).toHaveBeenCalled()
    
    })

    test('submit debe de llamar el startLoginWithEmailPassword', () => { 

        // con argumentos

        // mandamos los argumentos que necesitamos
        const email = "santiagocano15@gmail.com"

        const password =  "1212121"
    
        render(

            // mandamos el provider mandando el store que recibe el store que proporcionamos
            <Provider store={store}>

                {/*MemoryRouter Obligatorio*/}
                <MemoryRouter>

                    <LoginPage></LoginPage>

                </MemoryRouter>

            </Provider>
            
        )
        
        // Esto es por la dependecia que utilizamos

        // Basicamente lo que estamos haciendo en la mayoria es hacer el aria-label para hacer que detecte la propiedad 
        const emailField = screen.getByRole("textbox", {name: "Correo"})

        fireEvent.change(emailField, {target: {name: "email", value: email}})

        /*inputProps={{
                        
            "data-testid" : "password"
                        
        }}*/ 

        const passwordField = screen.getByTestId("password")
        
        fireEvent.change(passwordField, {target: {name: "password", value: password}})

        const loginForm = screen.getByLabelText("submitForm")

        fireEvent.submit(loginForm)

        // esperamos que el mock reciba estos argumentos
        expect(mockstartLoginWithEmailPassword).toHaveBeenCalledWith({
            
            email,

            password
        
        })

    })

})