function Delete() {

    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

}

Delete()