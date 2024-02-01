function createPost() {

    axios.post("https://reqres.in/api/register", {

        email: "eve.holt@reqres.in",
        password: "pistol"

    }).then((res) => console.log(res))
    .catch((err) => console.log(err))

}

createPost()

/*

xios({

        method: "POST", url: "https://reqres.in/api/register",

        data: {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
    
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))

*/