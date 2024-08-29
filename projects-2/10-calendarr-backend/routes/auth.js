/*Rutas de usuario / Auth

host + /api/auth

*/

const {Router} = require("express")

const {check} = require("express-validator")

const {validarCampos} = require("../middlewares/validar-campos")

const {crearUsuario, loginUsuario, revalidarToken} = require("../controllers/auth")

const {validarJWT} = require("../middlewares/validar-jwt")

const router = Router()

router.post(
    
    "/new", 
    
    [   //middlewares

        // el nombre tiene que ser obligatorio y que no este vacio
        check("name", "El nombre es obligatorio").not().isEmpty(),

        // el email tiene que ser obligatorio y tiene que ser un email
        check("email", "El email es obligatorio").isEmail(), 

        check("password", "El password debe de ser de 6 caracteres").isLength({min: 6}),

        validarCampos
    
    ] , 
    
    crearUsuario
    
)

router.post(
    
    "/", 

    [   //middlewares

        // el email tiene que ser obligatorio y tiene que ser un email
        check("email", "El email es obligatorio").isEmail(), 

        check("password", "El password debe de ser de 6 caracteres").isLength({min: 6}),

        validarCampos
    
    ] ,

    loginUsuario,
)

router.get("/renew", validarJWT, revalidarToken)


module.exports = router