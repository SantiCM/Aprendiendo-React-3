import { getByAltText, getByText, render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

//

describe("Pruebas en <MiPrimerComponente />", () => {

    /*test('debe de hacer match con el snapshot', () => { 
        const title = "Hola, soy CR7"
        const {container} = render( <FirstApp title={title}></FirstApp> );
    
        expect(container).toMatchSnapshot()
    
    })*/

    test("Debe de mostrar el titulo en un <h1></h1>", () => {
        const title = "Hola, soy CR7"
        const {container, getByText, getByTestId} = render( <FirstApp title={title}></FirstApp> );
    
        expect(getByText(title)).toBeTruthy()  
        
        /*const h1 = container.querySelector("h1")
        expect(h1.innerHTML).toContain(title)*/

        expect(getByTestId("test-title").innerHTML).toContain(title)

    })

    test("debe de enviar el subtitulo enviado por props", () => {
        
        const title = "Hola, soy CR7"
        
        const subTitle = "Soy un subtitulo"

        const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle}></FirstApp>)

        expect(getAllByText(subTitle).length).toBe(2)

    })
})