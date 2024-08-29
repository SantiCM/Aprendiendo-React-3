import { collection, getDocs } from "firebase/firestore/lite"
import { FireBaseDB } from "../firebase/config"

// Tarea asincrona que recibe el uid en ""
export const loadNotes = async(uid = "") => {
    
    // si no existe el uid va a sacar un error que no existe
    if(!uid) throw new Error ("El UID no existe")

    // llamar a las notas, con collection del FireBaseDB con su uid/nombre del campo/nombre del primer campo del primer campo
    const collectionRef = collection(FireBaseDB, `${uid}/journal/notes`)

    // aqui recibimos el await de los docs de la coleccion
    const docs = await getDocs(collectionRef)

    // notas como arreglo
    const notes = []

    // los dosc sacan otro
    docs.forEach(doc => {

        // las notas se mandan con su id y con la copia de la data
        notes.push( { id: doc.id, ...doc.data()} )
    
    })

    // retorna las notas nadamas
    return notes

}