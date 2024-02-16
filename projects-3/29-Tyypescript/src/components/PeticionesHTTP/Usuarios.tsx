import { useUsuarios } from '../../hooks/useUsuarios';
import { Usuario } from '../../interfaces/reqRes';

export const Usuarios = () => {

    // recojemos las propiedades de el hook de los usuario
    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios()

    // dee la interfaz creada del Usuario recojemos todo esto
    const renderItem = ( {id, email, first_name, last_name, avatar}: Usuario ) => {

        return (

            // le damos el key del id
            <tr key={id.toString()}>        

                <th>

                    {/*Le damos el avatar*/}
                    <img src={avatar} alt="User Name" style={ { width: 40, borderRadius: 100 } }/>
                
                </th>

                {/*Le damos el primer nombre y segundo*/}
                <th>{first_name} {last_name}</th>

                {/*El email*/}
                <th>{email}</th>

            </tr>

        )
    
    }   

  return (
    
    <>

        <h3>Usuarios</h3>

        <table className="table">

            <thead>

                <tr>

                    <th>Avatar</th>

                    <th>Nombre</th>

                    <th>Email</th>

                </tr>

            </thead>

            <tbody>

                {

                    // mapeamos los usuarios del renderItem
                    usuarios.map(renderItem)
                
                }

            </tbody>

        </table>

        <button onClick={paginaAnterior} className="btn btn-primary">Pagina Anterior</button>

        <button onClick={paginaSiguiente} className="btn btn-primary">Pagina Siguiente</button>
    
    </>
  
  )

}