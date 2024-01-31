// Type indexing
// tenemos un type que recibe un isActive 
type HeroPropertiess = {

    isActive: boolean

    // un address que recibe otro objeto de 2 valores de string
    address: { planet: string, city: string }

}

// esta constante recibe ese tipo
// damos el ["address"], osea que acceder a ese objeto y lo damos
const addressHero:HeroPropertiess["address"] = { planet: "Tierra", city: "Madrid" }

/* --------------------------------------------------------------------------------------- */

// Type from value

// un obj que recibe esto
const address = { planet: "Tierra", city: "Madrid" }

// typeof -> extraer los tipos de un obj, crear codigo a partir del que ya se hizo, oseaaaa
type Address = typeof address

// constante que recibe el type de arriba, y dar SI O SI el codigo ya hecho
const addresPat: Address = { planet: "Tierra", city: "Madrid" /* Lo que siga */}

/* --------------------------------------------------------------------------------------- */

// Type from fuction return
// funcion que retorna un objeto
function createAddress() {

    return { planet: "Tierra", city: "Madrid" }

}

// un type que da el ReturnType y damos el typeOf de esa funcion
type Address1 = ReturnType<typeof createAddress>