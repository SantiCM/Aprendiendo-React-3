/*

    Events Routes
    /api/events
*/ 

const {Router} = require("express")

const {validarJWT} = require("../middlewares/validar-jwt")

const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require("../controllers/events")

const {validarCampos} = require("../middlewares/validar-campos")

const { check } = require("express-validator")

const { isDate } = require("../helpers/isDate")

const router = Router()

// Todas tienen que pasar por la validacion del JWT
// cualquier peticion debe de tener su token
router.use(validarJWT)

// Obtener eventos

router.get("/", getEventos)

// Crear un nuevo evento

router.post(

    "/", 
    
    [
        
        check("title", "El titulo es obligratorio").not().isEmpty(),

        check("start", "Fecha de Inicio es obligatoria").custom( isDate ),

        check("end", "Fecha de Finalizacion es obligatoria").custom( isDate ),

        validarCampos

    ],
    
    crearEvento
)

// Actualizar un nuevo evento

router.put("/:id", actualizarEvento)

// Borrar un nuevo evento

router.delete("/:id", eliminarEvento)

module.exports = router