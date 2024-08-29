import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuht } from "./config";

// un nuevo GoogleAuthProvider (firebase)
const googleProvider = new GoogleAuthProvider()

// Obligatorio: TAREA ASINCRONA
export const singInGoogle = async() => {

    try {
        // el await de signInWithPopup que recibe el FireBaseAuht del config y el googleProvider
        // Esto es porque lo queremos con google si fuera con otra cambiara la propiedad
        const result = await signInWithPopup(FireBaseAuht, googleProvider)

        //const crendential = GoogleAuthProvider.credentialFromResult(result)

        // aqui desctructuramos estas propiedades del el usuario del result
        const {displayName, email, photoURL, uid} = result.user

        return {
            // esto retorna que si pasa ok: true
            ok: true,
            // User info
            displayName, email, photoURL, uid

        }
        
    }

    catch (error) {

        // Esto es de google
    
        const errorCode = error.errorCode

        const errorMessage = error.errorMessage
        
        //const email = error.customData.email

        //const credential = GoogleAuthProvider.credentialFromError(error)

        return {
            
            // esto retorna que si pasa ok: false osea no pasa
            
            ok: false,
            
            // al igual su respectivo error
            errorMessage
        
        }

    }

}

// Registro para que sea guardado en la autenticacion

// se recibe el email, el nombre y la contraseña en tarea asincrona
export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {
        
        // recibe el await de createUserWithEmailAndPassword que recibe 
        // (El FireBaseAuht del config y el email y el password)
        const resp = await createUserWithEmailAndPassword(FireBaseAuht, email, password)

        // desctructuramos el id y su photo que viene de el resp de el user
        const {uid, photoURL} = resp.user

        // user en firebaseauth

        await updateProfile(FireBaseAuht.currentUser, {displayName})

        return {
            //retorna que si pasa mas su id, su foto, su email, su displayName
            ok: true,

            uid, photoURL, email, displayName
        }
    
    } catch (error) {
        
        //retorna que no pasa mas su id, su respectivo error que viene del error.message
        return {ok: false, errorMessage: error.message}
    
    }

}

// recibe el email y el password en una tarea asincrona 
export const loginWithEmailPassword = async( { email, password } ) => {

    try {
        // recibe el await de signInWithEmailAndPassword del fireBase con su email y password osea hace el singIn
        const resp = await signInWithEmailAndPassword(FireBaseAuht, email, password)

        // desusctrura el uid, la foto y el  nombre de usuario de esa respuesta que viene del usario
        const {uid, photoURL, displayName} = resp.user

        return {
            //retorna que si pasa mas su id, su foto, su displayName
            ok: true, 
            
            uid, photoURL, displayName
        
        }
    
    } catch (error) {
        
        // retorna que no pasa y su respectivo error
        return {ok: false, errorMessage: error.message}
    
    }

}

// Tarea asincrona del firebase
export const logoutFirebase = async() => {

    //retorna el await del firebase el cual hace el singOut osea se manda toda la informacion
    return await FireBaseAuht.signOut()

}