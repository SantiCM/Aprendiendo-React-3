// recibimos respuesta y la podemos alterar 

async function Main() {

    const res = await axios.get("https://jsonplaceholder.typicode.com/users", {

        transformResponse: axios.defaults.transformResponse.concat(data =>  {

            console.log(data)     

            data = data.map(user =>  {
            
                return {  ...user, customTitle: `${user.name}, ${user.username}, ${user.email}` }
            
            })

            return data
        
        })

    })

    console.log(res)

}

Main()