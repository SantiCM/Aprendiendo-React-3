// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import {useRouter} from "next/router"
import Head from "next/head"

// damos un nuevo meet
const NewMeetupPage = () => {

    // damos el router el cual en este caso lo utilizamos, para redirijirnos a la pagina principal
    const router = useRouter()

    // haciendo la peticion
    // damos la data
    const addMeetupHandler = async(enteredMeetupData) => {

        // la respuesta es el await de esta url
        const response = await fetch("/api/new-meetup", {
            
            // metodo post
            method: "POST",

            // le damos el cuerpo que sea el json que se haga string de la data
            body: JSON.stringify(enteredMeetupData),

            headers: {

                // header clasico
                "Content-Type": "application/json"
            
            }
        
        })

        // la data es el await de la respuesta del json
        const data = await response.json()

        // utilizamos el router con el metodo push, el cual sirve para empujar la pagina, que en este caso es la principal
        router.push("/")

    }

    return (

        <>
            { /* Damos el head ya mencionado */ }
            <Head>

                <title>Add a new meetup</title>

                <meta name="description" content="Add your own meetups and create amazing networking opportunities"></meta>

            </Head>

            { /* Damos el componente de el form de los meetups yy le damos la peticion */ }
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        
        </>

    )

}

export default NewMeetupPage