import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImagen debe de retornar un error si no se encuentra la imagen', async() => {


        const url = await getImagen()
        expect(typeof url).toBe("string")

    })     
})
