//import { Fragment } from "react"

// JSON.stringify = Mostrar el objeto como tal

/*const newMessage = {
    message: "Hola",
    name: "Santiago"
};*/

/*const getResults = () => {
    return 4 + 4;
}*/

import PropTypes from "prop-types"

export const FirstApp = ( { 
    title, subTitle, name } ) => {

    //console.log(props)
    
    return (
        <>
            {/*getResults()*/}

            <h1 data-testid="test-title">{ title }</h1>

            { /*JSON.stringify(newMessage) */} 

            <p>{subTitle}</p>

            <p>{subTitle}</p>

            <p>{name}</p>
        </>   
    )
}

FirstApp.propTypes =  {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    //title: "No hay titulo",
    subTitle: "No hay subtitulo",
    name: "Santiago Cano",
}

export default FirstApp;