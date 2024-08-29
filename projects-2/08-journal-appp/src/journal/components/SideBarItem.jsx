import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"

// recibimos el title, el body, su id, la fecha y las imagenes como arreglo vacio
export const SideBarItem = ( { title = "", body, id, date, imageUrls = []} ) => {
    
    // dispatch
    const dispatch = useDispatch()

    // el dispatch de que va a mostrar todooooo
    const onClickNote = () => {
    
        dispatch(setActiveNote( { title, body, id, date, imageUrls } ) ) 
    
    }

    // esto es para ajustar el sidebar en posicion
    const newTitle = useMemo(() => {
    
        return title.length > 17 ? title.substring(0,17) + "..."
        : title
    
    },[title])

    return (

        <ListItem disablePadding>

            <ListItemButton onClick={onClickNote}>

                <ListItemIcon>

                    <TurnedInNot></TurnedInNot>

                </ListItemIcon>

                <Grid container>

                    <ListItemText primary={newTitle}></ListItemText>

                    <ListItemText secondary={body}></ListItemText>

                </Grid>

            </ListItemButton>

        </ListItem>

    )

}