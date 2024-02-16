//our-domain.com/news

import Link from "next/link"

function NewsPage() {

  return (

    <>

      <h1>News Page</h1>

      <ul>

        { /* Con el link hacemos que la reaccion a la hora de dar click se renderize mejor, representa una etiqueta
          de anclaje, obeserva el click, evita que el nav predeterminado de una nueva pagina y mejor carga el componente
          permaneciendo en la pagina inicial
        */ }

        <li><Link href="/news/nextjs-is-a-great-framework">Next Js Is A Great Framework</Link></li>

        <li>Something Else</li>

      </ul>
          
    </>
      
    
  )
  
}

export default NewsPage