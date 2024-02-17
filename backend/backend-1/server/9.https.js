const http = require("node:http")
const { findAvailablePort } = require("./10.free.port")

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log("Joal")
    res.end("Hola per adios")
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`abre tu navegador con http://localhost:${server.address().port}`)
    })
})