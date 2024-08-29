
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    // nombre del slice 
    name: 'journal',
    // estado inicial
    initialState:  {
        
        isSaving: false,

        messageSaved: "",

        notes: [],

        active: null,

        /*active: {
        
            id: "1234",

            title: "",
            
            body: "",
            
            date: 121212,
            
            imagesURL: [], // https://foto1,jgp
        
        }*/

    },

    reducers: {
        // salvar la nota
        // mandamos llamar el estado
        savingNewNote: (state) => {
            
            // cuando el estado con el isSaving en true pasa
            state.isSaving = true
        
        },
        
        // Enviar las notas mandamos el state y la action
        addNewEmptyNotes: (state, action) => {
            
            // el estado.delasnotas.mandarlo de la accion con su payload
            state.notes.push(action.payload)
            
            // cuando el estado con el isSaving en false
            state.isSaving = false
        
        },

        // Nota Activa, manda el estado y la action
        setActiveNote: (state, action) => {
            
            // el estado activo es igual a la action.payload
            state.active = action.payload

            // Y el estado del mensaje es "" (no existe)
            state.messageSaved = ""
        
        },

        // las notas reciben el estado y la accion
        setNotes: (state, action) => {
            
            // el estado de las notas reciben su accion correspondiente
            state.notes = action.payload
        
        },
        // Salvar mandamos el state
        setSaving: (state) => {
            // el estado del isSaving en true
            state.isSaving = true

            // Y el estado del mensaje es "" (no existe)
            state.messageSaved = ""
        
        },


        updateNote: (state, action) => {
            //  El estado del mensaje es "" (no existe)
            state.isSaving = false

            // El estado de las notas es igual a mapear las notas
            state.notes = state.notes.map( note => { // payload: note

                // si la nota con su id es igual a la accion.payload.id
                if(note.id === action.payload.id) {
                    
                    // retorna esa accion
                    return action.payload
                
                }
                // si no retorna la nota
                return note
            
            })

            // Mostrar mensaje de actualizacion
            state.messageSaved = `${action.payload.title}, actualizada correctamente`

        },


        setPhotosToActiveNote : (state, action) => {
           
            // cuando esta en null, hay que checar si esta activo las imagesURL y 
            // si existe el array de la nota activa con las imagesURL, 
            // entonces a eso activo va a ser igual al spread del state
            // y la accion
            // en el caso que no, a eso activo va a ser igual a la accion por defecto
            if (state.active?.imagesURL && Array.isArray(state.active.imagesURL)) {
                state.active.imagesURL = [ ...state.active.imagesURL, ...action.payload]
            } else {
                state.active.imagesURL = action.payload
            }
            
            //  El estado del mensaje es "" (no existe)
            state.isSaving = false
        
        },

        // Cuando estas fuera de la aplicacion, hay que limpiar las notas
        clearNotesLogout: (state) => {

            // Las propiedades todas como el prinicpio
            state.isSaving = false
            
            state.messageSaved = ""

            state.notes = []

            state.active = null
        


        },

        // Eliminar las notas se manda la accion y el estado
        deleteNodeById: (state, action) => {
            
            // estado activo en nulo
            state.active = null

            // las notas, (todas), si el id es difetente a la accion del payload
            state.notes= state.notes.filter(note => note.id !== action.payload)
        
        }, 

    }

})

export const {

    savingNewNote,

    addNewEmptyNotes, 

    setActiveNote, 

    setNotes, 

    setSaving, 

    updateNote, 

    setPhotosToActiveNote,

    clearNotesLogout,

    deleteNodeById,

} = journalSlice.actions