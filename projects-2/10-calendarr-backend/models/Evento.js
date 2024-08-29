const { model, Schema} = require("mongoose")

const EventoSchmea = Schema({

    title: {
    
        type: String,

        required: true
    
    },

    notes: {
    
        type: String,
    
    },

    start: {
    
        type: Date,

        required: true
    
    },

    end: {
    
        type: Date,

        required: true
    
    },

    user: {
        
        // le decimos a schema que el tipo sera el objecto el id
        type:  Schema.Types.ObjectId ,


        // Y como referencia mostrara al usuario
        ref: "Usuario",

        required: true
        
    }

})

// personalizar las propiedades sin tocar la base de datos
EventoSchmea.method("toJSON", function() {

    const { __v, _id, ...object  } = this.toObject()

    object.id = _id

    return object

})


module.exports = model("Evento", EventoSchmea)