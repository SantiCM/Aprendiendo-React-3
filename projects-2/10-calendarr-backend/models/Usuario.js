const {Schema, model} = require("mongoose")

const usuarioSchema = Schema({

    name: {
        
        type: String,

        required: true
    
    },

    email: {
    
        type: String,

        required: true,

        // no pueden ver emails duplicados
        unique: true
    
    },

    password: {
    
        type: String,

        required: true,
    
    },

})

module.exports = model("Usuario", usuarioSchema)