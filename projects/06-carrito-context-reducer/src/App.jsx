import {Products} from "./components/Products"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { IS_DEVELOPMENT } from "./config"
import { Cart } from "./components/Cart"
import { CartContextProvider } from "./context/CartContext"

export function App() {

    // recojemos los filtros de los productos del hook
    const { filterProducts } = useFilters()

    // y decimos que los filtros ya hechos es lo de arriba y le damos el json de los products
    const filteredProducts = filterProducts(initialProducts)

    return (

        <>

            <Header></Header>

            <CartContextProvider>

             <Cart></Cart>

                <Products products={filteredProducts}></Products>

                { IS_DEVELOPMENT && <Footer></Footer> }

            </CartContextProvider>

        </>
    
    )

}