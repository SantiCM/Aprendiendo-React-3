function getPost() {

    //axios.get("https://jsonplaceholder.typicode.com/posts")

    // o 

    axios.get("https://jsonplaceholder.typicode.com/posts", {

        params: {
            
            _limit: 2 // limite de cuantos objetos quiero que lleguen
        
        }

    })
    
    .then((res) => console.log(res))
    
    .catch((error) => console.log(error))

}

getPost()

/* 

axios({
        
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET"
    
    })
    
    .then((res) => console.log(res))
    
    .catch((error) => console.log(error))

*/