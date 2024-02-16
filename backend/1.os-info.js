//const os = require("os") // module nativo
const os = require("node:os")  // RECOMENDABLE
console.log("Info de mac", os.platform())
console.log("Version de mac", os.release())
console.log("Arqui de mac", os.arch())
console.log("Cpus", os.cpus())
console.log("Memon libre", os.freemem() / 1024 / 1024)
console.log("Memon total", os.totalmem() / 1024 / 1024)
console.log("tiempo encendido:", os.uptime() / 60 / 60)