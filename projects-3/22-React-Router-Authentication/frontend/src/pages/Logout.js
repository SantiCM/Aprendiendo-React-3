import { redirect } from "react-router-dom"

export const Action = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("expiration")

    return redirect("/")

}