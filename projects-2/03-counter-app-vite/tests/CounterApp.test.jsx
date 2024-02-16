import { fireEvent, render,screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"


describe('Pruebas en <CounterApp></CounterApp>', () => {

    const initialValue = 1

    test('debe de hacer match con el snapshot', () => { 
        
        const {container} = render(<CounterApp value={initialValue}></CounterApp>)

        expect(container).toMatchSnapshot()

    })
    
    
    test('debe de mostrar el valor de 100', () => { 
        render(<CounterApp value={100}></CounterApp>)

        expect(screen.getByText(100)).toBeTruthy()

        // o

        //expect(screen.getByRole("heading", {level: 2}).innerHTML).toContain("100")
    })


    test('debe de incrementar con el boton +1', () => { 
        
        render(<CounterApp value={initialValue}></CounterApp>)

        fireEvent.click( screen.getByText("+1") )
        
        expect(screen.getByText("2")).toBeTruthy()

    })

    test('debe de decrementar con el boton -1', () => { 
        
        render(<CounterApp value={initialValue}></CounterApp>)

        fireEvent.click( screen.getByText("-1") )
        
        expect(screen.getByText("0")).toBeTruthy()

    })

    test('debe de funcionar el boton de reset', () => { 
        
        render(<CounterApp value={initialValue}></CounterApp>)

        fireEvent.click( screen.getByText("+1") )
        //fireEvent.click( screen.getByText("Reset") )

        fireEvent.click(screen.getByRole("button", {name: "btn-reset"}))
        //expect(screen.getByText(initialValue)).toBeTruthy()

    })




})