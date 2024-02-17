const fs = require("node:fs")

// si existe o no
fs.stat("content")

// leer el directorio
fs.readdir(".", (err, files) => {
    if(err) {
        console.error(err)
        return
    }
    files.forEach(file => {
        console.log(file)
    })
})