async function Main() {

    const newController = new AbortController()

    try {

        newController.abort()

        const res = await axios.post("https://reqres.in/api/login", {

            email: "eve.holt@reqres.in", password: "cityslicka"
    
        }, 
        
        { signal: newController.signal 
        
        })

        console.log(res)
        
    } catch (error) {

        if(error?.response?.status === 404) {
            
            console.log("lO sienyo, fallo")
        
        }
        
    }
    
}

Main()