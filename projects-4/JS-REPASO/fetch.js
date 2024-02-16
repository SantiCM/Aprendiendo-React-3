const url = "https://jsonplaceholder.typicode.com/users"

/*fetch(url, {
    method : "POST", // GET, POST, PUSH
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer acadebieseexistiruntokendeautorizacion"
    },
    body: JSON.stringify({
        name: "Santiago",
        website: "google.com"
    })
})
.then ((response) => response.json())
.then(data => console.log(data)) */


const fn = async () => {
    const response = await fetch(url, {
        method : "POST", // GET, POST, PUSH
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer acadebieseexistiruntokendeautorizacion"
        },
        body: JSON.stringify({
            name: "Santiago",
            website: "google.com"
        })
    })
    const data = await response.json()
    console.log(data);
}

fn()