import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  // dispatch
  const dispatch = useDispatch()

  // desustruramos el salvar y el active que viene del journal
  const {isSaving, active} = useSelector(state => state.journal)

  // el boton para crear una nueva nota
  const onClickNewNote = () => {
  
    dispatch(startNewNote())
  
  }

  return (
    
    <JournalLayout>

      {
        // si invertiera el valor va a mostrar la vista por defefcto si no enseña la otra vista
        (!!active) ?  <NoteView></NoteView> : <NothingSelectedView></NothingSelectedView>
        
      }
      
    
      {/*<Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, atque. Minus, at.</Typography>*/}

      {/*<NothingSelectedView></NothingSelectedView>*/}

      {/*<NoteView></NoteView>*/}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={
          { color: "white", backgroundColor: "error.main", 
          ":hover": {backgroundColor: "error.main", opacity: 0.9, animation:"ease-in-out"}, position: "fixed", bottom: 50, right: 50,}
        }

      >

        <AddOutlined sx={{fontSize: 30}}></AddOutlined>

      </IconButton>

    </JournalLayout>
  
  )

}

// component="h1" es decirle al html que es es de esa propiedad
// variant="h1" cambia realmente su valor en pantalla al h1