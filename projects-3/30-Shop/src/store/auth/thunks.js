import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithInGoogle } from "../../firebase/provider"
import { onCheking, onLogin, onLogout } from "./authSlice"

export const chekignInformation = () => {

    return async(dispatch) => {
        
        dispatch(onCheking())
    
    }

}

export const chekingGoogle = () => {

    return async(dispatch) => {

        dispatch(onCheking())

        const result = await singInWithInGoogle()

        if(!result.ok) {
            
            return dispatch(onLogout(result.errorMessage))
        
        }
        
        dispatch(onLogin(result))

    }

}

export const startCreatingEmailPassword  = ({email, password, displayName }) => {

    return async(dispatch) => {
    
        dispatch(onCheking())

        const {uid, errorMessage, ok} = await registerUserWithEmailPassword({email, password, displayName})

        if(!ok)  return dispatch(onLogout({errorMessage}))
        
        dispatch(onLogin({uid, email, displayName}))
    
    }

}


export const startLoginWithEmailPassword = ({email, password}) => {

    return async (dispatch) => {
        
        dispatch(onCheking())

        const resp = await loginWithEmailPassword({email, password})

        if(!resp.ok) return dispatch(onLogout(resp))

        // dispatch del login con su cuenta
        dispatch(onLogin(resp))
    
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

        // salir de la cuenta
        dispatch(onLogout());

    }
}