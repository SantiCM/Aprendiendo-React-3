import { render, screen } from "@testing-library/react"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { AppRouter } from "../../src/router/AppRouter"
import { MemoryRouter } from "react-router-dom"
import { CalendarPage } from "../../src/calendar/pages/CalendarPage"

// mock de el authStore
jest.mock("../../src/hooks/useAuthStore")

// Mock del calendarPage
jest.mock("../../src/calendar/pages/CalendarPage", () => ({

    CalendarPage: () => <h1>Calendar Page</h1>

}))

describe('Pruebas en <AppRouter></AppRouter>', () => { 

    // mock del token
    const mockCheckAuthToken = jest.fn()

    // OBLIGATORIO al usar mocks
    beforeEach(() => jest.clearAllMocks())

    beforeEach(() => jest.clearAllTimers())

    test('debe de mostrar la pantalla de carga y llamar checkAuthToken', () => { 
        
        // ese auth va a retornar este objeto
        useAuthStore.mockReturnValue({
        
            status: "cheking",

            checkAuthToken: mockCheckAuthToken
        
        })

        // renderizamos el componente
        render(<AppRouter></AppRouter>)

        // esperamos que el texto que salga sea ese
        expect(screen.getByText("Cargandooo.....")).toBeTruthy()

        // esperamos que el mock sea llamado
        expect(mockCheckAuthToken).toHaveBeenCalled()
    
    })

    test('debe de mostrar el login en caso de no estar autenticado', () => { 

        // ese auth va a retornar este objeto
        useAuthStore.mockReturnValue({
        
            status: "not-authenticed",

            checkAuthToken: mockCheckAuthToken
        
        })

        // hacemos el snapshot
        const {container} = render(

            <MemoryRouter>
            
                <AppRouter></AppRouter>
            
            </MemoryRouter>
            
        )
        
        // esperamos que diga "Ingreso" y sea verdadero
        expect(screen.getByText("Ingreso")).toBeTruthy()

        // hacemos el match del snapshot
        expect(container).toMatchSnapshot()
    
    })

    test('debe de mostrar el calendario si esta autenticado', () => { 
        
        // ese auth va a retornar este objeto
        useAuthStore.mockReturnValue({
        
            status: "authenticed",

            checkAuthToken: mockCheckAuthToken
        
        })

        // renderizamos el componente
        // Con el MemoryRouter OBLIGATORIO
        render(

            <MemoryRouter>
            
                <AppRouter></AppRouter>
            
            </MemoryRouter>
            
        )

        // esperamos que aparezca este texto
        expect(screen.getByText("Calendar Page")).toBeTruthy()


    })


})