// /api/new-meetup

import { MongoClient } from "mongodb"

// POST /api/new-meetup

const handler = async(req, res) => {

    // saber el tipo de solictud se envio
    if(req.method === "POST") {
        
        // acceder al cuerpo de la solicitud
        const data = req.body

        // damos el await de mongoClient que se conecte a la base de datos
        const client = await MongoClient.connect("mongodb+srv://Santiago:hXuQWr7JRZUvqPFt@cluster0.0l22rsb.mongodb.net/")

        // damos el db del cliente 
        const db = client.db()

        // damos la nueva coleccion
        const meetupsCollection = db.collection("cluster")

        // damos el resultado del await de la accion y lo insertamos por primera vez de la data
        const result = await meetupsCollection.insertOne({data})

        // lo cerramos
        client.close()

        // damos que la res del status 201, osea que si paso y damos un mensaje
        res.status(201).json({message: "Meetup inserted"})

    }

}

export default handler