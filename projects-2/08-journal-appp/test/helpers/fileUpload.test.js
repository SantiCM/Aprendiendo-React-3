import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary'

// la configuracion del cloudinary

cloudinary.config({

    cloud_name: "dqprmrwka",

    api_key: "521786475922552",

    api_secret: "x3TrHDRhI0GcMdsq5EbOEzm1TcM",

    secure: true
})

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => { 
        
        // creando el url
        const imageURL = "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwb3JpZW50YXRpb258ZW58MHx8MHx8fDA%3D"

        // la respuesta de las imagenes 
        const resp = await fetch(imageURL)

        //Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript
        // Mandando llamar datos que no forman parte del archivo original
        const blob = await resp.blob()

        // haciendo un nuevo file del blob
        const file = new File([blob], "foto.jpg")

        // mandamos esa foto al arcivo original 
        const url = await fileUpload(file)

        // Esperamos que tipo del url sea igual a un string
        
        expect(typeof url).toBe("string")

        //Limpieza de cloudinary

        // en este caso toca separar por un arreglo con el metodo split por cada "/"
        
        const segements = url.split("/")
        
        // aca mandamos estos segmentos y le decimos que de todos con el length - 1 osea el ultimo en este caso
        // va a remplazar con el metodo replace el ".jpg" por un string vacio
        const imageID = segements[segements.length - 1].replace(".jpg", "")  

        // ahora aqui mandamos el await en tarea asincrona del cloudinary con su api.delete_resources
        // osea que de nuestra api va a eliminar todos los id o las imagenes que se suban en estas pruebas
        
        const cloudResponse = await cloudinary.api.delete_resources(["journal/" + imageID], {
            
            resource_type: "image"
        
        })

        // Ok, NOTA: Las imagenes pueden estar en un folder entonces para que esto resulta es poner un : 
        // (["jorunal/" + imageID])
        // especifical el nombre de tu folder mas (+) el delete 
        // Hay una opcion para ser mas especificos que el tipo que queremos eliminar sea una imagen : resource_type: "image"
    
    
    })


    test('debe de retornal null', async() => { 
    
        // haciendo un nuevo file del blob pero en este caso sin ese blob
        // ya que es un archivo vacio
        const file = new File([], "foto.jpg")

        // mandamos esa foto al arcivo original 
        const url = await fileUpload(file)

        // y aqui recibimos null, (no hay nada)
        expect(url).toBe(null)
    
    })

})