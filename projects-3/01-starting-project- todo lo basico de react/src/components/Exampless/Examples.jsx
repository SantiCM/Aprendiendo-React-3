import { useState } from 'react'
import { TabButton } from '../TabButton/TabButton'
import { EXAMPLES } from '../../data'
import { Section } from '../Section/Section'
import { Tabs } from '../Tabs/Tabs'

export const Examples = () => {

    // mandamos un estado sin nada de argumento
    const [selectedTopic, setSelectedTopic] = useState()

    // hacemos una variable del click que recibe el select
    const handleClick = (selectedButton) => {

        // a ese otro estado le mandamos el argumento
        setSelectedTopic(selectedButton)

    } 

    // mandamos una variable que manda contenido jsx 
    
    let tabContent = <p>Please select a topic.</p>

    // si esta seleccionado el topic
    // entonces le damos el contenido jsx de la explicacion
    if (selectedTopic) {

        tabContent = 
        
        <div id="tab-content">

            { /* Aqui es mandar llamar la variable, mandarle como array el estado inicial y la propiedad que ocupamos   */}
            <h3>{EXAMPLES[selectedTopic].title}</h3>

            <p>{EXAMPLES[selectedTopic].description}</p>

            <code>{EXAMPLES[selectedTopic].code}</code> 

        </div>
    
    }


    return (

        <Section title="Examnples" id="examples">

            <Tabs 

                buttonsContainer="menu"

                // buttonsContainer={Section} 

                buttons={
                
                    <>

                        <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>

                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>

                        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>

                        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
                
                    </>

                }
            
            >
                
                { /* Aqui mandamos la variale si esta seleccinado o no */ }

                {tabContent}

            </Tabs>

        </Section>


    )

}