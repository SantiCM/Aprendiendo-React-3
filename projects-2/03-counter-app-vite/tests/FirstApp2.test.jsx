import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"



describe("Pruebas en <FirstApp />", () => {

    const title = "Hola, soy CR7";

    const subTitle = "Soy un subtitulo";

    test('debe de hacer match con el snapshot', () => {

        const {container} = render(<FirstApp title={title}></FirstApp>)
        
        expect(container).toMatchSnapshot()

    })

    test('debe de mostrar el mensaje "Hola, soy CR7', () => {
        
        render(<FirstApp title={title}></FirstApp>)
        expect(screen.getByText(title)).toBeTruthy()

        //screen.debug(), ver el objeto

    })

    test('debe de mostrar el titulo en un h1', () => { 
        
        render(<FirstApp title={title}></FirstApp>)
        expect(screen.getByRole("heading", {level: 1}).innerHTML).toContain(title)
    })
    
    test('debe de mostra el subtitulo enviado por props', () => { 
        render(<FirstApp title={title} subTitle={subTitle}></FirstApp>)
        expect(screen.getAllByText(subTitle).length).toBe(2)
        // con el getallbytext es que es mas de unoo
    })
    
})