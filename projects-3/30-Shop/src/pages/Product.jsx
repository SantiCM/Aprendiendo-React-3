import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../components/Breadcrum/Breadcrum'
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay'


export const Product = () => {

  const {all_product} = useContext(ShopContext)

  const {productId} = useParams()

  const product = all_product.find((e) => e.id === Number(productId))

  return (
      
    <div>

      <Breadcrum product={product}></Breadcrum>

      <ProductDisplay product={product}></ProductDisplay>

    </div>
     
  )

}
