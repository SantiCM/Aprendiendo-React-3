import { MongoClient, ObjectId } from "mongodb"
import MeetupDetail from "../../components/meetups/MeetupDetail"
import Head from "next/head"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

// Detalles de los meetups, le damos las props
const MeetupDetails = (props) => {

    return (
        
        <>

            { /* Damos el head ya mencionado */ }

            <Head>

                <title>Raect Meetupps</title>

                <meta name="description" content={props.meetupData.description}></meta>

            </Head>

            { /* Damos el form y le damos el ver detalles */ }
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>

            { /* Damos el componente de los detalles y le damos las props necesarias, en este caso
                le añadiimos el meetupData
            
            */ }
            <MeetupDetail 

                image={props.meetupData.image}

                title={props.meetupData.title}

                address={props.meetupData.address}

                description={props.meetupData.description}

            >

            </MeetupDetail>

        
        </>
        
    )

}

// Ejecutara una disfuncion durante el proceso de pre-renderizado
// nombre necesario
export const getStaticPaths = async () => {

    // fecth

    // damos el await de mongoClient que se conecte a la base de datos
    const client = await MongoClient.connect("mongodb+srv://Santiago:hXuQWr7JRZUvqPFt@cluster0.0l22rsb.mongodb.net/")

    // damos el db del cliente 
    const db = client.db()

    // damos la nueva coleccion
    const meetupsCollection = db.collection("cluster")

    // damos los meetups de la coleccion y entramos al arreglo, damos un objeto vacio y le damos el _id de 1
    // esto para que se genere y le damos el toArray
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    // cerramos la peticion
    client.close()


    // describir toda la dinamica, valores de segmento, prev
    return {

        // independientemente de lo que contenga, todos los valores de parametros admitidos 
        // al poner false se deja que se ponga otro id y con el true genera un renderizado por pagina
        // Si el respaldo es 'bloqueo', las nuevas rutas no devueltas por getStaticPaths esperarán 
        // a que se genere el HTML, idéntico a SSR (de ahí el bloqueo), 
        // y luego se almacenarán en caché para futuras solicitudes, de modo que solo suceda una vez por ruta.
        fallback: "blocking",
        
        // un objeto por version de pagina dinamica donde este objeto tiene su clave principal
        paths: meetups.map((meetup) => ({params:{ meetupId: meetup._id.toString()}}))

    }

}

export const getStaticProps = async (context) => {

    const meetupId = context.params.meetupId

    // fecth data

    // damos el await de mongoClient que se conecte a la base de datos
    const client = await MongoClient.connect("mongodb+srv://Santiago:hXuQWr7JRZUvqPFt@cluster0.0l22rsb.mongodb.net/")

    // damos el db del cliente 
    const db = client.db()

    // damos la nueva coleccion
    const meetupsCollection = db.collection("cluster")

    // damos el seleccionar el meetup
    // que le damos el find pero del primero y le damos el id que sea un nuevo object id del meetupId del archivo 
    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId), })

    // cerramos la peticion
    client.close()

    return {

        // damos las props
        props: {

            // damos la data
            meetupData: {

                // damos el id de la sellecion del _id que se haga string
                id: selectedMeetup._id.toString(),

                // damos las propiedades con la data (importante)
                image: selectedMeetup.data.image,

                title: selectedMeetup.data.title,

                address: selectedMeetup.data.address,

                description: selectedMeetup.data.description
            
            }
        
        }
    
    }

}

export default MeetupDetails


/*

[

    {
        params: {
            
            meetupId: "m1"
            
        },
    },

    {   
        params: {
            
            meetupId: "m2"

        }, 
            
    },

]

*/