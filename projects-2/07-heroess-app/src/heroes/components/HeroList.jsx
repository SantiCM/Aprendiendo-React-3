import { useMemo } from "react"
import { getHeroesByPublished } from "../helpers/getHeroesByPublished"
import { HeroCard } from "./HeroCard"


export const HeroList = ({publisher}) => {

  const heroes =useMemo(() =>  getHeroesByPublished(publisher), [publisher] )

  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-3">

      {
        
        heroes.map(hero => (
        
          <HeroCard 
          
            key={hero.id}
            
            {...hero} // Copia de todas las propiedades
          >

          </HeroCard>
        
        ))

      }

    </div>
  
  )

}

