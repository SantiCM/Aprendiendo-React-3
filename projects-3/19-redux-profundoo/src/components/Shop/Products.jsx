import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [

  { id: "p1",

    price: 6,

    title: "My first Book",

    description: "The first bookk, I ever wrote"

  }, 

  { id: "p2",

    price: 5,

    title: "My second Book",

    description: "The second bookk, I ever wrote"
  
  }


]

const Products = (props) => {
  
  return (
  
    <section className={classes.products}>
    
      <h2>Buy your favorite products</h2>
    
      <ul>

        {DUMMY_PRODUCTS.map((product) => (
        
          <ProductItem

            key={product.id}

            id={product.id}
    
            title={product.title}
        
            price={product.price}
        
            description={product.description}
      
          />
        
        ))}
    
      </ul>
    
    </section>
  
  );

};

export default Products;