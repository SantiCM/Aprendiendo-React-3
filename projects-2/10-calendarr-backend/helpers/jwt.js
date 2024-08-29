
const jwt = require("jsonwebtoken")

const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {
        
        const payoad = {uid, name}

        jwt.sign(payoad, process.env.SECRET_JWT_SEED, {
            
            expiresIn: "2h",

        }, (err, token) => {
        
            if(err) {
                
                reject(err)

                console.log("No se pudo generar el token")
            
            }

            resolve(token)
            
        })

    
    })


}

module.exports = {

    generarJWT


}
