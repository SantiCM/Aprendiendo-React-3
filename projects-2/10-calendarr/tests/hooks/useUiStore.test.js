import { renderHook } from "@testing-library/react"
import { useUiStore } from "../../src/hooks/useUiStore"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { uiSlice } from "../../src/store/ui/uiSlice"
import { act } from "react-dom/test-utils"

// mock del reducer especifico
// en este caso el ui
const getMockStore = ( initialState ) => {

    return configureStore({
    
        reducer : {
            
            ui: uiSlice.reducer
        
        
        },

        preloadedState: {
            
            ui: {...initialState}
        
        }
    
    })

}

describe('Pruebas en useUiStore', () => { 

    test('debe de regresar los valores por defecto', () => { 

        // mock de en este caso la copia del isDateModalOpen de false
        const mockStore = getMockStore({ isDateModalOpen: false })
        
        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useUiStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // espero que el resultado sea igual a un objeto
        expect(result.current).toEqual({
            
            isDateModalOpen: false,

            openDateModal :  expect.any(Function), 

            closeDateMoral :  expect.any(Function),

            toogleDateModal :  expect.any(Function)
        
        })
    
    })

    test('openDateModal debe de colocar true en  isDateModalOpen', () => { 
        
        // mock de en este caso la copia del isDateModalOpen de false
        const mockStore = getMockStore({ isDateModalOpen: false })
        
        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useUiStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // desusctruramos el openDateModal
        const { openDateModal } = result.current

        // act de eso mismo
        act( () => openDateModal())

        // y esperamos que si lo pueda abrir
        expect(result.current.isDateModalOpen).toBeTruthy()
    
    })

    test('closeDateMoral debe de colocar false en isDateModalOpen', () => { 

        // mock de en este caso la copia del isDateModalOpen de true
        const mockStore = getMockStore({ isDateModalOpen: true })
        
        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useUiStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act del cerrar
        act( () => result.current.closeDateMoral())

        // y esperamos que si lo pueda cerrar
        expect(result.current.isDateModalOpen).toBeFalsy()
    
    })

    test('toogleDateModal debe de cambiar el estado en', () => { 
        
        // mock de en este caso la copia del isDateModalOpen de true
        const mockStore = getMockStore({ isDateModalOpen: true })
        
        // Esto se hace siempre
        // Solo cambia                    El store que estamos manejando
        const {result} = renderHook(() => useUiStore(), {
            
            wrapper: ({children}) => <Provider store={mockStore}>{children}</Provider>     
        
        })

        // act de el rsult de el reducer
        act( () => result.current.toogleDateModal())

        // espero que cuando abra sea falso
        expect(result.current.isDateModalOpen).toBeFalsy()

        act( () => result.current.toogleDateModal())
        // sea verdadero
        expect(result.current.isDateModalOpen).toBeTruthy()
    
    })


})