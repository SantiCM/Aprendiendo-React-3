import "./Products.css"
import {AddToCartIcon} from "../components/Icons"

export function Products({products}) {

    return (
        
        <main className="products">

            <ul>

                {products.slice(0,10).map((text) => (
                        
                    <li key={text.id}>

                        <img src={text.thumbnail} alt={text.title}></img>

                        <div>

                            <h3>{text.title}</h3>

                            <span>${text.price}</span>

                            <span>{text.descriptions}</span>

                        </div>

                        <div>

                            <button><AddToCartIcon></AddToCartIcon></button>

                        </div>

                    </li>    

                ))}

            </ul>

        </main>
        
    )

}