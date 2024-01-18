import { useEffect, useState } from "react"

const CAT_ENDPOINT_PREFIX = "https://cataas.com"

// hook de imagen, le damos como props las fact
export function useCatImage( { fact } ) {

    // recojemos el state de la imagen
    const [image, setImage] = useState()

    useEffect(() => {

        // si la imagen no existe, retornamos, para que no pase
        if(!fact) return 
        
        // en la prueba se pide que Recuperar la primera palabra del hecho
        // en este caso lo vamos a hacer con 3 palabras
        // damos el fact y decimos que split
        // divide un objeto de tipo String en un array
        // se le da el [separador] que en este caso nosotros decimos que es un espacio ----> " "
        // y al final se le da el [limite], numero que especifica el limite, nosotros ponemos 3
        // y le damos el metodo join, el cual une los elementos de lo que sea
        // y en este caso decimos que por cada espacio ----> " ", une los demas 
        // EJEMPLO: Sin Join ----> {"hola"} {"como"} {"estas"}
        // EJEMPLO: Con Join ----> hola como estas
        const threeWord = fact.split(' ', 3).join(' ')

        // tambien funcionaria asi
        // es lo mismo que antes solo que en vez de dar el entero de donde acaba en el split
        // damos el slice el cual devuelve una copia de una parte del array dentro de un nuevo array 
        // y damos el [inicio] que es 0 (primera palabra) y [, fin] 3, (3 palabras)
        // const threeWord = fact.split(' ').slice(0, 3).join(' ')

        // damos el fetch de la api y le concatenamos lo de arriba
        fetch(`https://cataas.com/cat/says/${threeWord}?fontSize=50&fontColor=red&json=true`)

            // damos el then de las res, damos esa res que la volvemos json, damos el then y damos la response
            .then(res => res.json()).then(response => {

                // recojemos la imagen de la res
                const {mimetype} = response

                // damos el segundo estado de la img y damos la imagen de la api
                setImage(mimetype)

            }
            
        )

        // en este caso damos como dependecia el fact, porque por cada nueva fact, queremos una nueva imagen
        // por ende queremos que este efecto se renderize por cada fact
    }, [fact])

    // retornamos la imagen con la concatenacion de la url y la imagen 
    return { image: `${CAT_ENDPOINT_PREFIX}${image}` }

}