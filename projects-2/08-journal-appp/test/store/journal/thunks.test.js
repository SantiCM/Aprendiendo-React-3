import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite"
import { addNewEmptyNotes, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice"
import { startNewNote } from "../../../src/store/journal/thunks"
import { FireBaseDB } from "../../../src/firebase/config"

// NOTAAAAAAA:
// Es importante que cuando hacemos 

describe('Pruebas en thunks de journal', () => { 

    // madamos el dispatch como una funcion de jest

    // Tarea asincrona
    const dispatch = jest.fn()

    // El getState
    const getState = jest.fn()

    // limpiar los mocks 
    beforeEach(() => jest.clearAllMocks())

    test('startNewNote debe de crear una nueva nota', async() => { 

        // mandamos un uid fictisio
        const uid = "TEST-UID"

        // decimos que retorne un mock de valor con el auth del uid
        getState.mockReturnValue( { auth: { uid: uid } } )
        
        // mandamos el await de la variable mas el dispatch
        //              llamado de funcion 
        //                 llamado del retorno de la funcion
        //                 dispatch y el getState
        await startNewNote()(dispatch, getState)

        // espero que el dispatch 
        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // del savingNewNote
        expect(dispatch).toHaveBeenCalledWith(savingNewNote())

        // espero que el dispatch 
        // esperamos que el dispatch para asegurar que una función mock haya sido llamada con argumentos específicos
        // del addNewEmptyNotes que recibe como se ven las notas 
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNotes({
            
            body: "",
            title: "",
            // Como no sabemos exactamente ni el id n la hora lo ponemos asi 
            // Que sea lo que sea el id siempre va a recibir un string
            // y que la fecha un numero
            id: expect.any(String),
            date:expect.any(Number)
        
        }))

        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            
            body: "",
            title: "",
            id: expect.any(String),
            date:expect.any(Number)
        
        }))

        // Borrar de firebase

        // definimos a que coleccion queremos ir
        const collectionRef = collection( FireBaseDB, `${uid}/journal/notes`)

        // recojemos todas los documentos
        const docs = await getDocs(collectionRef)

        // lo ponemos en arreglo vacio
        const deletePromises = []

        // a esos docs eliminos todo con deletePromises.push y el deleteDoc, eliminar documento
        // del doc.ref la refrencia del documento
        docs.forEach(doc => deletePromises.push(deleteDoc(doc.ref)))

        // await de la promesa y eliminarlos
        await Promise.all(deletePromises)

    })

})