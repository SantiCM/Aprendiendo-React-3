const {response} = require("express")
const { validationResult } = require("express-validator")

const validarCampos = (req, res = response , next) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
    
        return res.status(400).json({
        
            ok: false,

            errors: errors.mapped()
            
        })
    
    }

    // El next() lo que hace es dejar pasar al siguiente middleware, 
    //básicamente es para indicar que ese middleware 
    //ya hizo su trabajo, está todo bien, 
    //y puede seguir con el siguiente
    
    next()

}

module.exports = {

    validarCampos,


}