async function Main() {

    const usersURL = "https://jsonplaceholder.typicode.com/users/"

    const postURL = "https://jsonplaceholder.typicode.com/posts" 

    //const resUsers = await axios.get(usersURL)

    //const resPost = await axios.get(postURL)

    // forma de dar dos peticiones al mismo tiempo
    const res = await Promise.all([axios.get(usersURL), axios.get(postURL)])

    console.log(res)

}

Main()