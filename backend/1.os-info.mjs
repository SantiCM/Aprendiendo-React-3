//const os = require("os") // module nativo
import { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os" // RECOMENDABLE

console.log("Info de mac", platform())
console.log("Version de mac", release())
console.log("Arqui de mac", arch())
console.log("Cpus", cpus())
console.log("Memon libre", freemem() / 1024 / 1024)
console.log("Memon total", totalmem() / 1024 / 1024)
console.log("tiempo encendido:", uptime() / 60 / 60)