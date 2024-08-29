import { fireEvent, render, screen } from "@testing-library/react"
import { FabDelete } from "../../../src/calendar/components/FabDelete"
import { useCalendarStore, startDeletingEvent } from "../../../src/hooks/useCalendarStore"

// mock del calendar
jest.mock("../../../src/hooks/useCalendarStore")


describe('Pruebas en <FabDelete></FabDelete>', () => { 

    // mock de eliminarlo
    const mockStartDeletingEvent = jest.fn()

    // Obligatorio a la hoa de usar mocks
    beforeEach(() => jest.clearAllMocks())

    beforeEach(() => jest.clearAllTimers())

    test('debe de mostrar el componente correctamente', () => { 

        // mandamos el calendarStore y el mock se hace para poder agarrar sus propiedades especificas
        useCalendarStore.mockReturnValue({
        
            hasEventSelected: false
        
        })
        
        // renderizamos el componente
        render(<FabDelete></FabDelete>)     

        // mandamos el boton
        const btn = screen.getByLabelText("btn-delete")

        // clasico uso de los botones
        expect(btn.classList).toContain("btn")

        expect(btn.classList).toContain("btn-danger")

        expect(btn.classList).toContain("fab-delete")

        expect(btn.style.display).toBe("none")


    })

    test('debe de mostrar el boton si hay un evento activo', () => { 

        // lo mismo pero en true 
        useCalendarStore.mockReturnValue({
        
            hasEventSelected: true
        
        })
        
        // renderizamos el componente 
        render(<FabDelete></FabDelete>)  
        
        const btn = screen.getByLabelText("btn-delete")

        // no hay nada porque no esta seleccionado
        expect(btn.style.display).toBe("")

        
    })

    test('debe de llamar el startDeletingEvent si hay evento activo', () => { 

        // lo mismo pero en true y con el mock de eliminacion
        useCalendarStore.mockReturnValue({
        
            hasEventSelected: true,

            startDeletingEvent: mockStartDeletingEvent

        })
        
        // render del componente 
        render(<FabDelete></FabDelete>)     
        
        const btn = screen.getByLabelText("btn-delete")

        // simulacion del clik
        fireEvent.click(btn)

        // espermaos que el mock haya sido llamado
        expect(mockStartDeletingEvent).toHaveBeenCalled()


    })

})