const express = require("express")
const ditto = require("../pokemon/ditto.json")

const app = express()

app.disable("x-powered-by")

app.use(express.json())

const PORT = process.env.PORT ?? 1234

/*app.use((req, res, next) => {

    console.log("mI RPIMER MIDDLEWARE")
    if(req.method !== "POST") return next()
    if(req.headers["content-type"] !== "application/json") return next()

    let body = ""

    req.on("data", chunk => {
        body += chunk.toString()
    })
    req.on("end", () => {
        const data = JSON.parse(body)
        data.timestamp =  Date.now()
        req.body = data
        next()
    })
})*/

app.get("/", (req, res) => {
    res.json(ditto)
})

app.post("/pokemon", (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send("Como tu ex te dijo, esto no pudo funcionar porque si")
})

app.listen(PORT, () => {
    console.log(`Te conectaste a: http://localhost:${PORT}`)
})