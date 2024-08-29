import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModalOpen, onOpenDateModal } from "../store/ui/uiSlice"

// hook del ui
export const useUiStore = () => {

    //mandamos el dispatch
    const dispatch = useDispatch()
    
    // recibios el abrir el modal del store del ui
    const { isDateModalOpen } = useSelector(state => state.ui)

    // se abre el modal
    const openDateModal = () => {
    
        dispatch(onOpenDateModal())
    
    }

    // se cierra el modal
    const closeDateMoral = () => {
    
        dispatch(onCloseDateModalOpen())

    
    }

    
    const toogleDateModal = () => {
        
        (isDateModalOpen) ? closeDateMoral() : openDateModal()
    
    
    }

    return {
    
        // properties

        isDateModalOpen,

        // metodos
        openDateModal, 
        closeDateMoral,
        toogleDateModal
    
    }


}
