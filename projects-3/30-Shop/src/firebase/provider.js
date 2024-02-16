import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const singInWithInGoogle = async() => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider)

        //const credential = GoogleAuthProvider.credentialFromResult(result)

        const {displayName, email, uid} = result.user

        return {
            
            ok: true,

            displayName, email, uid
        
        }
        
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
  
        return {
            
            ok: false,

            errorMessage, 

        
        }
        
    }

}


// Registro para que sea guardado en la autenticacion

// se recibe el email, el nombre y la contraseña en tarea asincrona
export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {
        
        // recibe el await de createUserWithEmailAndPassword que recibe 
        // (El FireBaseAuht del config y el email y el password)
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)

        // desctructuramos el id y su photo que viene de el resp de el user
        const {uid, photoURL} = resp.user

        // user en firebaseauth

        await updateProfile(FirebaseAuth.currentUser, {displayName})

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
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)

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
    return await FirebaseAuth.signOut()

}