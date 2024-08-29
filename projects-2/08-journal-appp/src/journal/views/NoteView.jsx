import { DeleteOutline, SaveAltOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components/ImageGalery"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeleteingNote, startSaveNote, startUpLoandignFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"

export const NoteView = () => {

    // mandamos el dispatch
    const dispatch = useDispatch()

    // en esta varible mandamos llamar todo lo que ocupamos de el journal
    // NOTA: El active lo mandamos llamar como nota
    const {active:note, messageSaved, isSaving} = useSelector(state => state.journal)

    // del hook del formulario mandamos llamar todas estas propiedes recibiendo esa nota activa
    const {body, title, date, onInputChanhge, formState} = useForm( note )

    // hora, (creacion de hora en react)
    // mandando llamar el memorizarla
    const dateString = useMemo(() => {
        // crear una nueva
        const newDate = new Date( date );
        // retornar la opcion necesaria
        return newDate.toTimeString();
        // dependecia la misma date
    }, [date])

    // darle otra referencia al input
    const fileInputRef = useRef()

    useEffect(() => {
        
        // dispatch de la activa nota mandando el estado inicial
        dispatch( setActiveNote(formState))

        // dependecia el estado inicial
    }, [formState])

    // efecto de
    useEffect(() => {
        // si el mensaje.length es mayor a 0 vas a:
        if(messageSaved.length > 0) {
            
            // con la depedencia swettalet, mandamos:
            //        Nombre que queremos utilizar
            //                            el mensaje propio
            Swal.fire("Nota Actualizada", messageSaved, "success")
        
        }
        // como dependecia el mismo mensaje
    }, [messageSaved])
    

    const onsaveNote = () => {
        // dispatch de crear una nueva nota
        dispatch(startSaveNote())
        
    }

    // Esto es recibir la target
    const onFileInputChange = ({target}) => {
        
       // si el target.files es igual a 0 RETORNA
       if(target.files === 0) return

       // dispatch de Las imagenes,  las llamamos como files un arreglo vacio
       // y mandamos llamar al target.files
       dispatch(startUpLoandignFiles(target.files))
    
    }

    // Eliminar notas
    const onDelete = () => {
        
        // dispatch de eliminar notas
        dispatch(startDeleteingNote())
    
    }
    

    return (
    
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}}>

            <Grid item>

                {/*Mandamos llamar la date*/}
                
                <Typography fontSize={30} fontWeight="light">{dateString}</Typography>

            </Grid>

            <Grid item>

                {/*dejar que seleccione muchos input multiple
                    el ref con el useref 
                    
                    */
                }
                <input ref={fileInputRef} type="file" multiple onChange={onFileInputChange} style={{display: "none"}}>
                               
                </input>

                {/*El boton que se hace pasar por el input y para eso es fileInputRef.current.click()*/}
                <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()}>

                    <UploadOutlined ></UploadOutlined>


                </IconButton>

                <Button disabled={isSaving} onClick={onsaveNote} color="primary" sx={{padding: 2}}>

                    <SaveAltOutlined sx={{fontSize: 30, mr: 1, }}></SaveAltOutlined>
                                        
                </Button>

            </Grid>

            <Grid container>

                <TextField 
                    
                    type="text" 
                    variant="filled" 
                    placeholder="Ingrese un titulo" 
                    label="Titulo"
                    sx={{border: "none", width: 500, mb: 3}}
                    name="title"
                    value={title}
                    onChange={onInputChanhge}
                >

                
                </TextField>

                <TextField 
                    
                    type="text" 
                    variant="filled" 
                    multiline 
                    fullWidth
                    placeholder="¿Que sucedio hoy?" 
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChanhge}
                >
                
                </TextField>

            </Grid>

            <Grid container justifyContent="end">

                <Button onClick={onDelete} sx={{mt: 2}} color="error">

                    <DeleteOutline></DeleteOutline>
                    Borrar

                </Button>


            </Grid>

            <ImageGalery images={note.imagesURL}></ImageGalery>

        </Grid>
    
    )

}