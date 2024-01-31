import { APIURL } from "./json/json"

// fetching de datos con asercion de tipos
// SALDRA UN PROBLEMA AL PONER EL AWAIT Y LA SOLUCION
// Es cambiar la extension de el archivo en vez de "ts" a "mts"

const API_URL = "https://api.github.com/search/repositories?q=javascript"

const response = await fetch(API_URL)

if( !response.ok ) { throw new Error("Requeste Failed") }

type APIResponse = { items: object[] }

const data = await response.json() as APIURL

data.items.map(repo => {

    return { name: repo.name, id: repo.id }

})