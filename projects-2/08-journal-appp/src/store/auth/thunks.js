import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInGoogle } from "../../firebase/provider"
import { clearNotesLogout } from "../journal/journalSlice"
import { checkingCredencial, login, logout } from "./authSlice"

// cheking de la informacion 
export const chekinform = () => {

    // return asincrono del dispatch
    return async(dispatch) => {
        
        // dispatch de cheking
        dispatch(checkingCredencial())
    
    }

}

// cheking de goggle
export const chekingGoggle = () => {

    // return asincrono del dispatch
    return async(dispatch) => {
        
        // dispatch de cheking
        dispatch((checkingCredencial()))
        
        // await del provider de google
        const result = await singInGoogle()

        // si el resultado no existe
        if(!result.ok) {
            
            // retornas el logut y pones error de crendeciales
            return dispatch(logout(result.errorMessage ))
        
        }

        // si no del login das su resultado de cuenta de google
        dispatch(login(result))
    
    }

}

// creacion de los campos

// recibimos el email, password y el displayName
export const startCreatingEmailPassword = ({email, password, displayName}) => {

    // return asincrono del dispatch
    return async(dispatch) => {
       
        // dispatch de cheking
        dispatch(checkingCredencial())

        // desustructaramos ok, uid, photoURL, errorMessage, de el await de registerUserWithEmailPassword que recibe email, password, displayName
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword( {email, password, displayName} )
        
        // si el ok no existe, retorna el dispatch de el logout con su error de crendeciales
        if(!ok) return dispatch(logout({errorMessage}))

        // dispatch del login con su uid, displayName, email, photoURL
        dispatch(login({uid, displayName, email, photoURL}))

    }

}

// Hacer que su cuenta pase

// recibimos el email, password
export const startLoginWithEmailPassword = ({email, password}) => {

    // return asincrono del dispatch
    return async (dispatch) => {
        
        // dispatch de cheking    
        dispatch(checkingCredencial())

        // await del loginWithEmailPassword firebase y recibimos el email, password
        const resp = await loginWithEmailPassword({email, password})
        
        // si el ok no existe, retorna el dispatch de el logout con su respuesta
        if(!resp.ok) return dispatch(logout(resp))

        // dispatch del login con su cuenta
        dispatch(login(resp))
    
    }

}

// salir de la cuenta
export const startLogout = () => {
    
    // return asincrono del dispatch
    return async( dispatch ) => {
        
        // await del 
        /*

            Tarea asincrona del firebase
            export const logoutFirebase = async() => {

                retorna el await del firebase el cual hace el singOut osea se manda toda la informacion
                return await FireBaseAuht.signOut()

            }
        
        */ 
        await logoutFirebase();

        // eliminar notas del redux si el usuario no esta autenticado
        dispatch(clearNotesLogout())
        
        // salir de la cuenta
        dispatch( logout() );

    }
}
