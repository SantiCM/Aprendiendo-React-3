const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors")

const folder = process.argv[2] ?? "."

// si existe o no
//fs.stat("content")

async function ls(folder) {
    let files

    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(pc.red("No se pudo leer", `${folder}`))
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch (error) {
            console.error("NO SE PUEDO LEER")
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? "d" : "f"
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.green(fileType)} ${pc.blue(file.padEnd(20))} ${pc.yellow(fileSize.toString().padStart(10))} ${pc.magenta((fileModified))}`
    })

    const fileInfo = await Promise.all(filePromises)

    fileInfo.forEach(fileInfo => {
        console.log(fileInfo)
    })
}

ls(folder)

// leer el directorio
/*fs.readdir(folder).then(files => {
    files.forEach(file => {
        const filePath = path.join(folder, file)
        fs.stat(filePath)
    })
}).catch(err => {
    if(err) {
        console.error("Fallo todo alv", err)
        return
    }
})*/