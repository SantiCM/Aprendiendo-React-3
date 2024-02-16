// FS
// File System
const fs = require("node:fs") // IMPORTANTE "node:"

// forma asincrona
const stats = fs.statSync("./archivo.txt")

console.log(
    stats.isFile(), // si es fichero
    stats.isDirectory(), // si es directorio
    stats.isSymbolicLink(), // enlace simbolico
    stats.size // tamaño
)