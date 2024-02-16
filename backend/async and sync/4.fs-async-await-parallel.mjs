// modulos nativos que no tienen promesas nativas
//const { promisify } = require("node:util")
// crear version de promise
//const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises"; // en vez de callback, mejor promesas

// CODE ASINCRONO

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo2.txt", "utf-8")
]).then(([text, secondText]) => {
    console.log("leyendo el 1 txt")
    console.log("Primer texto:", text)
    console.log("leyendo el 2 txt")
    console.log("Primer texto:", secondText)
})