const fs = require("node:fs")

console.log("leyendo el 1 txt")

//utf-8, temas de codificacion, sincrono, readFile, asincrono
const text1 = fs.readFile("./archivo.txt", "utf-8")
console.log(text1)

console.log("Tareas mas")

console.log("leyendo el 2 txt")

const text2 = fs.readFile("./archivo.txt", "utf-8")
console.log(text2)