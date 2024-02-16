import { useRouter } from "next/router"

const Desc = () => {
    const router = useRouter()
    console.log({router})
    return (
        <div>Descripcion de Pokemom</div>    
    )
}

export default Desc