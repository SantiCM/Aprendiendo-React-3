import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

export const PagesHeroes = () => {

    const { id } = useParams()
  
    const hero =  useMemo(() => getHeroById(id), [id])  

    const navigate = useNavigate()

    const onNavigate = () => {

        navigate(-1)
    
    }
    
    
    if(!hero) {
    
        return <Navigate to="/marve"></Navigate>

    }
    
    return (

        <div className="row mt-5 ">
        
            <div className="col-4">
        
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail  animate__animated animate__fadeInLeft"></img>
        
            </div>

            <div className="col-8">

                <h3>{hero.superhero}</h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>

                    <li className="list-group-item"><b>Publisger: </b>{hero.publisher}</li>

                    <li className="list-group-item"><b>First Appearance: </b>{hero.first_appearance}</li>

                </ul>

                <h5 className="mt-3">Characters</h5>

                <p>{hero.characters}</p>

                <button 
                     
                     onClick={onNavigate}

                    className="btn btn-primary"

                >
                    Regresar
                    
                </button>

            </div>
        
        </div>   
    
    )

}