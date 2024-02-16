import { CORE_CONCEPTS } from "../../data"
import { CoreConcep } from "../CoreConcep/CoreConcep"
import { Section } from "../Section/Section"


export const CoreConcepts = () => {

    return (
        
        <Section id="core-concepts">

            <h2>Core Concepts</h2>

            <ul>

                {
            
                    CORE_CONCEPTS.map((concepItem) => (

                        <CoreConcep key={concepItem.title} {...concepItem}></CoreConcep>
              
                    ))
            
                }

            </ul>

        </Section>
        
    )


}