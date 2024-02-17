const fs = require("node:fs/promises") // en vez de callback, mejor promesas

// modulos nativos que no tienen promesas nativas
//const { promisify } = require("node:util")
// crear version de promise
//const readFilePromise = promisify(fs.readFile)

// CODE ASINCRONO

console.log("leyendo el 1 txt")

//utf-8, temas de codificacion, sincrono, readFile, asincrono
fs.readFile("./archivo.txt", "utf-8").then(text => {
    console.log("primer texto:", text)
})

console.log("Tareas mas que se ejecutan mientas devuelve la promesa")

console.log("leyendo el 2 txt")
//utf-8, temas de codificacion, sincrono
fs.readFile("./archivo2.txt", "utf-8").then(text => {
    console.log("Segundo texto:", text)
})