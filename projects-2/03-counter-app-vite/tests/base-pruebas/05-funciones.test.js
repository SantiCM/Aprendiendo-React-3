import {getUsuarioActivo, getUser} from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
    test("getUser debe retornar un objeto", () => {
        
        const testUser = {
    
            uid: 'ABC123',
    
            username: 'El_Papi1502'
    
        }

        const user = getUser()
        
        expect(testUser).toEqual(user);

    })


    test("getUsuarioActivo debe de retornar un objeto", () => {
        
        const name = "Santiago"

        const user = getUsuarioActivo(name)
    
        console.log(user)
        
        expect(user).toStrictEqual({
        
            uid: "ABC567",
        
            username: name
        
        })
    
    })

})