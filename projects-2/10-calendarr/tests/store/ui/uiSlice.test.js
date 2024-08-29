import { onCloseDateModalOpen, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas en uiSlice', () => { 

    test('debe de regresar el estado por defecto', () => { 
        
        // con una sola propiedad

        expect(uiSlice.getInitialState()).toEqual( {  isDateModalOpen: false } )

        // con mas propiedades
        //expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy()
    
    })

    test('debe de cambiar el isDateModalOpen correctamente', () => { 
        
        // mandamos un estado inicial
        let state = uiSlice.getInitialState()

        // ese estado lo cambiamos y abrimos el modal
        state = uiSlice.reducer(state, onOpenDateModal())
        
        // esperamos que el modal este abierto
        expect(state.isDateModalOpen).toBeTruthy()

        // ese estado lo cambiamos y cerramos el modal
        state = uiSlice.reducer(state, onCloseDateModalOpen())

        // esperamos que el modal este cerrado
        expect(state.isDateModalOpen).toBeFalsy()
    
    })

})