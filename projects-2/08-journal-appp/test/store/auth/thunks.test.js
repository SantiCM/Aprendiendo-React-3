import { loginWithEmailPassword, logoutFirebase, singInGoogle } from "../../../src/firebase/provider"
import { checkingCredencial, login, logout } from "../../../src/store/auth/authSlice"
import { chekinform, chekingGoggle, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journalSlice"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock("../../../src/firebase/provider")

describe('Pruebas en los thunks del auth', () => { 

    // madamos el dispatch como una funcion de jest

    // Tarea asincrona
    const dispatch = jest.fn()

    // limpiar los mocks 
    beforeEach(() => jest.clearAllMocks())

    test('debe de invocar el chekingCrendecial', async() => { 
        
        // mandamos el await de la variable mas el dispatch
        //              llamado de funcion
        //                 llamado del retorno de la funcion
        await chekinform()(dispatch)    

        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // sea igual a las crendeciales
        expect(dispatch).toHaveBeenCalledWith(checkingCredencial())
        
    })

    test('chekingGoggle debe de llamar chekingCredential y login --Exito', async() => { 
        
        // mandamos llamar el si pasa y el user completo
        const loginData = {ok: true, ...demoUser}

        // await de sinInGoogle que va a dar el resultado de la data
        await singInGoogle.mockResolvedValue(loginData)
        
        // await de checar google
        //              llamado de funcion
        //                 llamado del retorno de la funcion
        await chekingGoggle()(dispatch)

        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba las credenciales para que pase
        expect(dispatch).toHaveBeenCalledWith(checkingCredencial())


        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba la data completa
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    
    })

    test('chekingGoggle debe de llamar chekingCredential y logout --Error', async() => { 
        
        // mandamos llamar el ok en falso porque no pasa
        // y el errorMessage
        const loginData = {ok: false, errorMessage: "Un error en google"}

        // await de sinInGoogle que va a dar el resultado de la data
        await singInGoogle.mockResolvedValue(loginData)
        
        // await de checar google
        //              llamado de funcion
        //                 llamado del retorno de la funcion
        await chekingGoggle()(dispatch)

        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba las credenciales para que pase
        expect(dispatch).toHaveBeenCalledWith(checkingCredencial())


        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba el logout que no paso mas el error (texto)
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))
    
    })

    test('startLoginWithEmailPassword debe de llamar chekingCrendetial', async() => { 
        
        // mandamos llamar el si pasa y el user completo
        const loginData = {ok: true, ...demoUser}

        // la data es el email y el password que recibe 
        const formData =  {email: demoUser.email, password: "1234456"}

        // await del loginWithEmailPassword de firebase que resuelve la data
        await loginWithEmailPassword.mockResolvedValue(loginData)
        
        // await de la funcion 
        //              llamado de funcion que es la form data
        //                 llamado del retorno de la funcion
        await startLoginWithEmailPassword(formData)(dispatch)

        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba las credenciales para que pase
        expect(dispatch).toHaveBeenCalledWith(checkingCredencial())

        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // reciba el login  con su data
        expect(dispatch).toHaveBeenCalledWith(login(loginData))

    })

    test('startLogout debe de llamar logoutFirebase, clearNotesLogout y logout', async() => { 
        
        // llamando la funcion
        await startLogout()(dispatch)

        // esperando que el logout de fireBase 
        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        expect(logoutFirebase).toHaveBeenCalled()

        // esperando que el dispatch
        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // de el clearNotesLogout
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
        
        // esperando que el dispatch
        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // de el logout
        expect(dispatch).toHaveBeenCalledWith(logout())

    })

})