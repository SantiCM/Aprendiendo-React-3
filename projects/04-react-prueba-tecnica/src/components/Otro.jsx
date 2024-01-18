import { useCatImage } from "../hooks/useCatImage"

// como se utilizaria en otro componente 
export function Otro() {

    // recpojemos la image, del hook y damos el fact 
    const { image } = useCatImage( { fact: "cat" } )

    return (

        <>

            {image && <img src={image}></img>}
        
        </>

    )

}