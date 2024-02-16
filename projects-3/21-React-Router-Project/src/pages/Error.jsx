import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"
import MainNavigation from "../components/MainNavigation"

// Componente de error
export const Error = () => {

    // damos el eror del userouteerror
    const error = useRouteError()

    // damos dos variables las cuales da el titulo y el mensaje
    let title = "An error occurred!"

    let message = "Something went error"

    // si el error del status es 500
    if(error.status === 500) {

        // damos el mensaje de error de la data del mensaje
        message = error.data.message
    
    }

    // si el error del status es 404
    if(error.status === 404) {

        // damos los mensajes de error
        title: "Not found",

        message = "Could to find resource or page"

    }
  
    return (

        <>

            { /*Damos la navegacion */}

            <MainNavigation></MainNavigation>

            {/*Damos el contenido de la pagina con su titulo */}
            <PageContent title={title}>

                <p>{message}</p>

            </PageContent>

        </>
    
    )

}