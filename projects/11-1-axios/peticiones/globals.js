// config para todo el proyecto

async function Main() {

    // GLOBAL
    axios.defaults.headers.common["Santi"] = "CR7"

    const res = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(res)

}

Main()