/*  Forma de importar codigo a otro codigo

const chanchos = require("./import_export")

console.log(chanchos); */


// Import, forma de reutiliza los archivos 

import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2 } from "./import_export.mjs"


// DI:

// Si no tienes un packjase.son, es necesario tener los archivos con el nombre ".mjs"

// SOLO SI NO TIENES ESE ARCHIVO


console.log(chanchos);

console.log(chanchosTristes);

console.log(otrosChanchos);


// Mandar llamar a la funcion  la variable 
fn1()
fn2()