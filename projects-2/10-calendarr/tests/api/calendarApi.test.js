import calendarApi from "../../src/api/calendarApi"

describe('Pruebas en calendarApi', () => { 

    test('debe de tener la configuracion por defecto', () => { 

        // espero que el calendarApi.default.baseURL que sea igual a la variable de entorno
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
    
    })

    test('debe de tener el x-token en el header de todas las peticiones', async() => { 
        
        // mandamos un token fictisio
        const token = "ABC-123-YWZ"

        // lo guardamos con e "token "
        localStorage.setItem("token", token)

        // la respuesta del calendarApi que viene del url "/auth"
        const res = await calendarApi.get("/auth")

        // esperamos que la respuesta.config de los header con esta propiedad
        // "x-token" sea igual al token
        expect(res.config.headers["x-token"]).toBe(token)
    
    
    })

})