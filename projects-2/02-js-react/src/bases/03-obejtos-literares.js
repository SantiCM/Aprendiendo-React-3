const persona = {
    nombre: "Santiago",
    apellido: "Melo",
    edad: 18,
    direccion: {
        ciudad: "Hidalgo",
        zip: 42500,
        lat: 123445565.655,
        lng: 29.2323233,
    }
};

console.log({persona});

// Clon del objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";


console.log(persona2)