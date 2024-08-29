import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FireBaseDB } from "../../firebase/config"
import { addNewEmptyNotes, deleteNodeById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"
import { fileUpload, loadNotes } from "../../helpers"

export const startNewNote = () => {

    // tarea asincrona del dispatch y el getState
    return async(dispatch, getState) => {
    
        //uid

        // mandamos llamar el slice
        dispatch(savingNewNote())

        // desustructaramos el uid del auth
        const { uid } = getState().auth

        // Creamos una nueva nota
        const newNote = {
            
            // Titulo
            title: "",

            // Cuerpo
            body: "",

            // Hora
            date: new Date().getTime(),
        
        }

        // Doc del fireBase, mandamos el FireBaseDB y ${uid}/journal/notes` osea donde entra esta nota
        const newDoc = doc( collection( FireBaseDB, `${uid}/journal/notes`  ) ) 

        // await del setDoc de firebase tanto de newDo como de newNote
        await setDoc (newDoc, newNote)

        newNote.id = newDoc.id

        // dispatch
        //dispatch (newNote)
        // dispatch (activar)

        // dispatch de 
        /*

            Enviar las notas mandamos el state y la action
            addNewEmptyNotes: (state, action) => {
            
                el estado.delasnotas.mandarlo de la accion con su payload
                state.notes.push(action.payload)
            
                cuando el estado con el isSaving en false
                state.isSaving = false
        
            },
        
        
        */
        dispatch(addNewEmptyNotes(newNote))

        // dipatch de la nota activa
        /*
        
            Nota Activa, manda el estado y la action
            setActiveNote: (state, action) => {
            
                el estado activo es igual a la action.payload
                state.active = action.payload

                Y el estado del mensaje es "" (no existe)
                state.messageSaved = ""
        
            },
        
        */ 
        dispatch(setActiveNote(newNote))

    }

}

// Cargando las notas
export const startLoandingNotes = () => {

    // siempre el return asincrono y recibimos dispatch y getState
    return async( dispatch, getState ) => {
        
        // desustructaramos el uid del auth
        const { uid } = getState().auth

        // si no existe el uid mandamos el error
        if(!uid) throw new Error ("El UID no existe")

        // las notas, await de el loadNotes osea
        //Toda nuestro js de loadNotes
        const notes = await loadNotes(uid)

        // dispatch de setNotes que recibe las notes de loadNotes
        /*

            las notas reciben el estado y la accion
            setNotes: (state, action) => {
            
                el estado de las notas reciben su accion correspondiente
                state.notes = action.payload
        
            },
        
        */ 
        dispatch(setNotes(notes))

    }

}

// crear una nueva nota
export const startSaveNote = () => {

    // siempre el return asincrono y recibimos dispatch y getState
    return async( dispatch, getState ) => {

        // Reecibimos el dispatch del setSavng
        /*
        
            Salvar mandamos el state
            setSaving: (state) => {
                el estado del isSaving en true
                state.isSaving = true

                Y el estado del mensaje es "" (no existe)
                state.messageSaved = ""
        
            },
        
        */ 

        dispatch(setSaving())
        
        // desustructaramos el uid del auth
        const { uid } = getState().auth
        
        // desustructaramos el active:note del journal
        const { active:note } = getState().journal
        
        // hacemos copia de las notas
        const noteToFireStore = {...note}

        // eliminar una propiedad 
        delete noteToFireStore.id
        
        // doc de Firebase con ${ uid }/journal/notes/${ note.id } osea 
        //                      el uid 
        //                            campo
        //                                   otro cam
        //                                           la nota.id
        const docRef = doc(FireBaseDB, `${ uid }/journal/notes/${ note.id }`)
        
        // el await de esto
        await setDoc(docRef, noteToFireStore, {merge: true})
        
        // dispatch de updateNote (recibir todas las notas)
        dispatch(updateNote(note))

    }

}

// Las imagenes

// las llamamos como files un arreglo vacio
export const startUpLoandignFiles = (files = []) => {

    // siempre el return asincrono y recibimos dispatch 
    return async (dispatch) => {
        
        // Reecibimos el dispatch del setSavng
        /*
        
            Salvar mandamos el state
            setSaving: (state) => {
                el estado del isSaving en true
                state.isSaving = true

                Y el estado del mensaje es "" (no existe)
                state.messageSaved = ""
        
            },
        
        */ 

        dispatch(setSaving())

        //await fileUpload(files[0])
        
        // arreglo vacio
        const filedUploadPromises = []
        
        // creamos una constante de file of files
        for(const file of files) {
            
            // al arreglo vacio le pasamos todo lo de postman y el file
            filedUploadPromises.push(fileUpload(file))
        
        }
        
        // await de promesa todooooo de al arreglo vacio le pasamos todo lo de postman y el file
        const photosUrls =  await Promise.all(filedUploadPromises)
       
        // await dispatch de las imagenes en la nota y mandamos las fotos
        await dispatch(setPhotosToActiveNote(photosUrls))

    }

}

// eliminar 
export const startDeleteingNote = () => {

    // siempre el return asincrono y recibimos dispatch y getState
    return async (dispatch, getState) => {
        
        // desustructaramos el uid del auth
        const { uid } = getState().auth
        
        // desustructaramos el active:note del journal
        const { active:note } = getState().journal

        // doc de Firebase con ${ uid }/journal/notes/${ note.id } osea 
        //                      el uid 
        //                            campo
        //                                   otro cam
        //                                           la nota.id
        const docRef = doc(FireBaseDB, `${ uid }/journal/notes/${ note.id }`)

        // await del deleteDoc
        // deleteDoc es de firebase
        await deleteDoc(docRef)
        
        // dispatch de el delete con su nota.id
        dispatch(deleteNodeById(note.id))

    }

}