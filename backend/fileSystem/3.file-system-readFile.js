const fs = require("node:fs")

console.log("leyendo el 1 txt")

//utf-8, temas de codificacion, sincrono, readFile, asincrono
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
    console.log(text)
})

console.log("Tareas mas")

console.log("leyendo el 2 txt")
//utf-8, temas de codificacion, sincrono
fs.readFile("./archivo2.txt", "utf-8" , (err, text) => {
    console.log(text)
})