import {useRouter} from "next/router"

//our-domain.com/news/something-important

// Poner corchetes en la extensio es una forma de decir que sera una pagina dinamica
// ruta dinamica, flexibles 
function DetailPage() {

  // acceso a un objeto,obteniendo datos y metodos que llamar, como en la url
  const router = useRouter()

  // nos da acceso a un objeto anidado, en ese objeto tenemos el indentificador de la extension de este archivo
  // poner el idenficador
  const newsId = router.query.newsId

  // enviar solicitud http
  
  return (
      
    <h1>Detail Page</h1>
      
  )
  
}

export default DetailPage