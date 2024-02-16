import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas"

// El done es esperar hasta que ese codigo termine

describe("Pruebas en 09-promesas", () => {
    test("getHeroeByIdAsync debe retornar un héroe async", (done) => {
        const id = 1 
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: "Batman",
                owner: "DC"
            })
        })

        done()
    })

    test("getHeroeByIdAsync obtener un error si heroe su id no es valido", (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy()
        })
        .catch(error => {
            expect(error).toBe(`No se pudo encontrar el heroe con el id ${id}`)
            
        })
        done();
    })
})

