async function Main() {

    const res = await axios.post("https://jsonplaceholder.typicode.com/users", {

        name: "hola", userName: "bro"},

        {headers: { "fatz": "xsxsx" }

    })

    console.log(res)

}

Main()