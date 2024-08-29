const {response} = require("express")
const Evento = require("../models/Evento")


const getEventos = async(req, res = response) => {

    const eventos = await Evento.find()
                                .populate("user", "name")


    res.json({

        ok: true,
    
        eventos
    
    
    })

}

const crearEvento = async(req, res = response) => {

    const evento = new Evento(req.body)


    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save()
       
        res.json({
        
            ok: true,

            evento: eventoGuardado
    
        })

        
    } catch (error) {

        console.log(error)

        res.status(500).json({
            
            ok: false,

            msg: "Hable con el administrador"
        
        })
        
    }


}

const actualizarEvento = async(req, res = response) => {

    const eventoID = req.params.id

    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoID)

        if(!evento) {
        
            return res.status(404).json ({
            
                ok: false,

                msg: "Evento no existe por ese id"

            
            })
        
        }

        if(evento.user.toString() !== uid) {
        
            return res.status(401).json({
            
                ok: false,
                
                msg: "No puedes entrar"
            })
        
        }

        const nuevoEvento = { ...req.body, user: uid }

        const eventoAzctualizado = await Evento.findByIdAndUpdate(eventoID, nuevoEvento, {new: true})

        res.json({
        
            ok: true,

            evento: eventoAzctualizado
        
        })

        
    } catch (error) {

        console.log(error)

        res.status(500).json({
        
            ok: false,

            msg: "Hable con el administrador"
        
        })


    }


}

const eliminarEvento = async(req, res = response) => {

    const eventoID = req.params.id

    const uid = req.uid

    try {

        const evento = await Evento.findById(eventoID)

        if(!evento) {
        
            res.status(404).json ({
            
                ok: false,

                msg: "Evento no existe por ese id"

            
            })
        
        }

        if(evento.user.toString() !== uid) {
        
            return res.status(401).json({
            
                ok: false,
                
                msg: "No puedes entrar"
            })
        
        }

        await Evento.findByIdAndDelete(eventoID)

        res.json({
        
            ok: true,

        })

        
    } catch (error) {

        console.log(error)

        res.status(500).json({
        
            ok: false,

            msg: "Hable con el administrador"
        
        })


    }



}



module.exports = {

    getEventos,

    crearEvento,

    actualizarEvento,

    eliminarEvento

}