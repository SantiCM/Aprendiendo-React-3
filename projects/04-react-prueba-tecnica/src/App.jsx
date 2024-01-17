import { useEffect, useState } from "react"
import "./App.css"


const CAT_ENDPOINT_PREFIX = "https://cataas.com"

const CAT_ENDPOINT_DEFAULT= "https://catfact.ninja/fact"

export function App() {

    const [fact, setFact] = useState()

    const [image, setImage] = useState()

    useEffect(() => {
        
        fetch(CAT_ENDPOINT_DEFAULT).then(response => response.json()).then(data => {
                
            const {fact} = data 

            setFact(fact)

        })

    }, [])

    useEffect(() => {

        if(!fact) return 
      
        const threeWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeWord}?size=50&color=red&json=true`)
        
            .then(res => res.json()).then(response => {

                console.log()

                const {url} = response

                setImage(url)

            }
            
        )

    }, [fact])
    
    
    return (

        <main>

            <h1>App de gatitos</h1>

            <section>

                { fact && <p>{fact}</p> }

                { image && <img src={`${CAT_ENDPOINT_PREFIX}${image}`} alt={`Imagen que sale de las primeras tres palabras de la frase ${fact}`}></img>}

            </section>

        </main>
        
    )

} 