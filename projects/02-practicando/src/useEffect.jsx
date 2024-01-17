//useEffect es un hook, que deja hacer codigo arbritario, cuando el componente se da en el DOM
//y cada vez que las dependencias, que nosotros mismos le decimos
//por cada dependencia se vuelva a ejecutar el codigo

import { useEffect, useState } from "react"

const Component = () => {

    const [value, setValue] = useState()

    useEffect(() => {

        // se ejecuta cada que se renderize 
        // como minimo se ejecuta una vez

        console.log("useEffect")

        //lista de dependencias (opcional)
        // esta dependencias, es, por ejemplo
        // si tienes un estado donde manejas un valor
        // y se lo mandas como dependecia
        // lo que pasara esque por cada vez que ese valor entre este efecto se renderizara

    }, [/* Dependencia*/])

    //¿PARA QUE SIRVE? = Siempre es indespensable tener efectos a la hora de que algo pase en especifico
    // guardar en base de datos, etc

}