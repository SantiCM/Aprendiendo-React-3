import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"
import Head from "next/head"

// Damos el componente de inicio y le damos las props
const HomePage = (props) => {

    // retornamos
    return (
        
        <>

            { /* El Head sirve para darle datos a la parte del codigo fuente con next*/}

            <Head>

                { /* Damos el titulo */}

                <title>React Meetupps</title>

                { /* Damos la propiedad meta con la descripcion y damos el contenido */}
                <meta name="description" content="Browse a huge list of highly active Reacy meetups"></meta>

            </Head>

            { /* Al componente MeetupList le damos los meetups de las props de meetups */}

            <MeetupList meetups={props.meetups}></MeetupList>
        
        </>

    )

}

// accesorios estaticos
// la disfuncion ahora no se ejecutara durante el proceso de compilacion, sino que 
// siempre estara en el servidor despues dde la implementacion
/*export const getServerSideProps = async(context) => {

    const req = context.req

    const res = context.res

    // fecth data

    return {
    
        props: DUMMY_MEETTUPS
    
    }

}*/

// Ejecutara una disfuncion durante el proceso de pre-renderizado
// nombre necesario
export const getStaticProps = async () => {

    // fecth data

    // damos el await de mongoClient que se conecte a la base de datos
    const client = await MongoClient.connect("mongodb+srv://Santiago:hXuQWr7JRZUvqPFt@cluster0.0l22rsb.mongodb.net/")

    // damos el db del cliente 
    const db = client.db()

    // damos la nueva coleccion
    const meetupsCollection = db.collection("cluster")

    // recibimos los meetuos del await de la coleccion con el metodo find
    // accedemos y lo damos como array
    const meetups = await meetupsCollection.find().toArray()

    // cerramos la peticion
    client.close()

    // OBLIGATORIO
    return {
        
        // objeto de accesorios que recibe una funcion de componente
        props: {
            
            // damos los meeetups de los mettups, lo mapeamos
            meetups: meetups.map((meetup) => ({

                // le damos el titulo que viene de la data del titulo y asi sucesivamente
                title: meetup.data.title,

                address: meetup.data.address,

                image: meetup.data.image, 

                // damos el id del mettup y le damos el _id que sea un string
                id: meetup._id.toString()

            })),
        
        },

        // generacion estatica incremental 
        // se genera cada par de segundos 
        revalidate: 1
    
    }

}

export default HomePage