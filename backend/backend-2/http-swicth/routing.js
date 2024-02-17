const http = require("node:http")

const json = require("../pokemon/ditto.json")

const processRequest = (req, res) => {

    const { method, url } = req

    switch(method) {

        case "GET":
            switch(url) {
                case "/pokemon/ditto" :
                res.setHeader("Content-Type", "application/json", "charset=utf-8")
                return res.end(JSON.stringify(json))
                default:
                res.statusCode = 400
                res.setHeader("Content-Type", "text/html", "charset=utf-8")
                return res.end("404")
            }

        case "POST" :
            switch(url) {
                case "/pokemon" :
                let body = ""

                req.on("data", chunk => {
                    body += chunk.toString()
                })

                req.on("end", () => {
                    const data = JSON.parse(body)
                    res.writeHead(201, {"Content-Type": "application/json; charset=utf-8" })
                    res.end(JSON.stringify(data))
                })

                break

                default:
                res.statusCode = 400
                res.setHeader("Content-Type", "text/plain", "charset=utf-8")
                return res.end("404")

            }
    }

}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log(`Te conectaste a: http://localhost:1234`)
})