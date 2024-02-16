import axios from "axios"

// damos con axios el crear la api
export const reqRes = axios.create({

    baseURL: "https://reqres.in/api"

})