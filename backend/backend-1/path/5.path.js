const path = require("node:path")

// barra separadora de carpetas si es Windows o Mac
console.log(path.sep)
// unir rutas

const filePaht = path.join("content", "subfolder", "test.txt")

console.log(filePaht)

const base = path.basename("/tmp/santi-secret-files/password.txt")

console.log(base)

const fileName = path.basename("/tmp/santi-secret-files/password.txt", ".txt")

console.log(fileName)

const extension = path.extname("image.jpg")
console.log(extension)