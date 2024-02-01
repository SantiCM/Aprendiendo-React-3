async function Main() {

    axios.interceptors.request.use(function (config) {
        
        config.headers["Authorization"] = `Bearer`

        return config
    
    })

    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")

    console.log(res)

}

Main()