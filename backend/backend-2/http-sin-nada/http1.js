const http = require("node:http")
const fs = require("node:fs")
//const { findAvailablePort } = require("../backend-1/server/10.free.port")

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    console.log("request recived:", req.url)
    res.setHeader("Content-Type", "text/html", "charset=utf-8")// cabeceras de las petiiciones
    if(req.url === "/") {
        res.end("Bienvenidos a la mejor pagina del mundo")
    } else if(req.url === "/image") {
        fs.readFile("./public/santi.png", (err, data) => {
            if(err) {
                res.statusCode = 500
                res.end = ("Lo sentimos, hubo un error interno")
            } else {
                res.setHeader("Content-Type", "image/png")
                res.end(data)
            }
        })
    } else if(req.url === "/contacto") {
        res.end("Contacto")
    } else {
        res.statusCode = 404 // no paso, rojo
        res.end("Lo siento, fallo todo")
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Abre tu navegador local http://localhost:${desiredPort}`)
})