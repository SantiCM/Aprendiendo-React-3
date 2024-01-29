export const MapeoPerosnajes = ({data}) => {
    
    return (
        
        <li key={data}>

            <h4>Nombres: {data.firstName}</h4>

            <h2>Nombre Completo: {data.fullName}</h2>

            <img src={data.imageUrl} width={220}></img>

            <h4>Nombres: {data.firstName}</h4>

        </li>
  
    )

}