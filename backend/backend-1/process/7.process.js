// arg de entrada
//console.log(process.argv)

// controlar el proceso
// 0 todo bien
// 1 error
//process.exit(1)

// controlar eventos
process.on("exit", () => {
    // limpiar recursos
})

// directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)