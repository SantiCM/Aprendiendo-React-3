const CAT_ENDPOINT_DEFAULT= "https://catfact.ninja/fact"

// fetcg, async
export const getRandomFact = async () => {

    // recojemos la res, del await del fecth de la api
    const response = await fetch(CAT_ENDPOINT_DEFAULT)

    // recojemos la data del await y lo volvemos json
    const data = await response.json()

    // recojemos el fact de la data
    const { fact } = data

    // retornamos el fact
    return fact

}