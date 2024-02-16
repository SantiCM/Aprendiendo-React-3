
// La tienda, le mandamos el children
export default function Shop( { children } ) {

  return (
  
    <section id="shop">
    
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">

        { /* Mandamos el children para que se muestren los productos */ }

        {children}
      
      </ul>
    
    </section>
  
  );

}