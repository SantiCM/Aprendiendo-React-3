import heroes, {owners } from "../data/heroes"
//import {heroes} from './data/heroes'

console.log(owners)



/*
const getHeoreById = (id) => {""
    return heroes.find((heroe) => {
        if(heroe.id === id) {
            return true
        } else {
            return false
        }
        
    })
}*/ 

//: Find: Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

//: Filter: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

// Para poder encontrar a un superhore de cualquier universo por su "id" es :

export const getHeoreById = (id) => {

    return heroes.find((heore) => heore.id === id)

}

console.log(getHeoreById(2))

// Para poder encontrar a un superhore de cualquier universo por su "name" es :

const getHeoreByName = (name) => {

    return heroes.find((heore) => heore.name === name)

}

console.log(getHeoreByName("Spiderman"))

console.log(getHeoreByName("Flash"))


// Para ver a los superheores por su universo con el array es :

// Aqui se utiliza el metodo fill

export const getHeroesByowner = (owner) => heroes.filter((heore) => heore.owner === owner)

console.log(getHeroesByowner("DC"))

// Para ver absolutamente todos los superheroes que son de ese universo es:

// Con el metodo filter en vez de find

const getHeroesByowner2 = (owner) => heroes.find((heore) => heore.owner === owner)

console.log(getHeroesByowner2("Marvel"))