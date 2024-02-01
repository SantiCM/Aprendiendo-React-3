async function Main() {

    const axiosInstance = axios.create({
        
        baseURL: "https://jsonplaceholder.typicode.com",

        timeout: 1000
    
    })

    try {

        const res = await axiosInstance.get("/users")

        console.log(res)
        
    } catch (error) {

        if(error.response.status === 404) {
            
            console.log("lO sienyo, fallo")
        
        }
        
    }
    
}

Main()