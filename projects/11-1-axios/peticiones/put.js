// put, actualiza todo el dato del servidor
// patch, actualiza lo que nosotros le damos pero da el objeto completo

function Put() {

    axios.patch("https://jsonplaceholder.typicode.com/users/1", {

        name: "Hola", username: "Santi_melo"

    }).then((res) => console.log(res))
    .catch((err) => console.log(err))

}

Put()