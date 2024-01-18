import "./App.css"
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from "./components/Otro"

export function App() {

    // recojemos el fact y el actualizar de el hook useCatFact
    const {fact, refreshFact} = useCatFact()

    // recojemos la image de el hook useCatImage y le damos la fact, ya que lo recibe el hook 
    const {image} = useCatImage( { fact } )

    // al hacer clikc, damos un async
    const handleClick = async () => {
        
        // lo refrescamos
       refreshFact()
    
    }
    
    return (

        <main>

            <h1>App de gatitos</h1>

            {/*Damos el onClick de la varibale de arriba */}
            <button onClick={handleClick}>Cargar una nueva imagen y frase</button>

            <section>

                {/*Si el fact pasa lo mostramos */}
                { fact && <p>{fact}</p> }

                {/*Si la imagen pasa, mostramos en la pantalla */}
                { image && <img 
                    
                    src={image}  alt={`Imagen que sale de las primeras tres palabras de la frase ${fact}`}></img>
                    
                }

                <Otro></Otro>

            </section>

        </main>
        
    )

} 