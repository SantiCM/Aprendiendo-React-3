// En este punto vamos a hacernos mas facil la vida y vamos a hacer todo ordenado
// Vamos a mandar diferentes estados de nuestro auth de el registro
// Vamos a mandar los 3 estados principales
// cheking, not-authenticed, aunthenticed y 
// vamos a mandar todas sus propiedades dependiendo el status

// Esta en el punto inicial de la aplicacion
export const initialState = {

    status: "cheking", // cheking, not-authenticed, aunthenticed
    
    uid: null,
    
    email: null,

    displayName: null,

    photoURL: null,

    errorMessage: null,


}

// Esta fuera de la aplicacion (NO autenticado)
export const aunthenticedState = {

    status: "authenticed", // cheking, not-authenticed, authenticed
    
    uid: "1223asas",
    
    email: "santiagocano15@gmail.com",

    displayName: "Demo User",

    photoURL: "https://demo.jpg",

    errorMessage: null,


}

// Esta fuera de la aplicacion (NO autenticado)
export const notAuthenticedState = {

    status: "not-authenticed", // cheking, not-authenticed, aunthenticed
    
    uid: null,
    
    email: null,

    displayName: null,

    photoURL: null,

    errorMessage: null,


}

// Probando un usuario
export const demoUser = {

    uid: "ABCCD",

    email: "demogoogle@gmail.com",
    
    photoURL: "https://demo.jpg"


}