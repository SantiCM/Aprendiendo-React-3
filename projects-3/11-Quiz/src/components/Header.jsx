import logo from "../assets/quiz-logo.png"

// Componente del Header
export const Header = () => {
    
    return (
        
        // damos la propiedad del header
        <header>

            { /* Damos la imagen del header */ }

            <img src={logo} alt="Logo Quiz"></img>

            <h1>React Quiz</h1>

        </header>
  
    )

}
