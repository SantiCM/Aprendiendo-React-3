import axios from "axios"
import { Users } from "./interface/inter"

let users = []

const axiosInstance = axios.create({

  baseURL: "https://jsonplaceholder.typicode.com"

})

const button = document.querySelector("button")

button?.addEventListener("click", () => {

  inicializarApp()


})

async function inicializarApp() {

  const res = await axiosInstance.get<Users[]>("/users")

  console.log(res)

  users = res.data

  const ul = document.querySelector("ul")

  users.forEach((user:any) => {
    
    const li = document.createElement("li")

    li.textContent = `${user.name}, ${user.username}, ${user.email}`

    ul?.appendChild(li)
    
  })
  
}