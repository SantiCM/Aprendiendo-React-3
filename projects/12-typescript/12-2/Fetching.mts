import { APIURL } from "./json/json"

// fetching de datos con asercion de tipos
// SALDRA UN PROBLEMA AL PONER EL AWAIT Y LA SOLUCION
// Es cambiar la extension de el archivo en vez de "ts" a "mts"

// recojemos la Api
const API_URL = "https://api.github.com/search/repositories?q=javascript"

// la res
const response = await fetch(API_URL)

// si la res, no pasa, error
if( !response.ok ) { throw new Error("Requeste Failed") }

// damos un type de la res donde los items es un objeto con un array
// OJOOOOOOOO
// esto es en base a la api
type APIResponse = { items: object[] }

// recojemos la data del await de la res que lo volvemos json que es "AS" 
// DEL ARCHIVO JSON, EL CUAL SE PUEDE GENERAR EN EXTENSIONES O EN INTERNET DEL JSON
const data = await response.json() as APIURL

// Hariamos el mapeo de ello
data.items.map(repo => {

    return { name: repo.name, id: repo.id }

})