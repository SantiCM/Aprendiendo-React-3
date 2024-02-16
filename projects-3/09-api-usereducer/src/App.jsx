import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import { CartContextProvider } from './store/Shopping-cart-context.jsx';

// Mandamos el componente App
const App = () => {

  return (
    
  
    <CartContextProvider>
    
      <Header/>
      
      <Shop>

        { /* Mandamos el archivo de js, donde tenemos el array de los productos y lo mapeamos, le damos una funcion*/ }

        {DUMMY_PRODUCTS.map((product) => (

          // le damos su key que viene del id
          <li key={product.id}>
            
            { /* Mandamos la copia de la primera funcion */ }
            
            <Product {...product}/>
    
          </li>
  
        ))}

      </Shop>
    
    </CartContextProvider>
  
  );

}

export default App;
