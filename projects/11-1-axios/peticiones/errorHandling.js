// errores

async function Main() {

    try {

        const res = await axios.get("https://jsonplaceholder.typicode.com/userss")

        console.log(res)
        
    } catch (error) {

        if(error.response.status === 404) {
            
            console.log("lO sienyo, fallo")
        
        }
        
    }
    
}

Main()

/*

axios.get("https://jsonplaceholder.typicode.com/userss")
    .then((res) => console.log(res))
    .catch((err) => {
        
        if(err.response.status === 404) {
            
            console.log("lO sienyo, fallo")
        
        }
        
    })

*/