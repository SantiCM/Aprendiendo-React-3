
// Tare asincrona que recibe un file
export const fileUpload = async(file) => {

    //if(!file) throw new Error("No tenemos ningun archivo que subir ")

    // si no existe ese file no retorna nada
    if(!file) return null

    // mandando llamar el api de cloudinary
    // NOTA: En este caso esto "dqprmrwka" esto es el api que varia de cada aplicacion
    // como lo pusimos en el config
    const cloudURL = "https://api.cloudinary.com/v1_1/dqprmrwka//upload"

    // form fata de postman
    const formData = new FormData()

    // los keys que pusimos, llave y valor
    formData.append("upload_preset", "react-journal")

    // el file de arriba de postman
    formData.append("file", file)

    try {
        
        // la respuesta de la api que recibe
        const resp = await fetch(cloudURL, {
            
            // metodo de post 
            method: "POST",
            
            // el body es el data
            body: formData
        
        })

        // si la respuesta no llega se manda este error
        if(!resp.ok) throw new Error("No se pudo subir la imagen")

        // variable para mandar llamar el api
        const cloudResp = await resp.json()

        // retornando la respuesta con el url de la imagen "secure_url"
        return cloudResp.secure_url

    
    } catch(error){
    
        //throw new Error (error.message)

        return null

    }

}