import {heroes} from "../data/heroes"

export const getHeroesByPublished = (publisher) => {

    const validPublished = ["DC Comics", "Marvel Comics"]

    if( !validPublished.includes(publisher)) {
        throw new Error(`${publisher} is not valid`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)

}
 
