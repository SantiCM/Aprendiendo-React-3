// damos las props que necesitamos
export function InputSearchMovies ({handleSubmit, search, handleChange, error}) {
  
  return (

    <>

      {/* Damos el submit */}

      <form onSubmit={handleSubmit}>

        <h1>Buscador De Pelis</h1>

        <label>Busca Tu Pelicula</label>

        {/* Damos un input con su name, valor onChange*/}
        <input name="query" value={search} onChange={handleChange} placeholder="Marvel, DC, Action, Screen"></input>

        <button type="submitt">Buscar</button>

        {/*Si hay error damos este mensaje */}
        {error && <p style={{color: "red"}}>{error}</p>}

      </form>
    
    </>

  )

}